import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const StyledButton = styled(motion.button)`
  border: none;
  box-shadow: none;
  background-color: transparent;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  cursor: pointer;
  transform-origin: center;
  &:focus {
    outline: 2px ${(props) => props.theme.colors.blueLight} dashed;
  }
  svg {
    transform-origin: center;
  }
`;

export const Button = ({ children, onClick, className }) => {
  return (
    <StyledButton className={className} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
