import { changeRowIsArchivedValue, deleteRow } from "./storingData.js";
import { buttonIconElementRender } from "../components/IconsButton.js";
import { editModal, openEditModal } from "../components/EditModal.js";
import { overlay } from "../components/InputFields.js";

export function renderButton(text, callback) {
  const button = document.createElement("button");
  button.textContent = text;
  button.addEventListener("click", callback);
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
  const { editButtonIcon, archiveButtonIcon, deleteButtonIcon } =
    buttonIconElementRender();

  const container = document.createElement("div");
  container.classList.add(
    "flex",
    "mx-auto",
    "p-6",
    "justify-center",
    "gap-6",
    "w-64"
  );

  const editButton = document.createElement("button");
  editButton.innerHTML = editButtonIcon;
  assignButtonClasses(editButton);

  container.appendChild(editButton);
  editButton.addEventListener("click", () => openEditModal(obj));

  const archiveButton = document.createElement("button");
  archiveButton.innerHTML = archiveButtonIcon;
  assignButtonClasses(archiveButton);

  archiveButton.addEventListener("click", () => changeRowIsArchivedValue(obj));
  container.appendChild(archiveButton);

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = deleteButtonIcon;
  assignButtonClasses(deleteButton);

  deleteButton.addEventListener("click", () => deleteRow(obj.id));
  container.appendChild(deleteButton);

  return container;
}

function assignButtonClasses(button) {
  button.classList.add(
    "bg-white/50",
    "rounded-lg",
    "w-10",
    "h-10",
    "place-content-center",
    "flex",
    "p-2"
  );
}
