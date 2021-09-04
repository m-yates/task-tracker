import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const StyledButton = styled(motion.button)`
  z-index: 1;
  border: none;
  background-color: transparent;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  cursor: pointer;
  svg {
    transform: scale(0.8);
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
