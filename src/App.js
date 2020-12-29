import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
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
    // secondHandStyleCopy: {transform: `rotate(${12}deg)`},
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

  // getDomElem(){
    // const body = ReactDOM.findDOMNode(this).parentElement;
    // const second = ReactDOM.findDOMNode(this).getElementsByClassName('second-hand')[1];
    // const hand = ReactDOM.findDOMNode(this).getElementsByClassName('min-hand')[1];
    // const hour = ReactDOM.findDOMNode(this).getElementsByClassName('hour-hand')[1];
    // console.log(body);
  // }

   setDate = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    // const appThis = ReactDOM.findDOMNode(this);

    // this.getDomElem();

    // const secondsDegrees = (seconds / 60) * 360;
    const secondsDegrees = seconds *6;
    const minutesDeg = 6 * minutes;
    // const hoursDeg = hours * 30 + 30 * (minutesDeg / 360);
    const hoursDeg = hours * 30;
    

    // const { secondsDegrees, minutesDeg, hoursDeg } = this.state;
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

    // const { secondHandStyle, minHandStyle, hourHandStyle  } = this.state

    if (secondsDegrees >= 0 && secondsDegrees <= 9) {
      transitionDurSec = "0s";
      // clockCl = "headShake";
      clockCl1 = "flipOpen";
      ifWasHit = true;
      // clockCl2 ="";
    } 
    else if (secondsDegrees > 9 && secondsDegrees <=22){
      // visibilityClock2 = 'visible';
      // console.log(secondsDegrees);
      transitionDurSec = "0.05s";
      clockCl1 = "flipOpen";
      if(this.state.ifHit === true){
        clockCl2 = "disappear";
      }
      
      if(secondsDegrees >=9){
        // appThis.classList.add('hit');
        AppCl = "hit";
      }
     
    } 
    else if(secondsDegrees > 22 && secondsDegrees < 180){
      if(this.state.ifHit === true){
        clockCl2 = "disappear";
      }
      transitionDurSec = "0.05s";
      // clockCl = "flipOpen";
      // appThis.classList.remove('hit');
      AppCl = "";
    } 
    else {
      transitionDurSec = "0.05s";
      // clockCl2 = "";
      // clockCl = "";
      // clockCl2 = "invisible";
      // clockCl2 = ''
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
    // console.log(minRotate);

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
      // style2: {
        // visibility: visibilityClock2
      // }
    });
    // this.setState({ secondHandStyle: { transitionDuration: transitionDur } });
  };

  intervCall = () => {
    setInterval(() => {
      this.setDate();
      // this.setStyle();
    }, 1000);
  };



  render() { 
    return ( 
      <div className={"App "+this.state.AppClass}>
        <div className="container">
        <Clock onGetClass={"clock1 "+ this.state.clockClass1} getHourHandClass={this.state.hourClass1} getMinHandClass={this.state.minClass1} getSecHandClass={this.state.secClass1} onHourHandStyle={this.state.hourHandStyle}
        onMinHandStyle={this.state.minHandStyle} 
        onSecondHandStyle={this.state.secondHandStyle} onStyle={this.state.style1} />

        <Clock onGetClass={"clock2 "+ this.state.clockClass2} getHourHandClass={this.state.hourClass2} getMinHandClass={this.state.minClass2} getSecHandClass={this.state.secClass2} onHourHandStyle={this.state.hourHandStyle}
        onMinHandStyle={this.state.minHandStyle}
         onStyle={this.state.style2}
       />  
        </div>



      {/* <Clock onStyle={this.state.style} onHourHandStyle={this.state.hourHandStyle}
        onMinHandStyle={this.state.minHandStyle} 
       />  */}

      </div>
     );
  }
}
 
export default App;


//    hourStyle:{
//   height: '35%',
//   width: '8px',
//   backgroundColor: 'black'
// },
// minStyle:{
//   height: '45%',
//   width: '6px',
//   backgroundColor: 'darkolivegreen'
// },
// secStyle:{
//   transform: 'rotate(5deg)',
//   width: '4px',
//   backgroundColor: 'palegoldenrod'
// },