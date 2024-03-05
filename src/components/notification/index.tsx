import { DUMMY_NOTIFICATION_DATA } from "./data";

function Notification() {
  return (
    <ul className="max-w-primary m-auto">
      {DUMMY_NOTIFICATION_DATA.map((notification) => (
        <li
          key={notification.id}
          className={`flex gap-4 items-start ${
            notification.active ? "bg-blue-200" : "bg-white"
          } p-primary`}
        >
          <img
            className="border h-14 w-14 xsm:h-10 xsm:w-10 rounded-lg bg-white"
            src={notification.image}
            alt={notification.description}
          />
          <div>
            <h3 className="font-bold xsm:text-xs">{notification.title}</h3>
            <p className="xsm:text-xs">{notification.description}</p>
          </div>
          <p className="text-gray-500 font-semibold xsm:text-xs">
            {notification.date.toDateString()}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default Notification;
