import React from 'react'
import s from './Sponge.module.css'
function MoveBear() {
  return (
    <div className={s.app}>
      <div className={s.container}>
        <div className={s.aquarium}>
          <div className={s.sponge}>
            <div className={s.hair}></div>
            <div className={s.face}>
              <div className={s.eyes}></div>
              <div className={s.mouth}></div>
              <div className={s.smile}></div>
            </div>
            <div className={s.hole}></div>
            <div className={s.hole}></div>
            <div className={s.hole}></div>
          </div>
          <div className={s.bowl}>
            <div className={s.water}></div>
            <div className={s.glare}></div>
            <div className={s.bubles}>
                <div className={s.buble}></div>
                <div className={s.buble}></div>
                <div className={s.buble}></div>
                <div className={s.buble}></div>
                <div className={s.buble}></div>
                <div className={s.buble}></div>
              </div>
          </div>
          <div className={s.drops}>
            <div className={s.splashes_left}></div>
            <div className={s.bigSplashe}></div>
            <div className={s.splashes_right}></div>
          </div>
          <div className={s.stand}></div>
          <div className={s.floor}></div>
        </div>
      </div>
    </div>
  )
}

export default MoveBear