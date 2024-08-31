import * as React from "npm:react@18";
import {tw} from "../twind-setup.js";

function TailwindButton() {
  const [count, setCount] = React.useState(0);
  return (
    <button
      className={tw`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105`}
      onClick={() => setCount(count + 1)}
    >
      You clicked {count} times
    </button>
  );
}

export {TailwindButton};
