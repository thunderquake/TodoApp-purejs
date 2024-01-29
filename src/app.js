import { addTodoRow } from "./components/CreateTodoRow.js";
import { todoNote } from "./helpers/notes.js";
import { renderButton } from "./helpers/renderButton.js";
import { createThreeColumn } from "./components/Containers.js";
import {
  assignIdNote,
  renderArchived,
  renderUnarchived,
} from "./helpers/storingData.js";

export function todosPage() {
  const container = document.createElement("div");

  const titleElement = document.createElement("p");
  titleElement.innerText = "TO-DO list!";
  titleElement.classList.add("text-3xl", "flex", "justify-center", "p-8");
  container.appendChild(titleElement);

  const todosArchiveButton = renderButton("View Archive", () => {
    renderArchived();
  });
  todosArchiveButton.classList.add(
    "text-lg",
    "bg-stone-50/60",
    "hover:bg-stone-50/70",
    "rounded-lg",
    "font-bold"
  );
  todosArchiveButton.classList.add("overflow-hidden", "shadow-lg");
  container.appendChild(todosArchiveButton);

  const todosAddButton = renderButton("Add Todo", () => {
    const createdNote = assignIdNote(todoNote);
    addTodoRow(createdNote);
  });
  todosAddButton.classList.add(
    "text-lg",
    "bg-stone-50/60",
    "hover:bg-stone-50/70",
    "rounded-lg",
    "font-bold"
  );
  todosAddButton.classList.add("overflow-hidden", "shadow-lg");
  container.appendChild(todosAddButton);

  const todosUnarchiveButton = renderButton("View Current", () => {
    renderUnarchived();
  });
  todosUnarchiveButton.classList.add(
    "text-lg",
    "bg-stone-50/60",
    "hover:bg-stone-50/70",
    "rounded-lg",
    "font-bold"
  );
  todosUnarchiveButton.classList.add("overflow-hidden", "shadow-lg");
  container.appendChild(todosUnarchiveButton);

  const buttons = createThreeColumn(
    todosArchiveButton,
    todosAddButton,
    todosUnarchiveButton
  );
  container.appendChild(buttons);

  return container;
}
