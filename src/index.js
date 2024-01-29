import { todosPage } from "./app.js"
import { addTodoRow } from "./components/CreateTodoRow.js";
import { todosTable } from "./components/TodoTable.js"
import { todoNote } from "./helpers/notes.js";
import { renderButton } from "./helpers/renderButton.js"
import { createThreeColumn } from "./components/Containers.js";
import {assignIdNote, renderArchived, renderUnarchived} from "./helpers/storingData.js"

function startApp() {
    document.body.classList.add("bg-gradient-to-r", "from-purple-500", "to-pink-500")
    
    const rootElement = document.getElementById('root');
    const todosPageElement = todosPage();
    rootElement.appendChild(todosPageElement);

    const todosArchiveButton = renderButton('View Archive', () => {
        renderArchived();
    });
    todosArchiveButton.classList.add("text-lg", "bg-stone-50/60", "hover:bg-stone-50/70", "rounded-lg", "font-bold")
    todosArchiveButton.classList.add("overflow-hidden", "shadow-lg")
    rootElement.appendChild(todosArchiveButton);

    const todosAddButton = renderButton("Add Todo", () => {
        const createdNote = assignIdNote(todoNote);
        addTodoRow(createdNote);
    });   
    todosAddButton.classList.add("text-lg","bg-stone-50/60", "hover:bg-stone-50/70","rounded-lg", "font-bold")
    todosAddButton.classList.add("overflow-hidden", "shadow-lg")
    rootElement.appendChild(todosAddButton);

    const todosUnarchiveButton = renderButton('View Current', () => {
        renderUnarchived();
    });
    todosUnarchiveButton.classList.add("text-lg", "bg-stone-50/60", "hover:bg-stone-50/70", "rounded-lg", "font-bold")
    todosUnarchiveButton.classList.add("overflow-hidden", "shadow-lg")
    rootElement.appendChild(todosUnarchiveButton);

    const buttons = createThreeColumn(todosArchiveButton, todosAddButton, todosUnarchiveButton);
    rootElement.appendChild(buttons);

    const todosTableElement = todosTable();
    rootElement.appendChild(todosTableElement);

    
}

startApp();