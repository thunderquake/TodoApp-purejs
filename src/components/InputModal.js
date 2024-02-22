import { addTodo } from "../helpers/addTodo.js";
import {
  categorySelect,
  nameInput,
  contentsInput,
  submitButton,
} from "./InputFields.js";
import { getCurrentDate } from "../helpers/getDate.js";

export function inputModal() {
  const inputModal = document.createElement("section");
  inputModal.classList.add(
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
  inputModal.setAttribute("id", "input-modal");

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
  inputModal.appendChild(form);

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
  title.innerText = "Input todo details here";
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

  const button = submitButton("+ Add todo");
  bodyDiv.appendChild(button);

  document.body.appendChild(inputModal);

  form.addEventListener("submit", () => {
    const nameInput = document.getElementById("name").value;
    const contentsInput = document.getElementById("contents").value;
    const categorySelect = document.getElementById("categories");
    const category = categorySelect.value;

    const todoNote = {
      category: category,
      name: nameInput,
      contents: contentsInput,
      dateCreated: getCurrentDate(),
      isArchived: false,
    };

    addTodo(todoNote);

    closeInputModal();
  });

  closeButton.addEventListener("click", () => {
    closeInputModal();
  });

  return inputModal;
}

export function openInputModal() {
  const inputModal = document.getElementById("input-modal");
  const overlay = document.getElementById("overlay");

  inputModal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function closeInputModal() {
  const inputModal = document.getElementById("input-modal");
  const overlay = document.getElementById("overlay");

  const nameInput = document.getElementById("name").value;
  const contentsInput = document.getElementById("contents").value;

  if (nameInput && contentsInput) {
    nameInput.value = "";
    contentsInput.value = "";
  }

  inputModal.classList.add("hidden");
  overlay.classList.add("hidden");
}
