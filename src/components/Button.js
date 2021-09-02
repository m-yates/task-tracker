import styled from "styled-components";

const StyledButton = styled.button`
  color: ${(props) => props.theme.colors.red};
`;

export const Button = ({ text, onClick }) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

export default Button;
