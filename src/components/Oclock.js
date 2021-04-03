import React from "react";

function Oclock(props) {
  //   console.log("Oclock function");

  const {
    onGetClass,
    onStyle,
    getHourHandClass,
    getMinHandClass,
    getSecHandClass,
    onSecondHandStyle,
    onHourHandStyle,
    onMinHandStyle,
  } = props;

  return (
    <div>
      <div className={onGetClass} style={onStyle}>
        <div className="clock-face">
          <div
            className={"hand " + getHourHandClass}
            style={onHourHandStyle}
          ></div>
          <div
            className={"hand " + getMinHandClass}
            style={onMinHandStyle}
          ></div>
          <div
            className={"hand " + getSecHandClass}
            style={onSecondHandStyle}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Oclock);
