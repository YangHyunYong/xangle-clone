import { FC } from "react";
import { CgSearch } from "react-icons/cg";
import Divider from "./Divider";
import TagButton from "./TagButton";
import ListItem from "./ListItem";

const List: FC = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex p-[7px] h-10 items-center bg-xangle-gray-25 rounded-lg">
        <CgSearch className="size-5 mr-2"></CgSearch>
        <input
          type="text"
          placeholder="가산자산명/심볼명"
          className="text-[13px] bg-transparent"
        />
      </div>
      <Divider type={"b"}></Divider>
      <div className="flex gap-1">
        <TagButton name="거래량순" selected={true}></TagButton>
        <TagButton name="시가총액순"></TagButton>
        <TagButton name="상승순"></TagButton>
        <TagButton name="하락순"></TagButton>
      </div>

      <div className=" max-h-[700px] overflow-y-auto scrollbar-hide">
        <table className="w-full">
          <thead className="h-8 w-full">
            <tr className="text-xangle-gray-50 text-[12px]">
              <th className="text-left">가상자산</th>
              <th className="text-right">24h 거래량</th>
            </tr>
          </thead>
          <tbody>
            <ListItem
              image={"1"}
              name={"비트코인"}
              total={"94,286,846,21"}
              price={"5,029.54"}
              percent={"-1.38%"}
            ></ListItem>
            <ListItem
              image={"2"}
              name={"마일버스"}
              total={"19.06"}
              price={"4,332.59"}
              percent={"+37.4"}
            ></ListItem>
            <ListItem
              image={"3"}
              name={"이더리움"}
              total={"5,358,636.36"}
              price={"2,886,52"}
              percent={"-1.66"}
            ></ListItem>
            <ListItem
              image={"4"}
              name={"시바이누"}
              total={"0.03450"}
              price={"1,814.37"}
              percent={"1.29"}
            ></ListItem>
            <ListItem
              image={"5"}
              name={"솔라나"}
              total={"229,219.94"}
              price={"1,534.63"}
              percent={"-0.22"}
            ></ListItem>
            <ListItem
              image={"6"}
              name={"도지코인"}
              total={"229.20"}
              price={"1,533.98"}
              percent={"-0.39"}
            ></ListItem>
            <ListItem
              image={"7"}
              name={"리플"}
              total={"729.38"}
              price={"1,359.18"}
              percent={"-1.15"}
            ></ListItem>
            <ListItem
              image={"8"}
              name={"이더리움 클래식"}
              total={"43,099.09"}
              price={"1,258.03"}
              percent={"-3.27"}
            ></ListItem>
            <ListItem
              image={"9"}
              name={"카이버 네트워크"}
              total={"973.02"}
              price={"1,179.73"}
              percent={"-1.29"}
            ></ListItem>
            <ListItem
              image={"10"}
              name={"페페"}
              total={"0.02254"}
              price={"712.1"}
              percent={"-3.09"}
            ></ListItem>
            <ListItem
              image={"11"}
              name={"플로키"}
              total={"0.3776"}
              price={"622.44"}
              percent={"12.87"}
            ></ListItem>
            <ListItem
              image={"12"}
              name={"스택스"}
              total={"2,751.41"}
              price={"575.84"}
              percent={"-0.67"}
            ></ListItem>
            <ListItem
              image={"13"}
              name={"온도파이낸스"}
              total={"1,722.69"}
              price={"543.27"}
              percent={"0.41"}
            ></ListItem>
            <ListItem
              image={"13"}
              name={"온도파이낸스"}
              total={"1,722.69"}
              price={"543.27"}
              percent={"0.41"}
            ></ListItem>
            <ListItem
              image={"13"}
              name={"온도파이낸스"}
              total={"1,722.69"}
              price={"543.27"}
              percent={"0.41"}
            ></ListItem>
            <ListItem
              image={"13"}
              name={"온도파이낸스"}
              total={"1,722.69"}
              price={"543.27"}
              percent={"0.41"}
            ></ListItem>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List;
