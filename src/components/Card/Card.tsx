import { StyledCard, StyledCardShadow } from "./Card.styled";

interface CardProps {
  children: React.ReactNode;
}
const Card = ({ children }: CardProps) => {
  return (
    <StyledCardShadow>
      <StyledCard>{children}</StyledCard>
    </StyledCardShadow>
  );
};

export default Card;
