import React, { Component } from 'react';
import './App.css';
import Clock from './components/Clock';

class App extends Component {
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
      backgroundColor: '#018fed9a'
    },
    style2: {
      transform: `rotateY(${180}deg)`,
      opacity: 0,
    }
   }

   componentDidMount() {
    this.intervCall();
  }

   setDate = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const secondsDegrees = seconds *6;
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
      ifWasHit=this.state.ifHit;

    if (secondsDegrees >= 0 && secondsDegrees <= 9) {
      transitionDurSec = "0s";
      clockCl1 = "flipOpen";
      ifWasHit = true;
    } 
    else if (secondsDegrees > 9 && secondsDegrees <=22){
      transitionDurSec = "0.05s";
      clockCl1 = "flipOpen";
      if(this.state.ifHit === true){
        clockCl2 = "disappear";
      }
        AppCl = "hit";     
    } 
    else if(secondsDegrees > 22 && secondsDegrees < 180){
      if(this.state.ifHit === true){
        clockCl2 = "disappear";
      }
      transitionDurSec = "0.05s";
      AppCl = "";
    } 
    else {
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

  intervCall = () => {
    setInterval(() => {
      this.setDate();
    }, 1000);
  };

  render() { 
    return ( 
      <div className={"App "+this.state.AppClass}>
        <div className="title">Wall clock animation</div>
        <div className="container">
          
        <Clock onGetClass={"clock1 "+ this.state.clockClass1} getHourHandClass={this.state.hourClass1} getMinHandClass={this.state.minClass1} getSecHandClass={this.state.secClass1} onHourHandStyle={this.state.hourHandStyle}
        onMinHandStyle={this.state.minHandStyle} 
        onSecondHandStyle={this.state.secondHandStyle} onStyle={this.state.style1} />

        <Clock onGetClass={"clock2 "+ this.state.clockClass2} getHourHandClass={this.state.hourClass2} getMinHandClass={this.state.minClass2} getSecHandClass={this.state.secClass2} onHourHandStyle={this.state.hourHandStyle}
        onMinHandStyle={this.state.minHandStyle}
         onStyle={this.state.style2}
       />  
        </div>
       <div className="foot"><h3>2020 <i>by kodencja</i></h3></div>
      </div>
     );
  }
}
 
export default App;