import { Typography } from '..';
import { StyledCategory } from './Category.styled';

interface CategoryProps {
    variant: string;
    categoryText: string;
    onClick?: () => void;
    isSelected?: boolean;
}

const Category = ({
    variant,
    categoryText,
    onClick,
    isSelected,
}: CategoryProps) => {
    return (
        <StyledCategory
            variant={variant}
            onClick={onClick}
            isSelected={isSelected}
        >
            <Typography variant="paragraph"> {categoryText}</Typography>
        </StyledCategory>
    );
};

export default Category;
