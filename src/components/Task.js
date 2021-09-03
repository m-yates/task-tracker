import styled from "styled-components";
import StyledButton from "./Button";
import { motion } from "framer-motion";
import { theme } from "../styles/theme";

const StyledTask = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 12px 20px;
  border-radius: 12px;
  column-gap: 15px;
  background-color: ${(props) => props.theme.colors.blueDark};
`;

const StyledHeading = styled(motion.h2)`
  flex-grow: 1;
  ${(props) => props.theme.text.h2};
`;

const StyledButtonDelete = styled(StyledButton)`
  border: none;
  width: auto;
  height: auto;
`;

const StyledButtonComplete = styled(StyledButton)`
  border: 2px ${(props) => props.theme.colors.blueMd} solid;
  svg {
    stroke: ${(props) => props.theme.colors.blueLight};
  }
`;

const variants = {
  deleteIcon: {
    rest: { stroke: `${theme.colors.blueMd}` },
    hover: {
      stroke: `${theme.colors.blueLight}`,
    },
  },
  completeIcon: {
    incomplete: { opacity: 0 },
    complete: {
      opacity: 1,
    },
  },
  taskHeading: {
    incomplete: { color: `${theme.colors.white}` },
    complete: {
      color: `${theme.colors.blueMd}`,
    },
  },
};

const Task = ({ task, onDelete, onToggle }) => {
  console.log(task.complete);
  return (
    <StyledTask>
      <StyledHeading
        initial={false}
        variants={variants.taskHeading}
        animate={task.complete ? "complete" : "incomplete"}
      >
        {task.text}
      </StyledHeading>
      <StyledButtonDelete
        placeholder="A bigger password input"
        onClick={() => onDelete(task.id)}
      >
        <motion.svg
          initial={false}
          whileHover="hover"
          animate="rest"
          variants={variants.deleteIcon}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-trash"
        >
          <polyline points="3 6 5 6 21 6"></polyline>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
        </motion.svg>
      </StyledButtonDelete>
      <StyledButtonComplete onClick={() => onToggle(task.id)}>
        <motion.svg
          initial={false}
          variants={variants.completeIcon}
          animate={task.complete ? "complete" : "incomplete"}
          xmlns="http://www.w3.org/2000/motion.svg"
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
        </motion.svg>
      </StyledButtonComplete>
    </StyledTask>
  );
};

export default Task;
