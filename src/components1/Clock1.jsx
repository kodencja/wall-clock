import React, { Component } from "react";

class Clock extends Component {
  state = {
    clockClass: "",
    hourClass: "",
    minClass: "",
    secondClass: "",
    secondsDegrees: 0,
    minutesDeg: 0,
    hoursDeg: 0,
    secondHandStyle: {
      transitionDuration: "",
      transform: "",
    },
    minHandStyle: {
      transitionDuration: "",
      transform: "",
    },
    hourHandStyle: {
      transitionDuration: "",
      transform: "",
    },
  };

  // setDate = () => {
  //   const now = new Date();
  //   const hours = now.getHours();
  //   const minutes = now.getMinutes();
  //   const seconds = now.getSeconds();
  //   const secondsDegrees = (seconds / 60) * 360;
  //   const minutesDeg = 6 * minutes;
  //   const hoursDeg = hours * 30 + 30 * (minutesDeg / 360);
  //   this.setState({ secondsDegrees, minutesDeg, hoursDeg });
  //   // console.log(secondsDegrees);
  //   // console.log(this.state.secondsDegrees);
  //   // console.log(this.state.minutesDeg);
  //   // let classes = '';
  //   // return classes;
  // };

  // setDate = () => {
  //   return new Promise((resolve, reject) => {
  //     const now = new Date();
  //     const hours = now.getHours();
  //     const minutes = now.getMinutes();
  //     const seconds = now.getSeconds();
  //     const secondsDegrees = (seconds / 60) * 360;
  //     const minutesDeg = 6 * minutes;
  //     const hoursDeg = hours * 30 + 30 * (minutesDeg / 360);
  //     resolve(this.setState({ secondsDegrees, minutesDeg, hoursDeg }));
  //   });

  // console.log(secondsDegrees);
  // console.log(this.state.secondsDegrees);
  // console.log(this.state.minutesDeg);
  // let classes = '';
  // return classes;
  // };

  setDate = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // console.log(
    //   "Seconds: " + seconds + " Minutes: " + minutes + " Hours: " + hours
    // );

    // console.log(" Minutes: " + minutes + " Hours: " + hours);

    const secondsDegrees = (seconds / 60) * 360;
    const minutesDeg = 6 * minutes;
    const hoursDeg = hours * 30 + 30 * (minutesDeg / 360);
    // this.setState({ secondsDegrees, minutesDeg, hoursDeg });
    // console.log(secondsDegrees);

    // const { secondsDegrees, minutesDeg, hoursDeg } = this.state;
    let transitionDurSec,
      transitionDurMin,
      transitionDurHour,
      secRotate,
      minRotate,
      hourRotate,
      clockCl;

    // const { secondHandStyle, minHandStyle, hourHandStyle  } = this.state

    if (secondsDegrees === 360 || secondsDegrees < 22) {
      transitionDurSec = "0s";
      // clockCl = "headShake";
      clockCl = "flipOpen";
    } else {
      transitionDurSec = "0.05s";
      clockCl = "";
    }
    secRotate = `rotate(${secondsDegrees}deg)`;

    if (minutesDeg === 360 || minutesDeg === 0) {
      transitionDurMin = "0s";
      // clock.classList.add("flip");
      // console.log("MinutesDeg = 0");
    } else {
      transitionDurMin = "0.05s";
      // console.log("MinutesDeg > 0");
      // clock.classList.remove("flip");
    }
    minRotate = `rotate(${minutesDeg}deg)`;

    if (hoursDeg === 360 || hoursDeg === 0) transitionDurHour = "0s";
    else transitionDurHour = "0.05s";
    hourRotate = `rotate(${hoursDeg}deg)`;

    // console.log(
    // "secRotate: " +
    //   secRotate +
    // " minRotate: " + minRotate + " hourRotate: " + hourRotate
    // );

    // console.log(" minRotate: " + minRotate + " hourRotate: " + hourRotate);

    this.setState({
      clockClass: clockCl,
      secondHandStyle: {
        transitionDuration: transitionDurSec,
        transform: secRotate,
      },
      minHandStyle: {
        transitionDuration: transitionDurMin,
        transform: minRotate,
      },
      hourHandStyle: {
        transitionDuration: transitionDurHour,
        transform: hourRotate,
      },
    });
    // this.setState({ secondHandStyle: { transitionDuration: transitionDur } });
  };

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

  // interval = () => {
  //   return new Promise((resolve, reject) => {
  //     setInterval(() => {
  //       resolve(this.setDate);
  //     }, 3000);
  //   });
  // };

  // interval = () => {
  //   return new Promise((resolve, reject) => {
  //     resolve(this.setDate);
  //   });
  // };

  // interval = () => {
  //   return new Promise((resolve, reject) => {
  //     resolve(setInterval(this.setDate, 3000));
  //   });
  // };

  intervCall = () => {
    setInterval(() => {
      this.setDate();
      // this.setStyle();
    }, 1000);
  };

  // intervCall = () => {
  //   setInterval(async () => {
  //     await this.setDate();
  //     this.setStyle();
  //   }, 3000);
  // };

  componentDidMount() {
    this.intervCall();
  }

  // async componentDidMount() {
  //   await this.interval();
  //   await this.setStyle();
  // }

  // interval();

  render() {
    return (
      // <div className={"clock " + this.getClockClass}>
      // <div className={"clock "}>{(()=> this.setDate)()}
      // <div className={"clock "}>{()=>{()=>{setInterval(this.setDate, 5000)}}}
      <div
        className={"clock " + this.state.clockClass}
        style={this.props.onStyle}
      >
        {/* <img src={this.props.onImg} alt="Clock back" /> */}
        <div className="clock-face">
          <div
            className={"hand hour-hand"}
            style={this.state.hourHandStyle}
          ></div>
          <div
            className={"hand min-hand"}
            style={this.state.minHandStyle}
          ></div>
          <div
            className={"hand second-hand"}
            style={this.state.secondHandStyle}
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
