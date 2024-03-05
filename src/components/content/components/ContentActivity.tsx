import { useEffect, useState } from "react";
import { LuClock6, LuClock9, LuTimerReset } from "react-icons/lu";
import {
  CHECK_IN,
  CHECK_OUT,
  NO_TIMER,
  TODAY_ACTIVITY,
  WORKING_HOURS,
} from "../constants";

function ContentActivity() {
  const [timeLeft, setTimeLeft] = useState(3 * 60 * 60);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  function convertTimeToHHMM(time: Date) {
    const date = new Date(time);
    const hours = date.getHours().toString();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  const currentTime = new Date();

  return (
    <section className="flex flex-col max-w-96 m-auto px-2">
      <p className="font-bold self-start mb-2 xsm:text-xs">{TODAY_ACTIVITY}</p>
      <div className="grid grid-cols-3 gap-4 place-items-end- text-center">
        <div className="flex flex-col items-center">
          <LuClock9 size="24" color="red" />
          <div className="h-1"></div>
          <p className="font-bold xsm:text-xs">
            {convertTimeToHHMM(currentTime)}
          </p>
          <p className="xsm:text-xs">{CHECK_IN}</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <LuTimerReset size="24" color="red" />
          <div className="h-1"></div>
          <p className="font-bold text-primary xsm:text-xs">{`${hours
            .toString()
            .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds
            .toString()
            .padStart(2, "0")}`}</p>
          <p className="xsm:text-xs">{WORKING_HOURS}</p>
        </div>
        <div className="flex flex-col items-center">
          <LuClock6 size="24" color="red" />
          <div className="h-1"></div>
          <p className="font-bold xsm:text-xs">{NO_TIMER}</p>
          <p className="xsm:text-xs">{CHECK_OUT}</p>
        </div>
      </div>
    </section>
  );
}

export default ContentActivity;
