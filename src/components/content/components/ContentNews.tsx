import { useState } from "react";
import { PCS_NEWS } from "../constants";
import { DUMMY_NEWS } from "../data";

function ContentNews() {
  const [activeNews, setActiveNews] = useState(1);
  function getCardPositionStyle() {
    let style = "-translate-x-full";
    if (activeNews === 1) {
      style = `translate-x-full`;
    } else if (activeNews === 2) {
      style = "translate-x-0";
    }

    return style;
  }

  function getCardAnimationStyle(cardId: number) {
    return activeNews === cardId
      ? "duration-300 opacity-100"
      : "duration-300 opacity-30 scale-95";
  }

  return (
    <section className="max-w-[32rem] flex flex-col m-auto overflow-hidden">
      <p className="font-bold mb-1 w-96 m-auto xsm:text-xs">{PCS_NEWS}</p>
      <div className="flex justify-center items-center">
        {DUMMY_NEWS.map((item) => (
          <div
            key={item.id}
            className={`p-2 border rounded-lg shadow-md flex flex-col gap-2 min-w-96 sm:text-sm sm:min-w-80 xsm:!min-w-full 
            ${getCardAnimationStyle(item.id)} ${getCardPositionStyle()}`}
          >
            <div className="flex gap-4 w-full">
              <img
                className="h-10 w-12 bg-orange-400 rounded-full border border-gray-500"
                src={item.image}
                alt={item.name}
              />
              <div className="flex justify-between items-center w-full">
                <p className="text-primary font-bold xsm:text-xs">
                  {item.name}
                </p>
                <div className="text-end">
                  <p className="xsm:text-xs">{item.day}</p>
                  <p className="xsm:text-xs">{item.date}</p>
                </div>
              </div>
            </div>
            <ul className="w-full text-start xsm:text-xs">
              {item.comments.map((comment) => (
                <li key={comment.id}>{comment.description}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="h-3"></div>
      <ul className="flex gap-1 justify-center">
        {DUMMY_NEWS.map((item) => (
          <li key={item.id}>
            <button
              className={`block ${
                activeNews === item.id ? "bg-primary-red" : "bg-gray-300"
              } h-3 w-3 rounded-full`}
              onClick={() => setActiveNews(item.id)}
            ></button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ContentNews;
