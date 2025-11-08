//increments the number in a node's text
function increment(node) {
  let current = node.textContent;
  node.textContent = Number(current) + 1;
}
import {Header} from "./header.js";
import {Main} from "./main.js";

export function App() {
  const body = document.createElement("body");
  const header = Header();
  const main = Main();
  body.appendChild(header);
  body.appendChild(main);
  const button = body.querySelector("#increment");
  const counter = body.querySelector("#counter");
  button.addEventListener("click", () => {
    increment(counter);
  });

  return body;
}
