import styled, { css } from 'styled-components';
import { BreakPoints, Tags, StyledTypographyProps } from './types';
import typography from '../../themes/typography';
import breakpoints from '../../themes/breackpoints';

const desktopBreakpoint = breakpoints.desktop.width;
const mobileBreakpoint = breakpoints.mobile.width;

const getStyles = (variant: keyof typeof Tags, breakpoint: BreakPoints) => css`
    font-size: ${typography[variant].fontSize[breakpoint]};
    line-height: ${typography[variant].lineHeight[breakpoint]};
    font-family: ${typography[variant].fontFamily[breakpoint]};
    font-weight: ${typography[variant].fontWeight[breakpoint]};
    color: ${typography[variant].color[breakpoint]};
`;

const StyledTypography = styled.p<StyledTypographyProps>`
    @media (min-width: ${mobileBreakpoint}) and (max-width: ${desktopBreakpoint}) {
        ${(props) => getStyles(props.variant, BreakPoints.Mobile)}
    }

    @media (min-width: ${desktopBreakpoint}) {
        ${(props) => getStyles(props.variant, BreakPoints.Desktop)}
    }
`;

export default StyledTypography;
