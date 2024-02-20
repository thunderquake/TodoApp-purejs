import { addTodoRow } from "../components/CreateTodoRow.js";
import { assignIdNote } from "./storingData.js";

export function addTodo(obj) {
  const createdNote = assignIdNote(obj);
  addTodoRow(createdNote);
}
