import { TextareaHTMLAttributes } from 'react';
import { Error } from 'src/assets/icons';
import colors from 'src/themes/colors';
import { Icon } from '..';
import {
    StyledErrorContainer,
    StyledInputContainer,
    StyledInputText,
} from './InputText.styled';

interface InputText extends TextareaHTMLAttributes<HTMLInputElement> {
    errorState: boolean;
}

const InputText = ({ errorState, onChange, placeholder, value }: InputText) => {
    return (
        <StyledInputContainer>
            <StyledInputText
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
            {errorState && (
                <StyledErrorContainer>
                    <Icon IconComponent={Error} color={colors.state.error} />
                </StyledErrorContainer>
            )}
        </StyledInputContainer>
    );
};

export default InputText;
