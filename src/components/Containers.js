export function createContainer(child) {
  const container = document.createElement("div");
  container.classList.add(
    "bg-stone-50/60",
    "flex",
    "overflow-y-auto",
    "w-full",
    "px-2"
  );
  container.classList.add("container", "mx-auto", "rounded-lg", "shadow-lg");
  container.appendChild(child);
  document.body.appendChild(container);
  return container;
}

export function createThreeColumn(child, child1, child2) {
  const container = document.createElement("div");
  container.classList.add(
    "grid",
    "mx-auto",
    "grid-cols-3",
    "px-6",
    "pb-6",
    "justify-center",
    "place-content-center",
    "w-2/6",
    "gap-10"
  );
  document.body.appendChild(container);
  container.appendChild(child);
  container.appendChild(child1);
  container.appendChild(child2);
  return container;
}
