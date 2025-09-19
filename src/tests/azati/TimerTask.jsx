import React, { useEffect } from "react";

export const PleaseReviewMe = () => {
  const [count, setCount] = React.useState(1);
  const [items, setItems] = React.useState([{ id: 1 }]);

  React.useEffect(() => {
    document.addEventListener("click", () => {
      setInterval(() => console.log(count), 1000);
    });
  });

  const click = () => {
    // setCount((prevCount) => prevCount + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setItems((prevItems) => [...prevItems, { id: count + 1 }]);
  };

  return (
    <React.Fragment>
      <ul>
        {items.map((item) => (
          <li>{item.id}</li>
        ))}
      </ul>
      <button onClick={click}>add one</button>
    </React.Fragment>
  );
};