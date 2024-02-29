import { getTableData } from "../helpers/storingData.js";
import { iconElementRender } from "./IconsButton.js";

export function statsTable() {
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
  table.setAttribute("id", "statsTable");
  document.body.appendChild(table);

  const thead = document.createElement("thead");
  table.appendChild(thead);

  const tableHeaderRow = document.createElement("tr");
  tableHeaderRow.classList.add("border", "border-slate-500", "pb-2");
  thead.appendChild(tableHeaderRow);

  const STATS_HEADERS = ["", "Category", "Not archived", "Archived"];
  STATS_HEADERS.forEach((header) => {
    const td = document.createElement("td");
    td.classList.add();
    td.textContent = header;
    thead.appendChild(td);
  });

  const tbody = document.createElement("tbody");
  table.appendChild(tbody);

  const ideaRow = CreateStatsRow("idea");
  tbody.appendChild(ideaRow);

  const quoteRow = CreateStatsRow("quote");
  tbody.appendChild(quoteRow);

  const taskRow = CreateStatsRow("task");
  tbody.appendChild(taskRow);

  const thoughtsRow = CreateStatsRow("thoughts");
  tbody.appendChild(thoughtsRow);

  return table;
}

export function CreateStatsRow(category) {
  const tr = document.createElement("tr");
  tr.classList.add(
    "rounded-3xl",
    "bg-white/50",
    "hover:bg-stone-50/70",
    "break-words"
  );

  const iconTd = document.createElement("td");
  const iconElement = iconElementRender(category);
  iconTd.appendChild(iconElement);
  tr.appendChild(iconTd);

  const categoryTd = document.createElement("td");
  categoryTd.textContent = category;
  tr.appendChild(categoryTd);

  const notArchivedTd = document.createElement("td");
  notArchivedTd.textContent = howMany(false, category);
  tr.appendChild(notArchivedTd);

  const archivedTd = document.createElement("td");
  archivedTd.textContent = howMany(true, category);
  tr.appendChild(archivedTd);

  return tr;
}

export function howMany(isArchivedValue, category) {
  const allTodos = getTableData();
  return allTodos.reduce((counter, obj) => {
    if (obj.category === category && obj.isArchived === isArchivedValue) {
      counter += 1;
    }
    return counter;
  }, 0);
}
