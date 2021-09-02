const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task ${task.complete ? "complete" : ""}`}>
      <h3>{task.text}</h3>
      <p>{task.day}</p>
      <button onClick={() => onToggle(task.id)}>
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
      </button>
      <button onClick={() => onDelete(task.id)}>
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
      </button>
    </div>
  );
};

export default Task;
