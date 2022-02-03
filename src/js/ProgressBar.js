export class ProgressBar {
  constructor(value, gradient, maxValue, color, updateColors) {
    this.value = value;
    this.gradient = gradient;
    this.maxValue = maxValue;
    this.color = color;
    this.interval = null;
    //accessing the function created from outside
    this.updateColors = updateColors;
    //@TODO no.4 make it possible to create progress bar with any default value and gradient. these values should be passed to constructor
    //@TODO no.5 make it possible to create progress bar with any maximum value. once using maximum value, make sure the width of knob element is calculated correctly

    this.element = document.createElement("div");
    this.refreshElement();
  }

  refreshElement() {
    this.element.innerHTML = `
      <div class="label">
        ${this.value}/${this.maxValue}
      </div>
      <div class="progress">
         <div class="btn-minus"></div>
         <div class="bar">
           <div style="width:${
             (this.value / this.maxValue) * 100
           }%; background-color:${this.color}" class="knob"></div>
         </div>
         <div class="btn-plus"></div>
      </div>
    `;

    //accessing the plus button
    const plusBtn = this.element.querySelector(".btn-plus");
    //providing the functionality on mousedown and up
    plusBtn.addEventListener("mousedown", () => {
      this.interval = setInterval(() => {
        this.value = Math.min(this.maxValue, this.value + this.gradient);
        this.refreshElement();
        //using the function and providing the attributes
        this.updateColors(this.color, this.value);
      }, 50);
    });
    plusBtn.addEventListener("mouseup", () => {
      clearInterval(this.interval);
    });

    //accessing the minus button;
    const minusBtn = this.element.querySelector(".btn-minus");
    //providing the functionality on mousedown and up
    minusBtn.addEventListener("mousedown", () => {
      this.interval = setInterval(() => {
        this.value = Math.max(0, this.value - this.gradient);
        this.refreshElement();
        this.updateColors(this.color, this.value);
      }, 50);
    });
    minusBtn.addEventListener("mouseup", () => {
      clearInterval(this.interval);
    });
    //@TODO no.3 implement minusBtn listener. if you assign new value to property value, make sure, it is not greater then 10 (or any other maximum value)
  }
}
