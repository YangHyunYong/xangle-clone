import { FC } from "react";

interface ResearchCardProps {
  image: string;
  title: string;
}

const ResearchCard: FC<ResearchCardProps> = ({ image, title }) => {
  return (
    <div className="w-[196px] h-[131px]">
      <div>
        <img
          className=" rounded-md"
          src={`./researches/${image}.jpg`}
          alt="researches"
        />
      </div>
      <div className="font-bold">{title}</div>
    </div>
  );
};

export default ResearchCard;
