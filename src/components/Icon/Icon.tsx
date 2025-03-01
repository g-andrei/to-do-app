import styled from 'styled-components';

interface IconProps {
    IconComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    color?: string;
    size?: number;
}

interface SVGContainerProps {
    color?: string;
    size?: number;
}

const StyledSVGContainer = styled.span<SVGContainerProps>`
    svg {
        width: ${(props) => props.size}px;
        height: ${(props) => props.size}px;
    }

    path {
        fill: ${(props) => props.color};
    }
`;

const Icon = ({ IconComponent, color = 'black', size = 24 }: IconProps) => {
    return (
        <StyledSVGContainer color={color} size={size}>
            <IconComponent />
        </StyledSVGContainer>
    );
};

export default Icon;
