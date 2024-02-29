import { iconElementRender } from "./IconsButton.js";
import { addTdButton, addButtonsContainer } from "../helpers/renderButton.js";
import { getDate } from "../helpers/getDate.js";

export function addTodoRow(obj) {
  const idRow = obj.id;

  const tr = document.createElement("tr");
  tr.classList.add(
    "rounded-3xl",
    "bg-white/50",
    "hover:bg-stone-50/70",
    "break-words"
  );
  tr.setAttribute("id", idRow);

  const iconElement = iconElementRender(obj.category);
  addTd(iconElement, tr);
  iconElement.classList.add("w-20");

  const { isArchived, id, contents, ...renderedProperties } = obj;

  Object.values(renderedProperties).forEach((value) => {
    const td = document.createElement("td");
    td.classList.add("text-left", "pr-8", "max-w-40", "text-pretty", "py-4");
    td.textContent = value;
    tr.appendChild(td);
  });

  const contentsTd = document.createElement("td");
  contentsTd.classList.add("text-left", "pr-6", "w-96", "max-w-96");
  const text = document.createElement("p");
  text.textContent = contents;
  contentsTd.appendChild(text);
  text.classList.add(
    "text-black",
    "max-w-96",
    "break-all",
    "text-pretty",
    "py-4"
  );
  tr.appendChild(contentsTd);

  const datesArr = getDate(contents);

  const dateTd = document.createElement("td");
  dateTd.classList.add("text-left");
  dateTd.textContent = datesArr;
  tr.appendChild(dateTd);

  const buttonsCont = addButtonsContainer(obj);

  addTdButton(buttonsCont, tr);

  const tbody = document.getElementById("tbody");

  tbody.appendChild(tr);
}

function addTd(value, tr) {
  const td = document.createElement("td");
  td.classList.add("py-6", "text-left");
  td.appendChild(value);
  tr.appendChild(td);
}
