import { renderButton } from "./helpers/renderButton.js";
import { createThreeColumn } from "./components/Containers.js";
import { renderArchived, renderUnarchived } from "./helpers/storingData.js";
import { inputModal, openInputModal } from "./components/InputModal.js";
import { overlay } from "./components/InputFields.js";
import { editModal } from "./components/EditModal.js";
import { todosTable } from "./components/TodoTable.js";
import { statsTable } from "./components/StatisticsTable.js";

export function todosPage() {
  const container = document.createElement("div");
  container.classList.add("pt-12");

  const buttonsContainer = document.createElement("div");
  buttonsContainer.classList.add("flex", "justify-center", "gap-12", "mb-8");
  container.appendChild(buttonsContainer);

  const todosArchiveButton = renderButton("View Archive", () => {
    renderArchived();
  });
  todosArchiveButton.classList.add(
    "text-lg",
    "bg-stone-50/60",
    "hover:bg-stone-50/70",
    "py-2",
    "px-4",
    "rounded-full",
    "font-bold",
    "min-w-24"
  );
  todosArchiveButton.classList.add("overflow-hidden", "shadow-lg");
  buttonsContainer.appendChild(todosArchiveButton);

  const todosAddButton = renderButton("Add Todo", () => {
    overlay();
    inputModal();
    openInputModal();
  });
  todosAddButton.classList.add(
    "text-lg",
    "bg-stone-50/60",
    "hover:bg-stone-50/70",
    "py-2",
    "px-4",
    "rounded-full",
    "font-bold",
    "min-w-24"
  );
  todosAddButton.classList.add("overflow-hidden", "shadow-lg");
  todosAddButton.setAttribute("data-modal-target", "input-modal");
  todosAddButton.setAttribute("data-modal-toggle", "input-modal");
  buttonsContainer.appendChild(todosAddButton);

  const todosUnarchiveButton = renderButton("View Current", () => {
    renderUnarchived();
  });
  todosUnarchiveButton.classList.add(
    "text-lg",
    "bg-stone-50/60",
    "hover:bg-stone-50/70",
    "py-2",
    "px-4",
    "rounded-full",
    "font-bold",
    "min-w-24"
  );
  todosUnarchiveButton.classList.add("overflow-hidden", "shadow-lg");
  buttonsContainer.appendChild(todosUnarchiveButton);

  const todosTableElement = todosTable();
  container.appendChild(todosTableElement);
  todosTableElement.classList.add("mb-8", "max-h-80");

  const statsTableElement = statsTable();
  container.appendChild(statsTableElement);

  overlay();
  editModal();

  return container;
}
