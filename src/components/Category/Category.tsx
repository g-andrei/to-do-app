// import { CategoryType } from ".";
import { Typography } from "..";
import { StyledCategory } from "./Category.styled";

interface CategoryProps {
  // variant: CategoryType;
  variant: string;
  categoryText: string;
}

const Category = ({ variant, categoryText }: CategoryProps) => {
  return (
    <StyledCategory variant={variant}>
      <Typography variant="paragraph"> {categoryText}</Typography>
    </StyledCategory>
  );
};

export default Category;
