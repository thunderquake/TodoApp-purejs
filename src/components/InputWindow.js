export function inputWindow() {
  const inputWindow = document.createElement("section");
  inputWindow.classList.add("modal hidden");

  const headerDiv = document.createElement("div");
  headerDiv.classList.add("flex");
  inputWindow.appendChild(headerDiv);

  const closeButton = document.createElement("button");
  closeButton.classList.add("btn-close");
  closeButton.textContent("⨉");
  headerDiv.appendChild(closeButton);

  const textDiv = document.createElement("div");
  textDiv.classList.add("flex");
  inputWindow.appendChild(textDiv);

  const title = document.createElement("p");
  title.innerText("write out todo details here");
  textDiv.appendChild(title);
}
