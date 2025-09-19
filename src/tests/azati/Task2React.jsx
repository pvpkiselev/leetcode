import React, { useState } from "react";

const ControlPannel = React.memo(({ changer }) => {
  console.log("render");
  return (
    <div>
      <button onClick={changer}>+</button>
    </div>
  );
});

export default () => {
  const [value, valueChange] = useState(() => Math.random());

  const changer = () => {
    valueChange(Math.random());
  }

  return (
    <div>
      {value}
      <ControlPannel changer={changer} />
    </div>
  );
};