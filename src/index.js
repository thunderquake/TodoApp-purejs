import { todosPage } from "./app.js"
import { todosTable } from "./components/TodoTable.js"

function startApp() {
    document.body.classList.add("bg-gradient-to-r", "from-purple-500", "to-pink-500")
    
    const rootElement = document.getElementById('root');
    const todosPageElement = todosPage();
    rootElement.appendChild(todosPageElement);

    const todosTableElement = todosTable();
    rootElement.appendChild(todosTableElement);  
}

startApp();