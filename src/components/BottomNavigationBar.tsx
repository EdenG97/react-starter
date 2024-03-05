import { useState } from "react";
import { FaRegCalendarCheck, FaWpforms } from "react-icons/fa";
import { ImExit } from "react-icons/im";
import { IoIosSettings } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { BottomTab } from "./enum";

function BottomNavigationBar() {
  const [activeTab, setActiveTab] = useState<BottomTab>(BottomTab.HOME);

  function getTextStyle(tab: string) {
    if (tab === activeTab) {
      return "text-primary font-semibold";
    }
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 pb-1 pt-3 bg-white border shadow-[0_5px_10px_5px_gray]">
      <ul className="max-w-primary px-primary m-auto text-gray-500 grid grid-cols-5 items-end place-items-center gap-2 sm:text-sm">
        <li>
          <button
            onClick={() => setActiveTab(BottomTab.HOME)}
            className={`${getTextStyle(
              BottomTab.HOME
            )} flex flex-col items-center xsm:text-xs`}
          >
            <IoHome />
            {BottomTab.HOME}
          </button>
        </li>
        <li>
          <button
            onClick={() => setActiveTab(BottomTab.ATTENDANCE)}
            className={`${getTextStyle(
              BottomTab.ATTENDANCE
            )} flex flex-col items-center xsm:text-xs`}
          >
            <FaRegCalendarCheck />
            {BottomTab.ATTENDANCE}
          </button>
        </li>
        <li>
          <button
            onClick={() => BottomTab.CHECKOUT}
            className="flex flex-col items-center text-primary relative font-semibold xsm:text-xs text-nowrap"
          >
            <div className="h-14 w-14 bg-primary-red rounded-full flex items-center justify-center absolute -top-14">
              <ImExit color="white" size="22" />
            </div>
            {BottomTab.CHECKOUT}
          </button>
        </li>
        <li>
          <button
            onClick={() => setActiveTab(BottomTab.FORM)}
            className={`${getTextStyle(
              BottomTab.FORM
            )} flex flex-col items-center xsm:text-xs`}
          >
            <FaWpforms />
            {BottomTab.FORM}
          </button>
        </li>
        <li>
          <button
            onClick={() => setActiveTab(BottomTab.SETTING)}
            className={`${getTextStyle(
              BottomTab.SETTING
            )} flex flex-col items-center xsm:text-xs`}
          >
            <IoIosSettings />
            {BottomTab.SETTING}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default BottomNavigationBar;
