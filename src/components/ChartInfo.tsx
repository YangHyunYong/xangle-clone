import React, { FC } from "react";
import { CgArrowDown } from "react-icons/cg";

const ChartInfo: FC = () => {
  return (
    <div className="flex justify-between gap-4 p-2 w-[330px] h-full">
      <div className="w-[38px] bg-xangle-red-100 rounded-lg">
        <CgArrowDown className="size-6 " />
      </div>
      <div className="flex justify-between w-[260px]">
        <div className="w-[144px]">
          <div>가상자산 Top 30</div>
          <div className="flex justify-between">
            <div>1265.23</div>
            <div>-3.97%</div>
          </div>
        </div>
        <div className="w-[100px] bg-slate-500">그래프</div>
      </div>
    </div>
  );
};

export default ChartInfo;
