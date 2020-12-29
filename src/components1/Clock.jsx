import React, { Component } from "react";

class Clock extends Component {
  state = {};

  getStyle = () => {};

  render() {
    return (
      // <div className={"clock " + this.getClockClass}>
      // <div className={"clock "}>{(()=> this.setDate)()}
      // <div className={"clock "}>{()=>{()=>{setInterval(this.setDate, 5000)}}}
      <div
        className={"clock " + this.props.onGetClass}
        style={this.props.onStyle}
      >
        {/* <img src={this.props.onImg} alt="Clock back" /> */}
        <div className="clock-face">
          <div
            className={"hand hour-hand"}
            style={this.props.onHourHandStyle}
          ></div>
          <div
            className={"hand min-hand"}
            style={this.props.onMinHandStyle}
          ></div>
          <div
            className={"hand second-hand"}
            // style={this.props.onSecondHandStyle}
            style={this.props.onSecondHandStyle}
            // style={this.props.onSecondHandStyleCopy}
          ></div>
        </div>
      </div>
    );
  }
}

export default Clock;

// setInterval(() => {
//   this.props.onSetdate();
// }, 1000);
// secondHandStyle: {
//   transitionDuration: "0.05s",
//   transform: `rotate(${15}deg)`,
// },
// minHandStyle: {
//   transitionDuration: "",
//   transform: "",
// },
// hourHandStyle: {
//   transitionDuration: "",
//   transform: "",
// },
// classClock: "",

// setStyle = () => {
// const { secondsDegrees, minutesDeg, hoursDeg } = this.state;
// console.log("setStyle");
// console.log(this.state.secondsDegrees);
// console.log(this.state.minutesDeg);
//   if (secondsDegrees === 360 || secondsDegrees === 0) {
//     transitionDurSec = "0s";
//     clockCl = "headShake";
//   } else {
//     transitionDurSec = "0.05s";
//     clockCl = "";
//   }
//   secRotate = `rotate(${secondsDegrees}deg)`;

//    minutesDeg = 6 * minutes;
//   if (minutesDeg === 360 || minutesDeg === 0) {
//     minHand.style.transitionDuration = "0s";
//     clock.classList.add("flip");
//   } else {
//     minHand.style.transitionDuration = "0.05s";
//     clock.classList.remove("flip");
//   }
//   minHand.style.transform = `rotate(${minutesDeg}deg)`;

//   hoursDeg = hours * 30 + 30 * (minutesDeg / 360);
//   //		  console.log(hoursDeg);
//   if (hoursDeg === 360 || hoursDeg === 0)
//     hourHand.style.transitionDuration = "0s";
//   else hourHand.style.transitionDuration = "0.05s";
//   hourHand.style.transform = `rotate(${hoursDeg}deg)`;

//   this.setState({ secondHandStyle: { transitionDuration: transitionDur } });
// };
