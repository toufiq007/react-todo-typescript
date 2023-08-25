/* eslint-disable prefer-const */
import { useToDoes } from "../context/ToDoContext";
import { useSearchParams } from "react-router-dom";

const SingleToDo = () => {
  let { todoes, handleToggleToDo, removeToDo } = useToDoes();
  const [searchParams] = useSearchParams();
  const todosData = searchParams.get("todos");
  console.log(todosData);
  if (todosData === "active") {
    todoes = todoes.filter((task) => !task.completed);
  }
  if (todosData === "complete") {
    todoes = todoes.filter((task) => task.completed);
  }
  console.log(todoes);
  return (
    <ul>
      <h2>All tasks</h2>
      {todoes.map((todo) => {
        return (
          <li key={todo.id} style={{ fontSize: "1.4rem" }}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleToDo(todo.id)}
              name=""
              id={todo.id}
            />
            <label htmlFor={todo.id}>{todo.task}</label>
            {todo.completed && (
              <button onClick={() => removeToDo(todo.id)}>Delete</button>
            )}
          </li>
        );
      })}
    </ul>
  );
};
export default SingleToDo;
