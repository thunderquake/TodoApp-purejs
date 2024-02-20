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
    "p-4",
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
  title.innerText = "input todo details here";
  title.classList.add("text-lg", "font-semibold", "text-stone-900", "pr-4");
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
    "text-sm",
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
    "text-sm",
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

export function openModal(window, overlay) {
  window.classList.remove("hidden");
  overlay.classList.remove("hidden");
}
