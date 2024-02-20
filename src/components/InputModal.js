import { addTodo } from "../helpers/addTodo.js";
import { getDate } from "../helpers/getDate.js";
import { renderButton } from "../helpers/renderButton.js";
import { createCont } from "./Containers.js";

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
  inputModal.setAttribute("data-modal-backdrop", "static");
  document.body.appendChild(inputModal);

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
  headerDiv.appendChild(closeButton);

  const bodyDiv = document.createElement("div");
  bodyDiv.classList.add("grid", "gap-4", "mb-4", "grid-cols-2", "pt-4");
  allDiv.appendChild(bodyDiv);

  const categoryDiv = categorySelect();
  categoryDiv.classList.add("col-span-2", "sm:col-span-1");
  bodyDiv.appendChild(categoryDiv);

  document.body.appendChild(inputModal);

  const nameDiv = nameInput();
  nameDiv.classList.add("col-span-2");
  bodyDiv.appendChild(nameDiv);

  const contentsDiv = contentsInput();
  contentsDiv.classList.add("col-span-2");
  bodyDiv.appendChild(contentsDiv);

  const button = submitButton();
  bodyDiv.appendChild(button);

  return inputModal;
}

function categorySelect() {
  const categoryDiv = document.createElement("div");

  const categoryLabel = document.createElement("label");
  categoryLabel.setAttribute("for", "categories");
  categoryLabel.textContent = "Category:";
  categoryLabel.classList.add(
    "block",
    "mb-2",
    "text-lg",
    "font-medium",
    "text-stone-900"
  );
  categoryDiv.appendChild(categoryLabel);

  const categoryButton = document.createElement("select");
  categoryButton.setAttribute("name", "categories");
  categoryButton.setAttribute("id", "categories");
  categoryButton.classList.add(
    "bg-stone-50",
    "border",
    "border-stone-300",
    "text-stone-900",
    "text-lg",
    "rounded-lg",
    "focus:ring-primary-500",
    "focus:border-primary-500",
    "block",
    "w-full",
    "p-2.5"
  );
  categoryDiv.appendChild(categoryButton);

  const categories = ["idea", "quote", "task", "thoughts"];

  categories.forEach((category) => {
    const option = document.createElement("option");
    option.textContent = category;
    option.setAttribute("value", category);
    categoryButton.appendChild(option);
  });

  return categoryDiv;
}

function nameInput() {
  const nameDiv = document.createElement("div");

  const nameLabel = document.createElement("label");
  nameLabel.setAttribute("for", "name");
  nameLabel.textContent = "Name";
  nameLabel.classList.add(
    "block",
    "mb-2",
    "text-lg",
    "font-medium",
    "text-stone-900"
  );
  nameDiv.appendChild(nameLabel);

  const nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("name", "name");
  nameInput.setAttribute("id", "name");
  nameInput.setAttribute("required", "");
  nameInput.setAttribute("placeholder", "Todo name");

  nameInput.classList.add(
    "bg-stone-50",
    "border",
    "border-stone-300",
    "text-stone-900",
    "text-lg",
    "rounded-lg",
    "focus:ring-primary-600",
    "focus:border-primary-600",
    "block",
    "w-full",
    "p-2.5"
  );
  nameDiv.appendChild(nameInput);

  return nameDiv;
}

function contentsInput() {
  const contentsDiv = document.createElement("div");

  const contentsLabel = document.createElement("label");
  contentsLabel.setAttribute("for", "contents");
  contentsLabel.textContent = "Contents";
  contentsLabel.classList.add(
    "block",
    "mb-2",
    "text-lg",
    "font-medium",
    "text-stone-900"
  );
  contentsDiv.appendChild(contentsLabel);

  const contentsInput = document.createElement("textarea");
  contentsInput.setAttribute("rows", "4");
  contentsInput.setAttribute("name", "contents");
  contentsInput.setAttribute("id", "contents");
  contentsInput.setAttribute("required", "");
  contentsInput.setAttribute("placeholder", "Describe your todo");

  contentsInput.classList.add(
    "block",
    "p-2.5",
    "w-full",
    "text-lg",
    "text-stone-900",
    "bg-stone-50",
    "rounded-lg",
    "border",
    "border-stone-300",
    "focus:ring-blue-500",
    "focus:border-blue-500",
    "max-h-32",
    "overflow-scroll"
  );
  contentsDiv.appendChild(contentsInput);

  return contentsDiv;
}

function submitButton() {
  const button = document.createElement("button");
  button.setAttribute("type", "submit");
  button.classList.add(
    "text-stone-50",
    "inline-flex",
    "bg-stone-700",
    "hover:bg-stone-800",
    "focus:ring-4",
    "focus:outline-none",
    "focus:ring-stone-300",
    "font-medium",
    "rounded-lg",
    "text-lg",
    "px-3",
    "py-2.5",
    "text-center"
  );
  button.textContent = "+ Add todo";
  button.addEventListener("click", () => {
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

    const inputModal = document.getElementById("input-modal");
    const overlay = document.getElementById("overlay");

    inputModal.classList.add("hidden");
    overlay.classList.add("hidden");
  });

  return button;
}

export function getCurrentDate() {
  const currentDate = new Date();
  return currentDate.toLocaleDateString("en-GB");
}

export function openModal(window, overlay) {
  window.classList.remove("hidden");
  overlay.classList.remove("hidden");
}
