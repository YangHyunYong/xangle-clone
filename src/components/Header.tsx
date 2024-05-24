import React, { FC } from "react";
import { CgSearch, CgChevronDown, CgMenu } from "react-icons/cg";

const Header: FC = () => {
  return (
    <header className="flex justify-between p-4 w-full h-[72px] border-b sticky top-0">
      <div className="mr-4">
        <img src="/logo.svg" alt="logo" className="w-[147px] h-full" />
      </div>

      <div className="flex items-center justify-end gap-4 xl:hidden">
        <button className="nav-button-style" title="search">
          <CgSearch className="size-6 text-xangle-gray-200"></CgSearch>
        </button>
        <button className="nav-button-style" title="menu">
          <CgMenu className="size-[21px] text-xangle-gray-200"></CgMenu>
        </button>
      </div>

      <div className="hidden xl:flex items-center w-full justify-between">
        <nav className="mr-4 flex gap-2">
          <button className="nav-button-style">리서치</button>
          <button className="nav-button-style">이벤트</button>
          <button className="nav-button-style">시장동향</button>
          <button className="nav-button-style">유통량</button>
          <button className="nav-button-style">애널리틱스</button>
          <button className="nav-button-style">앱</button>
          <button className="nav-button-style">뉴스레터</button>
          <button className="font-bold h-[35px] p-2 text-xangle-token border border-xangle-token rounded-lg flex items-center justify-center">
            Xangle ERP
          </button>
        </nav>

        <div className="flex items-center">
          <div className="flex gap-2 p-2 items-center border rounded-lg mr-4">
            <CgSearch className="size-6 text-[#878f9b]"></CgSearch>
            <input type="text" placeholder="검색" className="text-[12px]" />
          </div>
          <div className="nav-button-style flex items-center mr-4">
            <span>한국어</span>
            <CgChevronDown className="ml-1" />
          </div>
          <button className="p-2 bg-xangle-main-200 text-white font-bold border rounded-lg text-[16px] h-10 flex items-center justify-center">
            로그인
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
