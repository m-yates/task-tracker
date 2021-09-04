import { useState } from "react";
import styled from "styled-components";
import StyledButton from "./Button";
import { motion } from "framer-motion";

const StyledForm = styled(motion.form)`
  display: flex;
  align-items: flex-end;
  column-gap: 20px;
  margin-bottom: 30px;
`;

const StyledInputText = styled.input`
  border: none;
  outline: none;
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
`;

const StyledButtonSubmit = styled(StyledButton)`
  border: none;
  width: auto;
  height: auto;
  svg {
    stroke: ${(props) => props.theme.colors.blueMd};
  }
`;

const variants = {
  form: {
    closed: { height: 0 },
    open: {
      height: "300px",
    },
  },
};

const AddTask = ({ onAdd, showAddTask }) => {
  const [text, setText] = useState("");
  console.log(showAddTask);
  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("please add task");
      return;
    }
    onAdd({ text });
    setText("");
  };
  return (
    <StyledForm
      initial={false}
      animate={showAddTask ? "open" : "closed"}
      variants={variants.form}
      onSubmit={onSubmit}
    >
      <StyledInputText
        type="text"
        placeholder="Start typing..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <StyledButtonSubmit>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
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
        </svg>
      </StyledButtonSubmit>
    </StyledForm>
  );
};

export default AddTask;
