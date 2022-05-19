import style from './MoveBear.module.css'


function MoveBear() {
  return (
    <div className={style.app}>
      <div className={style.container}>
        <div className={style.head}>
          <div className={style.face}>
            <div className={style.ears}>
            <div className={style.left_ear}></div>
            <div className={style.right_ear}></div>
            </div>
            <div className={style.eyes}>
              <div className={style.left_eye}></div>
              <div className={style.right_eye}></div>
            </div>
            <div className={style.nose}>
              <div className={style.nose_tip}></div>
            </div>
          </div>
        </div>
        <div className={style.shadow}></div>
      </div>
    </div>
  );
}

export default MoveBear;