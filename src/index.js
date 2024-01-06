import { todosPage } from "./app.js"

function startApp() {
    const rootElement = document.getElementById('root');
    const todosPageElement = todosPage();
    rootElement.appendChild(todosPageElement);
}

startApp();