import { todosPage } from "./app.js";
import { statsTable } from "./components/StatisticsTable.js";
import { todosTable } from "./components/TodoTable.js";

function startApp() {
  document.body.classList.add(
    "bg-gradient-to-r",
    "from-purple-500",
    "to-pink-500",
    "flex",
    "items-center",
    "justify-center",
    "h-screen"
  );

  const rootElement = document.getElementById("root");
  const todosPageElement = todosPage();
  rootElement.appendChild(todosPageElement);

  const todosTableElement = todosTable();
  rootElement.appendChild(todosTableElement);
  todosTableElement.classList.add("mb-8", "max-h-80");

  const statsTableElement = statsTable();
  rootElement.appendChild(statsTableElement);
}

startApp();
