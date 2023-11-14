import { Error } from "src/assets/icons";
import { Icon } from "..";
import {
  StyledErrorContaienr,
  StyledInputContainer,
  StyledInputText,
} from "./InputText.styled";
import colors from "src/themes/colors";
import { TextareaHTMLAttributes } from "react";

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
        <StyledErrorContaienr>
          <Icon IconComponent={Error} color={colors.state.error} />
        </StyledErrorContaienr>
      )}
    </StyledInputContainer>
  );
};

export default InputText;
