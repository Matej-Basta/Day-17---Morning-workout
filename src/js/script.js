import { ProgressBar } from "./ProgressBar";

document.addEventListener("DOMContentLoaded", () => {
  const progressBar = new ProgressBar(7, 2, 9);
  document.querySelector("body").appendChild(progressBar.element);
  // @TODO no.1 create new instance of ProgressBar and append its right one property to body element
  // @TODO no.2 fix missing icon on plus button
});
