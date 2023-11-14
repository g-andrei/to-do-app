import { StyledButton, StyledButtonProps } from "./Button.styled";

interface ButtonProps extends StyledButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = ({
  children,
  variant,
  selected,
  onClick,
  disabled,
}: ButtonProps) => {
  return (
    <StyledButton
      variant={variant}
      selected={selected}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
