import { ChangeEvent, MouseEvent, useState } from "react";
import { useToDoes } from "../context/ToDoContext";

const AddToDo = () => {
  const [todo, setTodo] = useState("");
  const { handleAddToDo } = useToDoes();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleAddToDo(todo);
    setTodo("");
  };

  console.log(todo);
  return (
    <div>
      <form>
        <input
          style={{ fontSize: "1.5rem" }}
          type="text"
          placeholder="enter your task"
          value={todo}
          onChange={handleChange}
        />
        <button onClick={handleClick} style={{ fontSize: "1.3rem" }}>
          Add
        </button>
      </form>
    </div>
  );
};

export default AddToDo;
