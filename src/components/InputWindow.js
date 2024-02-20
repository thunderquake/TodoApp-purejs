import { renderButton } from "../helpers/renderButton.js";
import { createCont } from "./Containers.js";

export function inputWindow() {
  const inputWindow = document.createElement("section");
  inputWindow.classList.add("modal", "hidden");

  const allDiv = document.createElement("div");

  const form = document.createElement("form");
  form.appendChild(allDiv);
  inputWindow.appendChild(form);

  const headerDiv = document.createElement("div");
  headerDiv.classList.add("flex", "justify-end", "px-4", "py-2");
  allDiv.appendChild(headerDiv);

  const closeButton = document.createElement("button");
  closeButton.classList.add(
    "btn-close",
    "text-lg",
    "bg-stone-50/60",
    "hover:bg-stone-50/70",
    "rounded-lg",
    "font-bold"
  );
  closeButton.textContent = "⨉";
  headerDiv.appendChild(closeButton);

  const textDiv = document.createElement("div");
  textDiv.classList.add("flex", "items-center", "justify-center", "py-4");
  allDiv.appendChild(textDiv);

  const title = document.createElement("p");
  title.innerText = "write out todo details here";
  title.classList.add("text-gray-600", "text-lg");
  textDiv.appendChild(title);

  const inputDiv = document.createElement("div");
  allDiv.appendChild(inputDiv);
  const categoryDropdown = categorySelect();
  inputDiv.appendChild(categoryDropdown);

  document.documentElement.addEventListener("click", () => {
    if (categoryDropdown.classList.contains("show")) {
      toggleDropdown();
    }
  });

  document.body.appendChild(inputWindow);

  return inputWindow;
}

function categorySelect() {
  const categoryDiv = document.createElement("div");

  const categoryLabel = document.createElement("label");
  categoryLabel.setAttribute("for", "categories");
  categoryLabel.textContent = "Category:";
  categoryDiv.appendChild(categoryLabel);

  const categoryButton = document.createElement("select");
  categoryButton.setAttribute("name", "categories");
  categoryButton.setAttribute("id", "categories");
  categoryDiv.appendChild(categoryButton);

  //categories list

  const categories = ["idea", "quote", "task", "thoughts"];

  categories.forEach((category) => {
    const option = document.createElement("option");
    option.textContent = category;
    option.setAttribute("value", category);
    //option.classList.add("block", "px-4", "py-2", "hover:bg-stone-50/70");
    categoryButton.appendChild(option);
  });

  return categoryDiv;
}

export function openModal(window) {
  window.classList.remove("hidden");
}
