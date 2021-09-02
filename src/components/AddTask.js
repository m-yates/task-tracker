import { useState } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
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

const StyledInputSubmit = styled.button`
  border: none;
  outline: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.blueLight};

  svg {
    stroke: ${(props) => props.theme.colors.white};
    transform: scale(0.8);
    transform-origin: center;
  }
`;

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
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
    <StyledForm onSubmit={onSubmit}>
      <StyledInputText
        type="text"
        placeholder="Start typing..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <StyledInputSubmit type="submit" value="Save task">
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
      </StyledInputSubmit>
    </StyledForm>
  );
};

export default AddTask;
