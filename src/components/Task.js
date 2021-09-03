import styled from "styled-components";
import StyledButton from "./Button";

const StyledTask = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 12px 20px;
  border-radius: 12px;
  column-gap: 15px;
  background-color: ${(props) => props.theme.colors.blueDark};
`;
const StyledHeading = styled.div`
  flex-grow: 1;
  ${(props) => props.theme.text.h2};
`;

const StyledButtonDelete = styled(StyledButton)`
  border: none;
  width: auto;
  height: auto;
  svg {
    stroke: ${(props) => props.theme.colors.blueMd};
  }
`;

const StyledButtonComplete = styled(StyledButton)`
  border: 2px ${(props) => props.theme.colors.blueMd} solid;
  svg {
    stroke: ${(props) => props.theme.colors.blueLight};
  }
`;

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <StyledTask>
      <StyledHeading>{task.text}</StyledHeading>
      <StyledButtonDelete onClick={() => onDelete(task.id)}>
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
          className="feather feather-x"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </StyledButtonDelete>
      <StyledButtonComplete onClick={() => onToggle(task.id)}>
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
          className="feather feather-check"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </StyledButtonComplete>
    </StyledTask>
  );
};

export default Task;
