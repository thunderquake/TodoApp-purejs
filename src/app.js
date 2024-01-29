

export function todosPage() {
    const element = document.createElement('p');
    element.innerText = "TO-Do list!";
    element.classList.add("text-3xl", "flex", "justify-center", "p-8");
    return element;
}

