package com.hoang.monitoring.entity;
import jakarta.persistence.*;
import lombok.*;

import java.time.Instant;

@Entity
@Table(name = "check_logs", indexes = {
        @Index(name = "idx_checklog_website", columnList = "website_id"),
        @Index(name = "idx_checklog_checked_at", columnList = "checked_at")
})
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CheckLog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "website_id", nullable = false)
    private Website website;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 20)
    private CheckStatus status;

    private Integer statusCode;             // HTTP status code (nullable nếu lỗi network)

    @Column(nullable = false)
    private Long responseTimeMs;            // Thời gian phản hồi (ms)

    @Column(length = 1000)
    private String errorMessage;            // Nullable, chỉ có khi DOWN

    @Column(name = "checked_at", nullable = false, updatable = false)
    private Instant checkedAt;

    @PrePersist
    void onCreate() {
        this.checkedAt = Instant.now();
    }
}