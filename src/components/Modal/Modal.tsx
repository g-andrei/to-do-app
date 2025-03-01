import { StyledModalContainer } from './Modal.styled';

interface ModalProps {
    children: React.ReactNode;
}

const Modal = ({ children }: ModalProps) => {
    return <StyledModalContainer>{children}</StyledModalContainer>;
};

export default Modal;
