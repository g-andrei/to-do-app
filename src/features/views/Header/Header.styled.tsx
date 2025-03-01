import styled, { css } from 'styled-components';

export const StyledContainer = styled.div(({ theme }) => {
    const { sizes } = theme;
    return css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: ${sizes.main.s650};
    `;
});
