import { FC } from "react";
import { CgArrowRight } from "react-icons/cg";
import List from "./List";

const LayerSideContainer: FC = () => {
  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="flex w-full justify-between">
        <div className="flex justify-between items-center font-bold gap-2">
          <div className="text-[24px]">자산시세</div>
          <div className="p-1">
            <CgArrowRight className="size-6"></CgArrowRight>
          </div>
        </div>
        <div className="flex items-center">
          <div className="text-[14px] text-xangle-gray-200">팔로잉만</div>
          <div>버튼</div>
        </div>
      </div>
      <List></List>
    </div>
  );
};

export default LayerSideContainer;
