import { FC } from "react";
import Divider from "./Divider";
import EventItem from "./EventItem";

const Event: FC = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="h-[200px] bg-slate-400">캘린더</div>
      <Divider type={"b"}></Divider>
      <EventItem
        type={"토큰"}
        title={"메인넷 출시 발표"}
        badge={"네트워크 출시"}
        image={"./tokens/1.png"}
        name={"타이코 프로토콜"}
        date={"2024.05.28"}
      ></EventItem>
      <EventItem
        type={"토큰"}
        title={"도널드 트럼프, 온체인 보유 자산 1,000만 달러 돌파"}
        badge={"기타 (운영 & 마일스톤)"}
        image={"./tokens/2.png"}
        name={"아캄"}
        date={"2024.05.28"}
      ></EventItem>
      <EventItem
        type={"토큰"}
        title={"고성능 병렬 EVM을 위한 Sei V2 2단계 돌입"}
        badge={"제품/ 서비스/ 기능"}
        image={"./tokens/3.png"}
        name={"세이"}
        date={"2024.05.28"}
      ></EventItem>
      <EventItem
        type={"토큰"}
        title={
          "05/28 다계정 파밍 바운티 재개 예정 및 0.5 ETH 보증금 입금 프로세스 추가"
        }
        badge={"제품/ 서비스/ 기능"}
        image={"./tokens/4.png"}
        name={"LayerZero"}
        date={"2024.05.28"}
      ></EventItem>
      <EventItem
        type={"토큰"}
        title={"05/28 871만 $AGIX 토큰 락업 해제 예정"}
        badge={"토큰 락업해제"}
        image={"./tokens/5.png"}
        name={"싱귤래리티넷"}
        date={"2024.05.28"}
      ></EventItem>
      <EventItem
        type={"토큰"}
        title={"트레이딩 봇 비공개 베타 출시"}
        badge={"제품/ 서비스/ 기능"}
        image={"./tokens/6.png"}
        name={"플로키"}
        date={"2024.05.28"}
      ></EventItem>
      <EventItem
        type={"토큰"}
        title={"웁살라시큐리티, 안랩 블록체인컴퍼니와 전략적 파트너십 체결"}
        badge={"파트너십"}
        image={"./tokens/7.png"}
        name={"센티넬프로토콜"}
        date={"2024.05.28"}
      ></EventItem>
      <EventItem
        type={"토큰"}
        title={"웨일즈 마켓(Whales Market), $ZK 프리 마켓에 런칭 "}
        badge={"기타 (운영 & 마일스톤)"}
        image={"./tokens/8.png"}
        name={"지케이싱크"}
        date={"2024.05.28"}
      ></EventItem>
      <div className="h-10 p-2 mt-2 flex justify-center text-[16px] font-bold">
        더 보기
      </div>
    </div>
  );
};

export default Event;
