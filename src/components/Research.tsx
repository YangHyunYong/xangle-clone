import { FC } from "react";
import TagButton from "./TagButton";
import ResearchItem from "./ResearchItem";

const Research: FC = () => {
  return (
    <div className="pt-2">
      <div className="h-[177px] bg-slate-500"></div>
      <div className="flex gap-1 pt-2">
        <TagButton name="전체" selected={true}></TagButton>
        <TagButton name="게임"></TagButton>
        <TagButton name="인프라"></TagButton>
        <TagButton name="일반"></TagButton>
        <TagButton name="DeFi"></TagButton>
        <TagButton name="NFT"></TagButton>
      </div>

      <div className="h-[576px] pt-4 flex flex-col gap-2">
        <ResearchItem
          type={"규제"}
          title={"주요국 가상자산 규제 방향과 시사점"}
        ></ResearchItem>
        <ResearchItem
          type={"정기 간행물"}
          title={"[Weekly Xangle] 연이은 호재에 급등한 이더리움"}
        ></ResearchItem>
        <ResearchItem
          type={"레이어 1"}
          title={"코리움(Coreum) 1Q24 Review"}
        ></ResearchItem>
        <ResearchItem
          type={"블록체인"}
          title={"뱅크리스 코스코스(Cosmos) 가이드"}
        ></ResearchItem>
        <ResearchItem
          type={"매크로"}
          title={"아부다비 vs 두바이 : 웹3 허브 쟁탈전"}
        ></ResearchItem>
        <ResearchItem
          type={"기타"}
          title={"상업용 부동산과 RWA"}
        ></ResearchItem>
        <ResearchItem
          type={"레이어 2"}
          title={"맨틀 네트워크, 모듈러 레이어2의 디파이 혁신"}
        ></ResearchItem>
        <ResearchItem
          type={"정기간행물"}
          title={"[Weekly Xangle] 매크로 개선에 급등한 비트코인"}
        ></ResearchItem>

        <ResearchItem
          type={"멀티체인"}
          title={"체인링크는 어떻게 돈을 버는가?"}
        ></ResearchItem>
        <ResearchItem
          type={"레이어 1"}
          title={"아발란체(Avalanche) 1Q24 Review"}
        ></ResearchItem>
        <ResearchItem
          type={"레이어 2"}
          title={"뱅크리스 아비트럼(Arbitrum) 가이드"}
        ></ResearchItem>
        <ResearchItem
          type={"레이어 1"}
          title={"앱토스(Aptos) 1Q24 Review"}
        ></ResearchItem>
      </div>
    </div>
  );
};

export default Research;
