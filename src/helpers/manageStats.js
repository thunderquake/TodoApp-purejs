import { getTableData } from "../helpers/storingData.js";
import { CATEGORIES } from "../constants/constants.js";
import { CreateStatsRow } from "../components/CreateStatsRow.js";

export function getArchivedStats(category) {
  const allTodos = getTableData();
  return allTodos.reduce((counter, obj) => {
    if (obj.category === category && obj.isArchived === true) {
      counter += 1;
    }
    return counter;
  }, 0);
}

export function getActiveStats(category) {
  const allTodos = getTableData();
  return allTodos.reduce((counter, obj) => {
    if (obj.category === category && obj.isArchived === false) {
      counter += 1;
    }
    return counter;
  }, 0);
}

export function refreshStats() {
  const tbody = document.getElementById("stats-tbody");

  tbody.innerHTML = "";

  const rows = CATEGORIES.forEach((category) => {
    const row = CreateStatsRow(category);
    tbody.appendChild(row);
  });
}
