import { ProgressBar } from "./ProgressBar";

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".color-button");
  const progressBarRed = new ProgressBar(7, 1, 17, "red");
  const progressBarGreen = new ProgressBar(7, 1, 17, "green");
  const progressBarBlue = new ProgressBar(7, 1, 17, "blue");
  document.querySelector("body").appendChild(progressBarRed.element);
  document.body.appendChild(progressBarGreen.element);
  document.body.appendChild(progressBarBlue.element);

  //adding the button the functionality
  button.addEventListener("click", () => {
    //accessing the values
    const red = progressBarRed.value * 15;
    const green = progressBarGreen.value * 15;
    const blue = progressBarBlue.value * 15;

    //adding the background to the button
    button.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    //changing the color of the text in the button, so it is at least a bit visible
    if (red / 15 > 8 || blue / 15 > 8 || green / 15 > 8) {
      button.style.color = "black";
    } else {
      button.style.color = "white";
    }
  });
  // @TODO no.1 create new instance of ProgressBar and append its right one property to body element
  // @TODO no.2 fix missing icon on plus button
});
