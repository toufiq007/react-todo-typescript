export type ToDosType = {
  id: string;
  task: string;
  completed: boolean;
};
export type ToDoContextType = {
  todoes: ToDosType[];
  handleAddToDo: (task: string) => void;
  removeToDo: (id: string) => void;
  handleToggleToDo: (id: string) => void;
};
