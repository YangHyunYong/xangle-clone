import { FC } from "react";

interface ResearchItemProps {
  type: string;
  title: string;
}

const ResearchItem: FC<ResearchItemProps> = ({ type, title }) => {
  return (
    <div className="flex p-2 gap-4 whitespace-nowrap">
      <div className="text-xangle-main-200 font-semibold py-[2px] px-[4px] bg-xangle-main-100 text-[12px] rounded-md">
        {type}
      </div>
      <div className="font-bold overflow-hidden overflow-ellipsis ">
        {title}
      </div>
    </div>
  );
};

export default ResearchItem;
