import React, { createContext, useContext, useState } from "react";
import { ToDoContextType, ToDosType } from "../types/ContextTypes";

export const ToDoContext = createContext<ToDoContextType | null>(null);

export const ToDoProvider = ({ children }: { children: React.ReactNode }) => {
  const [todoes, setTodoes] = useState<ToDosType[]>(() => {
    try {
      const newToDos = localStorage.getItem("todo") || "[]";
      return JSON.parse(newToDos) as ToDosType[];
    } catch (err) {
      return [];
    }
  });
  // addToDo
  const handleAddToDo = (task: string) => {
    setTodoes((prevValue) => {
      const newToDo: ToDosType[] = [
        {
          id: Math.random().toString(),
          task: task,
          completed: false,
        },
        ...prevValue,
      ];
      localStorage.setItem("todo", JSON.stringify(newToDo));
      return newToDo;
    });
  };
  // removeAddTodo
  const removeToDo = (id: string) => {
    setTodoes((prevValue) => {
      const newToDo = prevValue.filter((todo) => todo.id !== id);
      localStorage.setItem("todo", JSON.stringify(newToDo));
      return newToDo;
    });
  };
  // toggleToDo
  const handleToggleToDo = (id: string) => {
    setTodoes((prevValue) => {
      const newToDo = prevValue.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
      localStorage.setItem("todo", JSON.stringify(newToDo));
      return newToDo;
    });
  };
  return (
    <ToDoContext.Provider
      value={{ todoes, handleAddToDo, removeToDo, handleToggleToDo }}
    >
      {children}
    </ToDoContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useToDoes = () => {
  const consumer = useContext(ToDoContext);
  if (!consumer) {
    throw new Error("calling consumer outside form the context");
  }
  return consumer;
};
