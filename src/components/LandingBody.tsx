import { FC } from "react";
import LayerContainer from "./LayerContainer";
import LayerSideContainer from "./LayerSideContainer";
import Divider from "./Divider";

const LandingBody: FC = () => {
  return (
    <div className="flex items-stretch w-full gap-4">
      <div className="flex-2-1-0 flex gap-4">
        <div className="flex-1">
          <LayerContainer name={"리서치"} />
        </div>
        <Divider type={"r"}></Divider>
        <div className="hidden md-lg:flex flex-1">
          <LayerContainer name={"이벤트"}></LayerContainer>
        </div>
      </div>
      <Divider type={"r"}></Divider>
      <div className="hidden xl:flex flex-shrink-0 w-[360px]">
        <LayerSideContainer></LayerSideContainer>
      </div>
    </div>
  );
};

export default LandingBody;
