import { FC } from "react";
import Header from "./components/Header";
import LandingHeader from "./components/LandingHeader";
import Divider from "./components/Divider";
import LandingBody from "./components/LandingBody";

const App: FC = () => {
  return (
    <div className="font-sans text-xangle-gray-200 text-[14px]">
      <Header />
      <div className="flex flex-col h-[979px] p-4 gap-4 justify-start">
        <LandingHeader />
        <Divider type={"b"} />
        <LandingBody />
      </div>
    </div>
  );
};
export default App;
