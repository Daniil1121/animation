import React from "react";
import "./Shadow.scss";

// bl - 4,35
// br - 85, 63
// tr - 132,24
// tl - 58,3

const Shadow = () => {
  const [withAnimation, setWithAnimation] = React.useState(false);
  const [revert, setRevert] = React.useState(false);

  const onClick = (e) => {
    if (withAnimation) return;
    setWithAnimation(true);
    setTimeout(() => setWithAnimation(false), 3000);
  };

  return (
    <div className="shadow">
      <div className="shadow__box">
        <div className="shadow__box-profile"></div>
        <div className="shadow__box-anfas">
          <div className={`list ${withAnimation ? "with-animation" : ""}`}>
            <div className="box">
              <div className="box-line"></div>
              <div className="box-line-2"></div>
              <div onClick={onClick} className="box-test">
                {/* <span>СОСИ ЖОПУ</span> */}

                <div className="touch"></div>
              </div>
              <div className="shadow"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div
          onClick={() => setRevert((prev) => !prev)}
          className={`card ${revert ? "revert" : "none"}`}
        >
          <div className="card-content">
            et consectetur adipisicing elit. Dolorum adipisci eum natus eaque
            temporet consectetur adipisicing elit. Dolorum adipisci eum natus
            eaque tempor
          </div>
          <div className="card-content-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            adipisci eum natus eaque tempor
          </div>
        </div>
      </div>
      <div className="scrolling"></div>
    </div>
  );
};

export default Shadow;
