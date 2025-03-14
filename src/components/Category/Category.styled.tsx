import styled, { css } from 'styled-components';
import { getCategoryType } from './constants';

interface StyledCategoryProps {
    variant: string;
    isSelected?: boolean;
}

export const StyledCategory = styled.span<StyledCategoryProps>(
    ({ variant, isSelected, theme }) => {
        const { colors, spacings, sizes } = theme;
        const CategoryType = getCategoryType();

        const getBackgroundColor = (variant: string) => {
            let color = '';
            switch (variant) {
                case CategoryType.completed:
                    color = colors.state.completed;
                    break;
                case CategoryType.important:
                    color = colors.state.important;
                    break;
                case CategoryType.urgent:
                    color = colors.state.urgent;
                    break;
                case CategoryType.later:
                    color = colors.state.later;
                    break;
                case CategoryType.toStudy:
                    color = colors.state.toStudy;
                    break;
            }
            return color;
        };

        return css`
            text-align: center;
            width: ${sizes.main.s150};
            height: ${sizes.main.s30};
            border-radius: ${spacings.main.s10};
            padding: ${spacings.main.s6} ${spacings.main.s22};
            background-color: ${getBackgroundColor(variant)};
            outline: ${isSelected && '1px solid white'};
        `;
    }
);
