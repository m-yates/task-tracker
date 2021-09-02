import Task from "./Task";

import styled from "styled-components";

const StyledTasks = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <StyledTasks>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </StyledTasks>
  );
};

export default Tasks;
