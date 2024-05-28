import { FC } from "react";

interface ListItemProps {
  image: string;
  name: string;
  total: string;
  price: string;
  percent: string;
}

const ListItem: FC<ListItemProps> = ({
  image,
  name,
  total,
  price,
  percent,
}) => {
  return (
    <tr>
      <td className="text-left py-1 px-2">
        <div className="flex items-center gap-1">
          <img
            src={`./coins/${image}.png`}
            alt="coin"
            className="w-4 h-4 rounded-full"
          ></img>
          <div className="font-bold">{name}</div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="text-xangle-gray-100">₩ {total}</div>
          <div className="flex items-center rounded-sm bg-xangle-green-50 text-xangle-green-75 font-bold text-[12px] mr-1 px-2 py-1 w-fit h-[24px]">
            {percent}%
          </div>
        </div>
      </td>
      <td className="text-right font-bold py-1 px-2">₩{price}억</td>
    </tr>
  );
};

export default ListItem;
