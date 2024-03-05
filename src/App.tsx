import { useState } from "react";
import BottomNavigationBar from "./components/BottomNavigationBar";
import Header from "./components/Header";
import Content from "./components/content";
import { Screen } from "./components/enum";
import Notification from "./components/notification";

function App() {
  const [screen, setScreen] = useState<Screen>(Screen.HOME);

  return (
    <>
      <Header dispatchChangeScreen={setScreen} activeScreen={screen} />
      {screen === Screen.HOME ? (
        <>
          <Content />
          <BottomNavigationBar />
        </>
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
