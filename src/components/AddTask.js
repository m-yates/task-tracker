import { useState } from "react";
import styled from "styled-components";
import StyledButton from "./Button";
import { motion } from "framer-motion";
import { theme } from "../styles/theme";

const StyledForm = styled(motion.form)`
  overflow: hidden;
`;

const StyledFormInner = styled.div`
  display: flex;
  align-items: flex-end;
  column-gap: 20px;
  overflow: hidden;
  padding-bottom: 20px;
  padding-right: 2px;
`;

const StyledInputText = styled.input`
  border: none;
  background-color: transparent;
  flex-grow: 1;
  border-bottom: 2px ${(props) => props.theme.colors.blueMd} solid;
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.text.p};
  padding-bottom: 5px;
  &::placeholder {
    ${(props) => props.theme.text.p};
    color: ${(props) => props.theme.colors.blueMd};
  }
  &:focus {
    outline: 2px ${(props) => props.theme.colors.blueLight} dashed;
  }
`;

const StyledButtonSubmit = styled(StyledButton)`
  border: none;
  width: auto;
  height: auto;
`;

const variants = {
  form: {
    exit: {
      height: "0",
      opacity: 0,
    },
    animate: {
      height: "auto",
      opacity: 1,
    },
  },
  submitIcon: {
    exit: { stroke: `${theme.colors.blueMd}` },
    animate: {
      stroke: `${theme.colors.blueLight}`,
    },
  },
};

const AddTask = ({ onAdd, showAddTask }) => {
  const [text, setText] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      return;
    } else {
      onAdd({ text });
      setText("");
    }
  };
  return (
    <StyledForm
      initial={false}
      animate={showAddTask ? "animate" : "exit"}
      variants={variants.form}
      onSubmit={onSubmit}
    >
      <StyledFormInner>
        <StyledInputText
          type="text"
          placeholder="Start typing..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <StyledButtonSubmit>
          <motion.svg
            initial={false}
            variants={variants.submitIcon}
            animate={text ? "animate" : "exit"}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-save"
          >
            <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
            <polyline points="17 21 17 13 7 13 7 21"></polyline>
            <polyline points="7 3 7 8 15 8"></polyline>
          </motion.svg>
        </StyledButtonSubmit>
      </StyledFormInner>
    </StyledForm>
  );
};

export default AddTask;
