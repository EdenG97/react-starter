import { Dispatch, SetStateAction } from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { Screen } from "./enum";

interface HeaderProps {
  homeScreen: boolean;
  dispatchChangeScreen: Dispatch<SetStateAction<Screen>>;
}

function Header({ homeScreen, dispatchChangeScreen }: HeaderProps) {
  return (
    <header
      className={`max-w-primary px-primary pt-4 pb-3 m-auto flex items-center ${
        homeScreen ? "justify-between" : "gap-4"
      } `}
    >
      {homeScreen ? (
        <>
          <h1 className="text-primary font-bold">KerjaYuk!</h1>
          <button onClick={() => dispatchChangeScreen(Screen.NOTIFICATION)}>
            <IoNotificationsOutline size="24" />
          </button>
        </>
      ) : (
        <>
          <button onClick={() => dispatchChangeScreen(Screen.HOME)}>
            <MdOutlineKeyboardBackspace size="24" />
          </button>
          <h1 className="text-primary font-bold">Notification</h1>
        </>
      )}
    </header>
  );
}

export default Header;
