import { ProgressBar } from "./ProgressBar";

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".color-button");
  const progressBarRed = new ProgressBar(126, 1, 255, "red");
  const progressBarGreen = new ProgressBar(126, 1, 255, "green");
  const progressBarBlue = new ProgressBar(126, 1, 255, "blue");
  document.querySelector("body").appendChild(progressBarRed.element);
  document.body.appendChild(progressBarGreen.element);
  document.body.appendChild(progressBarBlue.element);

  //Interval that changes the color based on the current rgb values
  setInterval(() => {
    //accessing the values
    const red = progressBarRed.value;
    const green = progressBarGreen.value;
    const blue = progressBarBlue.value;

    //adding the background to the button
    button.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    //changing the color of the text in the button, so it is at least a bit visible
    if (red > 126 || blue > 126 || green > 126) {
      button.style.color = "black";
    } else {
      button.style.color = "white";
    }
  }, 50);
  // @TODO no.1 create new instance of ProgressBar and append its right one property to body element
  // @TODO no.2 fix missing icon on plus button
});
