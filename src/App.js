import React, { PureComponent } from "react";
import "./App.css";
import Oclock from "./components/Oclock";

class App extends PureComponent {
  state = {
    AppClass: "",
    ifHit: false,
    clockClass1: "",
    clockClass2: "",
    hourClass1: "hour-hand-1",
    minClass1: "min-hand-1",
    secClass1: "second-hand-1",
    hourClass2: "hour-hand-2",
    minClass2: "min-hand-2",
    secClass2: "second-hand-2",
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
    style1: {
      backgroundColor: "#018fed9a",
    },
    style2: {
      transform: `rotateY(${180}deg)`,
      opacity: 0,
    },
  };

  componentDidMount() {
    this.intervCall();
  }

  componentWillUnmount() {
    clearInterval(this.intervCall);
  }

  intervCall = () => {
    setInterval(() => {
      this.setDate();
    }, 1000);
  };

  // function responsible for changing time in clock and adding appropriate classes to particular objects
  setDate = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const secondsDegrees = seconds * 6;
    const minutesDeg = 6 * minutes;
    const hoursDeg = hours * 30 + 30 * (minutesDeg / 360);

    let transitionDurSec,
      transitionDurMin,
      transitionDurHour,
      secRotate,
      minRotate,
      hourRotate,
      clockCl1,
      clockCl2,
      AppCl,
      ifWasHit = this.state.ifHit;

    if (secondsDegrees >= 0 && secondsDegrees <= 9) {
      transitionDurSec = "0s";
      clockCl1 = "flipOpen";
      ifWasHit = true;
    } else if (secondsDegrees > 9 && secondsDegrees <= 22) {
      transitionDurSec = "0.05s";
      clockCl1 = "flipOpen";
      // if (this.state.ifHit === true) {
      if (ifWasHit === true) {
        clockCl2 = "disappear";
      }
      AppCl = "hit";
    } else if (secondsDegrees > 22 && secondsDegrees < 180) {
      if (ifWasHit === true) {
        clockCl2 = "disappear";
      }
      transitionDurSec = "0.05s";
      AppCl = "";
    } else {
      transitionDurSec = "0.05s";
    }
    secRotate = `rotate(${secondsDegrees}deg)`;

    if (minutesDeg === 360 || minutesDeg === 0) {
      transitionDurMin = "0s";
    } else {
      transitionDurMin = "0.05s";
    }
    minRotate = `rotate(${minutesDeg}deg)`;

    if (hoursDeg === 360 || hoursDeg === 0) transitionDurHour = "0s";
    else transitionDurHour = "0.05s";
    hourRotate = `rotate(${hoursDeg}deg)`;

    // console.log(secRotate);

    this.setState({
      AppClass: AppCl,
      ifHit: ifWasHit,
      clockClass1: clockCl1,
      clockClass2: clockCl2,
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
  };

  render() {
    const {
      AppClass,
      clockClass1,
      clockClass2,
      hourClass1,
      hourClass2,
      minClass2,
      minClass1,
      secClass1,
      secClass2,
      hourHandStyle,
      minHandStyle,
      secondHandStyle,
      style1,
      style2,
    } = this.state;

    return (
      <div className={"App " + AppClass}>
        <div className="title">Wall clock animation *</div>
        <div className="container">
          <Oclock
            onGetClass={"clock1 " + clockClass1}
            getHourHandClass={hourClass1}
            getMinHandClass={minClass1}
            getSecHandClass={secClass1}
            onHourHandStyle={hourHandStyle}
            onMinHandStyle={minHandStyle}
            onSecondHandStyle={secondHandStyle}
            onStyle={style1}
          />

          <Oclock
            onGetClass={"clock2 " + clockClass2}
            getHourHandClass={hourClass2}
            getMinHandClass={minClass2}
            getSecHandClass={secClass2}
            onHourHandStyle={hourHandStyle}
            onMinHandStyle={minHandStyle}
            onStyle={style2}
          />
        </div>
        <div className="foot">
          <div
            style={{
              color: "midnightblue",
              marginBottom: "10px",
              marginTop: "10px",
            }}
          >
            * React App (Class and Functional components)
          </div>
          <div>
            2020 <i>by kodencja</i>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
