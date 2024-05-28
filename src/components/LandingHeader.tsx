import { FC } from "react";
import ChartInfo from "./ChartInfo";

const LandingHeader: FC = () => {
  return (
    <div className="h-14 flex gap-4">
      <ChartInfo
        title={"가상자산 Top 30"}
        total={"1,278.44"}
        percent={"-1.05"}
        image={"1"}
      />
      <ChartInfo
        title={"메인넷"}
        total={"2,083.50"}
        percent={"-0.99"}
        image={"2"}
      />
      <ChartInfo
        title={"한국 가상자산"}
        total={"408.45"}
        percent={"+0.22"}
        image={"3"}
      />
      <ChartInfo
        title={"NFT/게임"}
        total={"768.27"}
        percent={"+1.13"}
        image={"4"}
      />
      <ChartInfo
        title={"DeFi"}
        total={"229.82"}
        percent={"-0.28"}
        image={"5"}
      />
      <ChartInfo title={"DEX"} total={"516.86"} percent={"-2.73"} image={"6"} />
      <ChartInfo
        title={"렌딩/대출"}
        total={"327.66"}
        percent={"-2.63"}
        image={"7"}
      />
      <ChartInfo
        title={"파생상품"}
        total={"279.91"}
        percent={"-1.69"}
        image={"8"}
      />
      <ChartInfo
        title={"자산관리"}
        total={"143.31"}
        percent={"-3.98"}
        image={"9"}
      />
    </div>
  );
};

export default LandingHeader;
