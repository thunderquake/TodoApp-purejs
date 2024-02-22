import { renderButton } from "./helpers/renderButton.js";
import { createThreeColumn } from "./components/Containers.js";
import { renderArchived, renderUnarchived } from "./helpers/storingData.js";
import { inputModal, openModal } from "./components/inputModal.js";

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
    const overlay = document.createElement("div");
    overlay.classList.add(
      "fixed",
      "top-0",
      "left-0",
      "w-full",
      "h-full",
      "bg-stone-500",
      "opacity-50",
      "z-50",
      "hidden"
    );
    overlay.setAttribute("id", "overlay");
    document.body.appendChild(overlay);
    inputModal();
    openModal();
  });
  todosAddButton.classList.add(
    "text-lg",
    "bg-stone-50/60",
    "hover:bg-stone-50/70",
    "rounded-lg",
    "font-bold"
  );
  todosAddButton.classList.add("overflow-hidden", "shadow-lg");
  todosAddButton.setAttribute("data-modal-target", "input-modal");
  todosAddButton.setAttribute("data-modal-toggle", "input-modal");
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
