import { iconElementRender } from "./IconsButton.js";
import { getActiveStats, getArchivedStats } from "../helpers/manageStats.js";

export function CreateStatsRow(category) {
  const tr = document.createElement("tr");
  tr.classList.add(
    "rounded-3xl",
    "bg-white/50",
    "hover:bg-stone-50/70",
    "break-words"
  );
  tr.setAttribute("id", "stats-tr");

  const iconTd = document.createElement("td");
  const iconElement = iconElementRender(category);
  iconElement.classList.add("w-20", "mx-auto");
  iconTd.appendChild(iconElement);
  tr.appendChild(iconTd);

  const categoryTd = document.createElement("td");
  categoryTd.textContent = category;
  categoryTd.classList.add(
    "text-left",
    "pr-8",
    "max-w-40",
    "text-pretty",
    "py-4"
  );
  tr.appendChild(categoryTd);

  const notArchivedTd = document.createElement("td");
  notArchivedTd.textContent = getActiveStats(category);
  tr.appendChild(notArchivedTd);

  const archivedTd = document.createElement("td");
  archivedTd.textContent = getArchivedStats(category);
  tr.appendChild(archivedTd);

  return tr;
}
