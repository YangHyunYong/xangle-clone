import { FC } from "react";

interface EventItemProps {
  type: string;
  title: string;
  badge: string;
  image: string;
  name: string;
  date: string;
}

const EventItem: FC<EventItemProps> = ({
  type,
  title,
  badge,
  image,
  name,
  date,
}) => {
  return (
    <div className="h-[60px] p-2 flex gap-2">
      <div className="text-xangle-token h-11 w-12 text-[12px] font-bold">
        {type}
      </div>
      <div className="flex flex-col w-full gap-1">
        <div className="font-bold overflow-hidden overflow-ellipsis">
          {title}
        </div>
        <div className="flex  justify-between">
          <div className="flex gap-1 text-[12px] items-center">
            <img
              className="w-4 h-4 rounded-xl mr-1"
              src={image}
              alt="token"
            ></img>
            <div className="font-bold">{name}</div>
            <div className="text-xangle-main-200 font-semibold py-[2px] px-[4px] bg-xangle-main-100 text-[12px] rounded-md">
              {badge}
            </div>
          </div>
          <div className="text-xangle-gray-75">{date}</div>
        </div>
      </div>
    </div>
  );
};

export default EventItem;
