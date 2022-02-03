import { ProgressBar } from "./ProgressBar";

document.addEventListener("DOMContentLoaded", () => {
  //creating an object which tracks the different values of bars
  const colors = {
    red: 126,
    green: 126,
    blue: 126,
  };

  //creating function, that updates the values of the colors object and updates the background of the button
  const updateColors = (color, value) => {
    colors[color] = value;

    button.style.backgroundColor = `rgb(${colors.red},${colors.green},${colors.blue})`;
  };

  const button = document.querySelector(".color-button");
  //creation of progress bars, which are given the created updateColors function as an argument
  const progressBarRed = new ProgressBar(126, 1, 255, "red", updateColors);
  const progressBarGreen = new ProgressBar(126, 1, 255, "green", updateColors);
  const progressBarBlue = new ProgressBar(126, 1, 255, "blue", updateColors);
  document.querySelector("body").appendChild(progressBarRed.element);
  document.body.appendChild(progressBarGreen.element);
  document.body.appendChild(progressBarBlue.element);
});
