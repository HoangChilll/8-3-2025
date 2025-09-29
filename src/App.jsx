import Header from"./Components/Header.jsx"
import Player from "./Components/Player.jsx";
import TimeStopper from "./Components/TimeStopper.jsx";
function App() {
  return (
    <>
    <Header>
    </Header>
    <Player>
    </Player>
    <div id="challenges">
    <TimeStopper title="level 1" targettime={1}/>
    <TimeStopper title="level 2" targettime={5}/>
    <TimeStopper title="level 3" targettime={10}/>
    <TimeStopper title="level 4" targettime={20}/>
      </div>
    </>
  );
}

export default App;
