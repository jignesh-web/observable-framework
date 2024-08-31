import * as React from "npm:react";

function Card() {
  const [count, setCount] = React.useState(0);
  return (
    <button className="custom-button" onClick={() => setCount(count + 1)}>
      You clicked {count} times
    </button>
  );
}

export { Card };
