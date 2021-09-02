import { useState } from "react";

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
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Add Task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input type="submit" value="Save task" />
    </form>
  );
};

export default AddTask;
