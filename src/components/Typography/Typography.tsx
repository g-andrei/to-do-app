import StyledTypography from "./Typography.styled";
import { Tags, TypograpyProps } from "./types";

const Typography = ({ variant, children, style }: TypograpyProps) => {
  return (
    <StyledTypography
      variant={variant}
      as={Tags[variant as keyof typeof Tags]}
      style={style}
    >
      {children}
    </StyledTypography>
  );
};

export default Typography;
