import { FC } from "react";

const Footer: FC = () => {
  return (
    <div className="p-8">
      <div>
        <div>
          <img src="./logo.svg" alt="logo" className="w-[157px] mb-4"></img>
          <div className="mb-8 text-xangle-gray-75 text-[12px]">
            (주) 크로스앵글 | 서울특별시 강남구 강남대로 376 15F
            <br />
            대표자: 이현우, 김준우 | 사업자등록번호 255-88-01077
            <br />
            통신판매업신고번호 2020-서울강남-02393 호
          </div>
        </div>
        <div>
          <div className="flex text-xangle-gray-75">
            <div className="flex-1">
              <div className="mb-4 font-bold text-[12px]">Services</div>
              <div className="mb-2">리서치</div>
              <div className="mb-2">이벤트</div>
              <div className="mb-2">시장동향</div>
              <div className="mb-2">애널리틱스</div>
            </div>
            <div className="flex-1">
              <div className="mb-4 font-bold text-[12px]">Solutions</div>
              <div className="mb-2">Xangle ERP</div>
              <div className="mb-2">유통량</div>
              <div className="mb-2">쟁글 API</div>
              <div className="mb-2">이벤트</div>
              <div className="mb-2">쟁글 앱</div>
              <div className="mb-2">뉴스레터</div>
            </div>
            <div className="flex-1">
              <div className="mb-4 font-bold text-[12px]">Introduction</div>
              <div className="mb-2">회사소개</div>
              <div className="mb-2">공지사항</div>
              <div className="mb-2">자주 묻는 질문</div>
              <div className="mb-2">채용</div>
            </div>
            <div className="flex-1">
              <div className="mb-4 font-bold text-[12px]">Terms</div>
              <div className="mb-2">서비스 이용 약관</div>
              <div className="mb-2">개인정보처리방침</div>
              <div className="mb-2">API 약관</div>
            </div>
            <div className="flex-1">
              <div className="mb-4 font-bold text-[12px]">Project Admin</div>
              <div className="mb-2">프로필 생성 요청</div>
              <div className="mb-2">파트너십 제휴</div>
              <div className="bg-xangle-main-200 text-white p-2 text-[16px] font-bold flex items-center justify-center rounded-lg">
                어드민 바로가기
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="p-2">
          <svg
            data-v-cec76caf=""
            fill="rgba(var(--bc-dark),1)"
            viewBox="0 0 24 24"
            height="1.5em"
            width="1.5em"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
          >
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M18.8507 18.3678L13.4896 10.7566L19.4326 4H18.073L16.9092 5.31675L12.8834 9.89576L9.04851 4.4512L8.73078 4H4.01845L5.16775 5.63212L10.2668 12.8721L4 19.9999H5.35954L10.8727 13.732L14.9697 19.5492L15.2875 20H19.9999L18.8506 18.3679L18.8507 18.3678ZM15.8477 18.9582L11.5913 12.9148L10.9852 12.0545L6.04605 5.04166H8.17062L12.1649 10.713L12.771 11.5733L17.9723 18.9581H15.8477V18.9582Z"
              fill="#000040"
            ></path>
          </svg>
        </div>
        <div className="p-2">
          <svg
            className="w-6 h-6"
            data-v-cec76caf=""
            fill="rgba(var(--bc-dark),1)"
            viewBox="0 0 24 24"
            height="1.5em"
            width="1.5em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M3.27186 11.4343C5.11331 10.42 7.16886 9.57345 9.08948 8.72255C12.3937 7.32886 15.711 5.95932 19.0618 4.68429C19.7138 4.46704 20.8851 4.25458 21 5.22073C20.9371 6.5883 20.6784 7.94786 20.5009 9.30743C20.0505 12.2972 19.5298 15.2768 19.0222 18.2568C18.8472 19.2494 17.6038 19.7632 16.8082 19.128C14.8961 17.8364 12.9693 16.5575 11.0816 15.236C10.4633 14.6077 11.0367 13.7054 11.5889 13.2567C13.1638 11.7047 14.8339 10.3861 16.3265 8.75386C16.7291 7.78161 15.5395 8.601 15.1471 8.85205C12.9911 10.3378 10.8879 11.9142 8.61487 13.2199C7.45378 13.8591 6.10052 13.3129 4.93996 12.9562C3.89937 12.5254 2.37453 12.0913 3.27176 11.4344L3.27186 11.4343Z"
              fill="#000040"
            ></path>
          </svg>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex text-xangle-gray-75 items-center">
          <div>Copyright © CrossAngle Pte. Ltd.</div>
          <div className="ml-3"> All rights reserved.</div>
          <div className="ml-3 border border-xangle-gray-75 rounded-lg py-1 px-2">
            Disclaimer
          </div>
        </div>
        <div className="flex">
          <img src="./app-store.png" alt="app" className="h-10"></img>
          <img src="./google-play.png" alt="google" className="h-10"></img>
        </div>
      </div>
    </div>
  );
};

export default Footer;
