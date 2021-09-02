import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { nanoid } from "nanoid";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyle } from "./styles/GlobalStyle";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    { id: nanoid(), text: "Doctors", complete: false },
    { id: nanoid(), text: "School", complete: false },
    { id: nanoid(), text: "Shop", complete: false },
    { id: nanoid(), text: "Run", complete: false },
    { id: nanoid(), text: "Eat", complete: false },
  ]);

  const addTask = (task) => {
    // Create a random number for the new task ID
    const id = nanoid();
    // Create a new task with the new ID, and the task data passed in
    const newTask = { id, ...task };
    // Set the tasks to an array containing the current tasks, as well as the new task we have created
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    // Filter the tasks, returning only the tasks that do not have an ID of the ID passed in
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const togglecomplete = (id) => {
    setTasks(
      tasks.map((task) =>
        // For each task, if the task id is equal to the ID passed in, set the complete of this task to be the opposite of whatever the current complete value is. Else return the task in its current form
        task.id === id ? { ...task, complete: !task.complete } : task
      )
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="page">
        <div className="wrapper">
          <Header
            title="Task Tracker"
            onAdd={() => setShowAddTask(!showAddTask)}
            showAdd={showAddTask}
          />
          {showAddTask && <AddTask onAdd={addTask} />}
          {tasks.length > 0 ? (
            <Tasks
              tasks={tasks}
              onDelete={deleteTask}
              onToggle={togglecomplete}
            />
          ) : (
            "Nothing to do!"
          )}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
