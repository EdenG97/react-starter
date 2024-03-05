import { DUMMY_ONLINE_LIST } from "./data";

function ContentOnlineList() {
  return (
    <section className="max-w-96 m-auto xsm:overflow-x-scroll">
      <p className="font-bold mb-1 xsm:text-xs">Online</p>
      <div className="p-2 border rounded-lg shadow-md flex justify-center items-center xsm:min-w-80">
        {DUMMY_ONLINE_LIST.map((item) => (
          <div
            key={item.id}
            className={`z-[${item}] ${
              item.id === 1 ? "m0" : "ml-[-12px]"
            } overflow-hidden flex flex-col items-center`}
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-10 w-10 rounded-full bg-yellow-400 shadow-lg"
            ></img>
            <p className="font-bold text-[0.6rem]">{item.name}</p>
            <p className="text-[0.6rem] leading-none">{item.tag}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ContentOnlineList;
