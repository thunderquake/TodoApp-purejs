export function iconElementRender(category) {
  const iconElement = document.createElement("img");
  iconElement.setAttribute("src", `/src/assets/categories/${category}.svg`);
  iconElement.classList.add("w-6", "h-6");
  return iconElement;
}

export function buttonIconElementRender() {
  const editIconElement = document.createElement("img");
  editIconElement.setAttribute("src", `/src/assets/buttons/edit.svg`);
  editIconElement.classList.add("w-6", "h-6");

  const archiveIconElement = document.createElement("img");
  archiveIconElement.setAttribute("src", `/src/assets/buttons/archive.svg`);
  archiveIconElement.classList.add("w-6", "h-6");

  const deleteIconElement = document.createElement("img");
  deleteIconElement.setAttribute("src", `/src/assets/buttons/delete.svg`);
  deleteIconElement.classList.add("w-6", "h-6");

  return {
    editButtonIcon: editIconElement.outerHTML,
    archiveButtonIcon: archiveIconElement.outerHTML,
    deleteButtonIcon: deleteIconElement.outerHTML,
  };
}
