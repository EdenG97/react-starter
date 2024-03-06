import { Dispatch, SetStateAction } from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { LOGO_TEXT, NOTIFICATION } from "./constants";
import { Screen } from "./enum";

interface HeaderProps {
  homeScreen: boolean;
  dispatchChangeScreen: Dispatch<SetStateAction<Screen>>;
}

function Header({ homeScreen, dispatchChangeScreen }: HeaderProps) {
  return (
    <header
      className={`px-primary pt-4 pb-3 ${
        homeScreen
          ? "max-w-primary justify-between m-auto flex items-center"
          : "fixed bg-white w-full shadow-md"
      }`}
    >
      {homeScreen ? (
        <>
          <h1 className="text-primary font-bold">{LOGO_TEXT}</h1>
          <button onClick={() => dispatchChangeScreen(Screen.NOTIFICATION)}>
            <IoNotificationsOutline size="24" />
          </button>
        </>
      ) : (
        <div className="w-[1440px] m-auto flex items-center gap-4">
          <button onClick={() => dispatchChangeScreen(Screen.HOME)}>
            <MdOutlineKeyboardBackspace size="24" />
          </button>
          <h1 className="text-primary font-bold">{NOTIFICATION}</h1>
        </div>
      )}
    </header>
  );
}

export default Header;
