import { useState } from "react";
import StyledButton from "./components/Button";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { nanoid } from "nanoid";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyle } from "./styles/GlobalStyle";
import styled from "styled-components";
import { motion } from "framer-motion";

const StyledPage = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
`;

const StyledTitle = styled.h1`
  ${(props) => props.theme.text.h1};
  margin-bottom: 15px;
`;

const StyledHeading = styled.h2`
  ${(props) => props.theme.text.h2};
`;

const StyledTracker = styled.div`
  width: 100%;
  display: flex;
  padding: 30px;
  flex-direction: column;
  @media (min-width: 600px) {
    width: 600px;
    margin: 0 auto;
    padding: 15vh 0;
  }
`;

const StyledButtonAdd = styled(StyledButton)`
  position: fixed;
  z-index: 10;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 60px;
  background-color: ${(props) => props.theme.colors.blueLight};
  color: ${(props) => props.theme.colors.white};
  @media (min-width: 600px) {
    bottom: 15vh;
  }
`;

const StyledButtonAddInner = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const variants = {
  addButton: {
    animate: {
      rotate: -45,
    },
    exit: {
      rotate: 0,
    },
  },
};

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    { id: nanoid(), text: "Walk the dog", complete: false },
    { id: nanoid(), text: "Go to the doctors", complete: false },
    { id: nanoid(), text: "Finish web design", complete: true },
    { id: nanoid(), text: "Find a new flat", complete: false },
  ]);

  const addTask = (task) => {
    // Create a random string for the new task ID
    const id = nanoid();
    // Create a new task with the new ID, including the task data passed in
    const newTask = { id, ...task };
    // Set tasks to an array containing the current tasks, as well as the new task we have created
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    // Filter the tasks, returning only the tasks that do not have an ID of the ID passed in
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        // For each task, if the task id is equal to the ID passed in, set the 'complete' value of this task to be the opposite of whatever the current 'complete' value is. Otherwise return the task in its current form
        task.id === id ? { ...task, complete: !task.complete } : task
      )
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledPage>
        <StyledTracker>
          <StyledTitle>What needs doing?</StyledTitle>
          <StyledButtonAdd
            onClick={() => setShowAddTask((showAddTask) => !showAddTask)}
          >
            <StyledButtonAddInner
              initial={false}
              animate={showAddTask ? "animate" : "exit"}
              variants={variants.addButton}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-plus"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </StyledButtonAddInner>
          </StyledButtonAdd>
          <AddTask showAddTask={showAddTask} onAdd={addTask} />
          {tasks.length > 0 ? (
            <Tasks
              tasks={tasks}
              onDelete={deleteTask}
              onToggle={toggleComplete}
            />
          ) : (
            <StyledHeading>Nothing to do!</StyledHeading>
          )}
        </StyledTracker>
      </StyledPage>
    </ThemeProvider>
  );
};

export default App;
