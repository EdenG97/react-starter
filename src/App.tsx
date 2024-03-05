import { useState } from "react";
import BottomNavigationBar from "./components/BottomNavigationBar";
import Header from "./components/Header";
import Content from "./components/content";
import { Screen } from "./components/enum";
import Notification from "./components/notification";

function App() {
  const [screen, setScreen] = useState<Screen>(Screen.HOME);
  const isHomeScreen = screen === Screen.HOME;

  return (
    <>
      <Header dispatchChangeScreen={setScreen} homeScreen={isHomeScreen} />
      {isHomeScreen ? (
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
