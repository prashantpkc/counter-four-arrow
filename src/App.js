import "./styles.css";
import React, { useState } from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="parent">
        <p className="count">{count}</p>

        <ArrowDropUpIcon
          className="arrow-up"
          onClick={() => setCount((prev) => prev + 1)}
        />
        <ArrowDropDownIcon
          className="arrow-down"
          onClick={() => setCount((prev) => prev - 1)}
        />
        <ArrowRightIcon
          className="arrow-right"
          onClick={() => setCount((prev) => prev + 10)}
        />
        <ArrowLeftIcon
          className="arrow-left"
          onClick={() => setCount((prev) => prev - 10)}
        />
      </div>
    </div>
  );
}
