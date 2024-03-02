import { CATEGORIES, STATS_HEADERS } from "../constants/constants.js";
import { createContainer } from "./Containers.js";
import { CreateStatsRow } from "./CreateStatsRow.js";

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
    "px-4",
    "max-w-full",
    "min-w-max",
    "overflow-scroll"
  );
  table.setAttribute("id", "statsTable");

  const container = createContainer(table);

  const thead = document.createElement("thead");
  table.appendChild(thead);

  const tableHeaderRow = document.createElement("tr");
  tableHeaderRow.classList.add("border", "border-slate-500", "pb-2");
  thead.appendChild(tableHeaderRow);

  STATS_HEADERS.forEach((header) => {
    const th = document.createElement("th");
    th.classList.add("text-left");
    th.textContent = header;
    thead.appendChild(th);
  });

  const tbody = document.createElement("tbody");
  tbody.setAttribute("id", "stats-tbody");
  table.appendChild(tbody);

  const rows = CATEGORIES.forEach((category) => {
    const row = CreateStatsRow(category);
    tbody.appendChild(row);
  });

  return container;
}
