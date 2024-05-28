import { FC } from "react";

interface DividerProps {
  type: string;
}

const Divider: FC<DividerProps> = ({ type }) => {
  return <div className={`border-${type}`}></div>;
};

export default Divider;
