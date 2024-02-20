export function categorySelect() {
  const categoryDiv = document.createElement("div");

  const categoryLabel = document.createElement("label");
  categoryLabel.setAttribute("for", "categories");
  categoryLabel.textContent = "Category:";
  categoryLabel.classList.add(
    "block",
    "mb-2",
    "text-lg",
    "font-medium",
    "text-stone-900"
  );
  categoryDiv.appendChild(categoryLabel);

  const categoryButton = document.createElement("select");
  categoryButton.setAttribute("name", "categories");
  categoryButton.setAttribute("id", "categories");
  categoryButton.classList.add(
    "bg-stone-50",
    "border",
    "border-stone-300",
    "text-stone-900",
    "text-lg",
    "rounded-lg",
    "focus:ring-primary-500",
    "focus:border-primary-500",
    "block",
    "w-full",
    "p-2.5"
  );
  categoryDiv.appendChild(categoryButton);

  const categories = ["idea", "quote", "task", "thoughts"];

  categories.forEach((category) => {
    const option = document.createElement("option");
    option.textContent = category;
    option.setAttribute("value", category);
    categoryButton.appendChild(option);
  });

  return categoryDiv;
}

export function nameInput() {
  const nameDiv = document.createElement("div");

  const nameLabel = document.createElement("label");
  nameLabel.setAttribute("for", "name");
  nameLabel.textContent = "Name";
  nameLabel.classList.add(
    "block",
    "mb-2",
    "text-lg",
    "font-medium",
    "text-stone-900"
  );
  nameDiv.appendChild(nameLabel);

  const nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("name", "name");
  nameInput.setAttribute("id", "name");
  nameInput.setAttribute("required", "");
  nameInput.setAttribute("placeholder", "Todo name");

  nameInput.classList.add(
    "bg-stone-50",
    "border",
    "border-stone-300",
    "text-stone-900",
    "text-lg",
    "rounded-lg",
    "focus:ring-primary-600",
    "focus:border-primary-600",
    "block",
    "w-full",
    "p-2.5"
  );
  nameDiv.appendChild(nameInput);

  return nameDiv;
}

export function contentsInput() {
  const contentsDiv = document.createElement("div");

  const contentsLabel = document.createElement("label");
  contentsLabel.setAttribute("for", "contents");
  contentsLabel.textContent = "Contents";
  contentsLabel.classList.add(
    "block",
    "mb-2",
    "text-lg",
    "font-medium",
    "text-stone-900"
  );
  contentsDiv.appendChild(contentsLabel);

  const contentsInput = document.createElement("textarea");
  contentsInput.setAttribute("rows", "4");
  contentsInput.setAttribute("name", "contents");
  contentsInput.setAttribute("id", "contents");
  contentsInput.setAttribute("placeholder", "Describe your todo");

  contentsInput.classList.add(
    "block",
    "p-2.5",
    "w-full",
    "text-lg",
    "text-stone-900",
    "bg-stone-50",
    "rounded-lg",
    "border",
    "border-stone-300",
    "focus:ring-blue-500",
    "focus:border-blue-500",
    "max-h-32",
    "overflow-scroll"
  );
  contentsDiv.appendChild(contentsInput);

  return contentsDiv;
}

export function submitButton() {
  const button = document.createElement("button");
  button.setAttribute("type", "submit");
  button.classList.add(
    "text-stone-50",
    "inline-flex",
    "bg-stone-700",
    "hover:bg-stone-800",
    "focus:ring-4",
    "focus:outline-none",
    "focus:ring-stone-300",
    "font-medium",
    "rounded-lg",
    "text-lg",
    "px-3",
    "py-2.5",
    "text-center"
  );
  button.textContent = "+ Add todo";

  return button;
}
