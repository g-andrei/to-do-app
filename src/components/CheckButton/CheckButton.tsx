import { ButtonHTMLAttributes } from "react";
import { CheckButtonStyled } from "./CheckButton.styled";

interface CheckButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const CheckButton = ({ children, onClick }: CheckButtonProps) => {
  return <CheckButtonStyled onClick={onClick}>{children}</CheckButtonStyled>;
};

export default CheckButton;
