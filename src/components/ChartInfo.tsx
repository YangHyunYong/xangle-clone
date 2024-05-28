import { FC } from "react";
import { CgArrowDown } from "react-icons/cg";

interface ChartInfoProps {
  title: string;
  total: string;
  percent: string;
  image: string;
}

const ChartInfo: FC<ChartInfoProps> = ({ title, total, percent, image }) => {
  return (
    <div className="flex justify-between gap-4 p-2 w-[330px] h-full">
      <div className="w-[38px] bg-xangle-red-100 rounded-lg flex justify-center items-center">
        <CgArrowDown className="size-6 text-xangle-red-150" />
      </div>
      <div className="flex justify-between items-center w-[260px]">
        <div className="w-[144px]">
          <div className="text-xangle-main-200 text-[12px] font-semibold">
            {title}
          </div>
          <div className="flex justify-between tracking-tight">
            <div className="text-[20px] text-xangle-gray-200 font-bold">
              {total}
            </div>
            <div className="flex items-center justify-center">
              <div className="flex items-center rounded-sm bg-xangle-green-50 text-xangle-green-75 font-bold text-[12px] mr-1 px-2 py-1 w-[54px] h-[24px]">
                {percent}%
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100px] ">
          <img src={`./graphs/${image}.png`} alt="graph"></img>
        </div>
      </div>
    </div>
  );
};

export default ChartInfo;
