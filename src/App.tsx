import { FC } from "react";
import Header from "./components/Header";
import LandingHeader from "./components/LandingHeader";
import Divider from "./components/Divider";
import LandingBody from "./components/LandingBody";
import { ChakraProvider } from "@chakra-ui/react";
import Ticker from "./components/Ticker";
import Footer from "./components/Footer";

const App: FC = () => {
  return (
    <ChakraProvider>
      <div className="font-sans text-xangle-gray-200 text-[14px]">
        <Header />
        <div className="flex flex-col h-[979px] p-4 gap-4 justify-start">
          <LandingHeader />
          <Divider type={"b"} />
          <LandingBody />
        </div>
        {/* <Ticker /> */}
        <Divider type={"b"}></Divider>
        <Footer />
      </div>
      <div className="w-12 h-12 fixed bottom-14 right-6">
        <img src="./telegram_icon.svg" alt="tele" />
      </div>
    </ChakraProvider>
  );
};
export default App;
