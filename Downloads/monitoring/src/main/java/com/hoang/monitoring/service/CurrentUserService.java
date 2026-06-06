package com.hoang.monitoring.service;


import com.hoang.monitoring.entity.User;
import com.hoang.monitoring.exception.BadRequestException;
import com.hoang.monitoring.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CurrentUserService {

    private final UserRepository userRepository;

    /**
     * TODO Phase 4: Lấy user từ SecurityContextHolder (JWT principal).
     * Tạm thời: lấy user đầu tiên trong DB.
     */
    public User getCurrentUser() {
        return userRepository.findAll().stream()
                .findFirst()
                .orElseThrow(() -> new BadRequestException(
                        "No user in database. Run app with profile 'dev' to seed data."));
    }
}