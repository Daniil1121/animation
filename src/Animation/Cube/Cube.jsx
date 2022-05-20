import React from "react";
import s from "./Cube.module.css";

function Cube() {
  return (
    <div className={s.app}>
      <div className={s.container}>
        <div className={s.blue_block}></div>
        <div className={s.blur_block}></div>
      </div>
    </div>
  );
}

export default Cube;
