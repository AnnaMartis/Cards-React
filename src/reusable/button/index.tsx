import { FC } from "react";
import "./button.css";

interface ICustomButton {
  title: string;
  onClick: () => void;
}

const CustomButton: FC<ICustomButton> = ({ title, onClick }) => {
  return <button onClick={onClick} className="button">{title}</button>;
};

export default CustomButton;
