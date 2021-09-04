import styled from "styled-components";
import StyledButton from "./Button";
import { motion, useMotionValue } from "framer-motion";
import { theme } from "../styles/theme";

const StyledTask = styled(motion.h2)`
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
  task: {
    initial: { height: "0", opacity: 0 },
    exit: { height: "0", opacity: 0 },
    animate: {
      height: "auto",
      opacity: 1,
    },
  },
  deleteIcon: {
    exit: { stroke: `${theme.colors.blueMd}` },
    animate: {
      stroke: `${theme.colors.blueLight}`,
    },
  },
  checkedWrapper: {
    exit: {
      opacity: 0,
      transition: {
        type: "tween",
        duration: 0,
        delay: 0.25,
      },
    },
    animate: {
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0,
      },
    },
  },
  checkedPath: {
    exit: {
      pathLength: 0,
      pathOffset: 1,
      transition: {
        type: "tween",
      },
    },
    animate: {
      pathLength: 1,
      pathOffset: 0,
      transition: {
        type: "tween",
      },
    },
  },
  taskHeading: {
    exit: { color: `${theme.colors.white}` },
    animate: {
      color: `${theme.colors.blueMd}`,
    },
  },
};

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <StyledTask variants={variants.task} animate="animate" initial="initial">
      <StyledHeading
        initial={false}
        variants={variants.taskHeading}
        animate={task.complete ? "animate" : "exit"}
      >
        {task.text}
      </StyledHeading>
      <StyledButtonDelete onClick={() => onDelete(task.id)}>
        <motion.svg
          initial={false}
          whileHover="animate"
          animate="exit"
          variants={variants.deleteIcon}
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
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
          animate={task.complete ? "animate" : "exit"}
          variants={variants.checkedWrapper}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          class="feather feather-check"
        >
          <motion.path
            variants={variants.checkedPath}
            d="M20 6 9 17 4 12"
          ></motion.path>
        </motion.svg>
      </StyledButtonComplete>
    </StyledTask>
  );
};

export default Task;
