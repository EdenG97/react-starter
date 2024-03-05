import { WELCOME_TEXT } from "../constants";
import { DUMMY_CARD_INFO } from "./data";

function ContentCard() {
  return (
    <section className="max-w-96 m-auto text-white">
      <p className="text-black mb-1 xsm:text-xs">{WELCOME_TEXT}</p>
      <div className="p-2 border bg-primary rounded-lg shadow-md">
        <div className="flex gap-4">
          <img
            src={DUMMY_CARD_INFO.image}
            alt={DUMMY_CARD_INFO.name}
            className="rounded-full border w-14 h-14 xsm:w-8 xsm:h-8 border-black"
          />
          <div className="flex justify-between w-full">
            <div>
              <p className="font-bold xsm:text-xs">{DUMMY_CARD_INFO.name}</p>
              <p className="text-secondary xsm:text-xs">
                {DUMMY_CARD_INFO.position}
              </p>
            </div>
            <div className="text-end">
              <p className="text-secondary xsm:text-xs">
                {DUMMY_CARD_INFO.member_price}
              </p>
              <p className="font-bold xsm:text-xs">{DUMMY_CARD_INFO.date}</p>
            </div>
          </div>
        </div>
        <div className="h-3"></div>
        <div className="flex justify-between">
          <div>
            <p className="text-secondary xsm:text-xs">
              {DUMMY_CARD_INFO.location}
            </p>
            <p className="font-bold xsm:text-xs">{DUMMY_CARD_INFO.address}</p>
          </div>
          <p className="self-end text-secondary xsm:text-xs">
            {DUMMY_CARD_INFO.ico}
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContentCard;
