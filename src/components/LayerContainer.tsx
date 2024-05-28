import { FC } from "react";
import { CgArrowRight } from "react-icons/cg";
import Research from "./Research";
import Event from "./Event";

interface LayerContainerProps {
  name: string;
}

const LayerContainer: FC<LayerContainerProps> = ({ name }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center w-[106px] font-bold">
        <div className="text-[24px]">{name}</div>
        <div className="p-1">
          <CgArrowRight className="size-6"></CgArrowRight>
        </div>
      </div>
      {name === "리서치" && <Research />}
      {name === "이벤트" && <Event />}
    </div>
  );
};

export default LayerContainer;
