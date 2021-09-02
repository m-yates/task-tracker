import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { nanoid } from "nanoid";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    { id: nanoid(), text: "Doctors", day: "today", reminder: false },
    { id: nanoid(), text: "School", day: "today", reminder: false },
    { id: nanoid(), text: "Shop", day: "today", reminder: false },
    { id: nanoid(), text: "Run", day: "today", reminder: false },
    { id: nanoid(), text: "Eat", day: "today", reminder: false },
  ]);
  console.log(tasks);

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

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        // For each task, if the task id is equal to the ID passed in, set the reminder of this task to be the opposite of whatever the current reminder value is. Else return the task in its current form
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
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
            onToggle={toggleReminder}
          />
        ) : (
          "Nothing to do!"
        )}
      </div>
    </div>
  );
};

export default App;
