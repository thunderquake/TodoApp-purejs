import { getTableData } from "../helpers/storingData.js";
import { addTodoRow } from "./CreateTodoRow.js";
import {
  categorySelect,
  nameInput,
  contentsInput,
  archivedCheckbox,
  submitButton,
} from "./InputFields.js";
import { saveTableData } from "../helpers/storingData.js";

function closeEditModal() {
  const nameInputField = document.getElementById("name");
  const contentsInputField = document.getElementById("contents");
  const editModal = document.getElementById("edit-modal");
  const overlay = document.getElementById("overlay");

  if (nameInputField) {
    nameInputField.value = "";
  }
  if (contentsInputField) {
    contentsInputField.value = "";
  }

  editModal.classList.add("hidden");
  overlay.classList.add("hidden");
}

export function editModal() {
  const editModal = document.createElement("section");
  editModal.classList.add(
    "modal",
    "hidden",
    "overflow-y-auto",
    "overflow-x-hidden",
    "fixed",
    "top-0",
    "right-0",
    "left-0",
    "bottom-0",
    "z-50",
    "flex",
    "justify-center",
    "items-center"
  );
  editModal.setAttribute("id", "edit-modal");
  document.body.appendChild(editModal);

  const allDiv = document.createElement("div");
  allDiv.classList.add(
    "relative",
    "p-8",
    "w-full",
    "max-w-md",
    "max-h-full",
    "bg-stone-100",
    "rounded-lg",
    "shadow"
  );

  const form = document.createElement("form");
  form.appendChild(allDiv);
  form.classList.add("p-4", "md:p-5");
  editModal.appendChild(form);

  const headerDiv = document.createElement("div");
  headerDiv.classList.add(
    "flex",
    "items-center",
    "justify-between",
    "pb-2",
    "pr-2",
    "pl-2",
    "border-b",
    "rounded-t"
  );
  allDiv.appendChild(headerDiv);

  const textDiv = document.createElement("div");
  textDiv.classList.add("flex", "items-center", "justify-center", "py-4");
  headerDiv.appendChild(textDiv);

  const title = document.createElement("p");
  title.innerText = "Edit todo details";
  title.classList.add("text-xl", "font-semibold", "text-stone-900", "pr-4");
  textDiv.appendChild(title);

  const closeButton = document.createElement("button");
  closeButton.classList.add(
    "text-stone-400",
    "bg-transparent",
    "hover:bg-stone-200",
    "hover:text-stone-900",
    "pt-2",
    "pb-2",
    "pl-4",
    "pr-4",
    "rounded-md"
  );
  closeButton.textContent = "⨉";
  closeButton.setAttribute("type", "reset");
  headerDiv.appendChild(closeButton);

  const bodyDiv = document.createElement("div");
  bodyDiv.classList.add("grid", "gap-4", "mb-4", "grid-cols-2", "pt-4");
  allDiv.appendChild(bodyDiv);

  const categoryDiv = categorySelect();
  categoryDiv.classList.add("col-span-2", "sm:col-span-1");
  bodyDiv.appendChild(categoryDiv);

  const nameDiv = nameInput();
  nameDiv.classList.add("col-span-2");
  bodyDiv.appendChild(nameDiv);

  const contentsDiv = contentsInput();
  contentsDiv.classList.add("col-span-2");
  bodyDiv.appendChild(contentsDiv);

  const isArchivedDiv = archivedCheckbox();
  isArchivedDiv.classList.add("col-span-2");
  bodyDiv.appendChild(isArchivedDiv);

  const button = submitButton("+ Save todo");
  button.setAttribute("id", "editButton");

  bodyDiv.appendChild(button);

  document.body.appendChild(editModal);

  closeButton.addEventListener("click", () => {
    closeEditModal();
  });

  return editModal;
}

export function openEditModal(obj) {
  const editModal = document.getElementById("edit-modal");
  const overlay = document.getElementById("overlay");
  const submitButton = document.getElementById("editButton");

  submitButton.addEventListener("click", () => {
    const tableData = getTableData();

    const tbody = document.getElementById("tbody");
    const rowToDelete = document.getElementById(obj.id);
    tbody.removeChild(rowToDelete);

    const nameValue = document.getElementById("name").value;
    const contentsValue = document.getElementById("contents").value;
    const categoryValue = document.getElementById("categories").value;
    const isArchivedValue = document.getElementById("isArchived").checked;

    saveTableData(
      tableData.map((item) =>
        item.id === obj.id
          ? {
              ...item,
              name: nameValue,
              contents: contentsValue,
              category: categoryValue,
              isArchived: isArchivedValue,
            }
          : item
      )
    );
  });

  const nameInputField = document.getElementById("name");
  if (obj && obj.name) {
    nameInputField.value = obj.name;
  }

  const contentsInputField = document.getElementById("contents");
  if (obj && obj.contents) {
    contentsInputField.value = obj.contents;
  }

  const categoriesInputField = document.getElementById("categories");
  if (obj && obj.category) {
    categoriesInputField.value = obj.category;
  }

  const isArchivedInputField = document.getElementById("isArchived");
  if (obj && obj.isArchived) {
    isArchivedInputField.checked = obj.isArchived;
  }
  editModal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}
