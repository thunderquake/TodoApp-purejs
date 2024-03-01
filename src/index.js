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
    "overflow-scroll"
  );

  const rootElement = document.getElementById("root");
  const todosPageElement = todosPage();
  rootElement.appendChild(todosPageElement);
}
startApp();
