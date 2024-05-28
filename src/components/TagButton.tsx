import { FC } from "react";

interface TagButtonProps {
  name: string;
  selected?: boolean;
}

const TagButton: FC<TagButtonProps> = ({ name, selected }) => {
  return (
    <div
      className={`${
        selected
          ? "bg-xangle-main-200 rounded-lg text-white p-2 h-10"
          : "text-xangle-gray-75 p-2 h-10"
      }`}
    >
      <div className="px-[4px] py-[1px]">{name}</div>
    </div>
  );
};

export default TagButton;
