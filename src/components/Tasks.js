import Task from "./Task";
import { AnimatePresence } from "framer-motion";
import styled from "styled-components";

const StyledTasks = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <StyledTasks>
      <AnimatePresence>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        ))}
      </AnimatePresence>
    </StyledTasks>
  );
};

export default Tasks;
