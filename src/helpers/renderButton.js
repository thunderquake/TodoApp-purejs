import { changeRowState, deleteRow } from "./storingData.js";
import { buttonIconElementRender } from "../components/IconsButton.js";
import { editModal, openEditModal } from "../components/EditModal.js";
import { overlay } from "../components/InputFields.js";

export function renderButton(text, funct) {
  const button = document.createElement("button");
  button.textContent = text;
  button.addEventListener("click", funct);
  document.body.appendChild(button);
  return button;
}

export function addTdButton(value, tr) {
  const td = document.createElement("td");
  td.classList.add("text-justify", "w-64");
  td.append(value);
  tr.appendChild(td);
}

export function addButtonsContainer(obj) {
  const { editB, archiveB, deleteB } = buttonIconElementRender();

  const container = document.createElement("div");
  container.classList.add(
    "grid",
    "mx-auto",
    "grid-cols-3",
    "p-6",
    "place-content-center",
    "w-64"
  );

  const editButton = document.createElement("button");
  editButton.innerHTML = editB;
  editButton.classList.add(
    "bg-white/50",
    "rounded-lg",
    "w-10",
    "h-10",
    "place-content-center",
    "flex",
    "p-2"
  );
  container.appendChild(editButton);
  overlay();
  editModal();
  editButton.addEventListener("click", () => openEditModal());

  const archiveButton = document.createElement("button");
  archiveButton.innerHTML = archiveB;
  archiveButton.classList.add(
    "bg-white/50",
    "rounded-lg",
    "w-10",
    "h-10",
    "place-content-center",
    "flex",
    "p-2"
  );

  archiveButton.addEventListener("click", () => changeRowState(obj));
  container.appendChild(archiveButton);

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = deleteB;
  deleteButton.classList.add(
    "bg-white/50",
    "rounded-lg",
    "w-10",
    "h-10",
    "place-content-center",
    "flex",
    "p-2"
  );

  deleteButton.addEventListener("click", () => deleteRow(obj.id));
  container.appendChild(deleteButton);

  return container;
}
