import { addTodoRow } from "./CreateTodoRow.js";
import { createCont } from "./Containers.js";
import { getTableData } from "../helpers/storingData.js";
import { HEADERS, HEADER_WIDTHS } from "../constants/constants.js";

export function todosTable() {
  const table = document.createElement("table");
  table.innerHTML = "";
  table.classList.add(
    "table-auto",
    "w-full",
    "border-separate",
    "mx-auto",
    "border-spacing-x-0",
    "border-spacing-y-2",
    "p-4",
    "max-w-full",
    "min-w-max",
    "overflow-scroll"
  );
  table.setAttribute("id", "todoTable");
  document.body.appendChild(table);

  const thead = document.createElement("thead");
  table.appendChild(thead);

  const caption = document.createElement("caption");
  caption.textContent = "hello there :)";
  caption.classList.add("caption-top");
  table.appendChild(caption);

  const tableHeaderRow = document.createElement("tr");
  tableHeaderRow.classList.add("border", "border-slate-500", "pb-2");
  thead.appendChild(tableHeaderRow);

  HEADERS.forEach((header, index) => {
    const th = document.createElement("th");
    th.textContent = header;
    th.classList.add("text-left");
    th.classList.add(HEADER_WIDTHS[index]);
    tableHeaderRow.appendChild(th);
  });

  const tbody = document.createElement("tbody");
  tbody.setAttribute("id", "tbody");
  table.appendChild(tbody);

  const filteredData = getTableData().filter((note) => !note.isArchived);

  const container = createCont(table);
  filteredData.forEach((todo) => {
    addTodoRow(todo);
  });

  return container;
}
