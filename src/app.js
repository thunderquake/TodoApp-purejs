

export function todosPage() {
    const element = document.createElement('p');
    element.innerText = "TO-Do list!";
    element.classList.add("text-3xl", "flex", "justify-center", "p-8");
    return element;
}

export function createCont(child) {
    const container = document.createElement("div");
    container.classList.add("bg-stone-50/60", "pt-8", "flex", "overflow-y-auto", "w-full");
    container.classList.add("container", "mx-auto", "rounded-lg", "shadow-lg", "max-h-80");
    container.appendChild(child);
    document.body.appendChild(container);
    return container;
}

export function create3Column(child, child1, child2) {
    const container = document.createElement("div");
    container.classList.add("grid", "mx-auto", "grid-cols-3","p-6", "justify-center", "place-content-center",  "w-2/6", "gap-10");
    document.body.appendChild(container)
    container.appendChild(child);
    container.appendChild(child1);
    container.appendChild(child2);
    return container;
}