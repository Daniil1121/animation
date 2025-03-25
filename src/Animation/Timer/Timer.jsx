import React from "react";
import s from "./Timer.module.css";
function MoveBear() {
  return (
    <div className={s.app}>
      <div className={s.container}>
        <div className={s.timer_second}>
          <div className={s.timer_second_line}></div>
          <div className={s.timer_second_counter}>
            <div className={s.timer_minute_count}>
              {new Array(60).fill(1).map((item, idx) => (
                <span>{idx > 9 ? idx : `0${idx}`}</span>
              ))}
            </div>
            <div className={s.timer_second_count}>
              {new Array(60).fill(1).map((item, idx) => (
                <span>{idx > 9 ? idx : `0${idx}`}</span>
              ))}
            </div>
          </div>
        </div>
        <div className={s.timer_big_radius}>
          <div className={s.timer_big_radius_line}></div>
          <div className={s.timer_big_radius_counter}></div>
        </div>
      </div>
    </div>
  );
}

export default MoveBear;
