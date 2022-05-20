import React from 'react'
import s from './Timer.module.css'
function MoveBear() {
  return (
    <div className={s.app}>
      <div className={s.container}>
        <div className={s.timer}>
          <div className={s.timer_line}></div>
          <div className={s.timer_counter}>
            <div className={s.timer_count}>
              <span >1</span>
              <span >2</span>
              <span >3</span>
              <span >4</span>
              <span >5</span>
              <span >6</span>
              <span >7</span>
              <span >8</span>
              <span >9</span>
              <span >10</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoveBear