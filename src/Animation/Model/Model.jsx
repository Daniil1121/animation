import React from "react";
import "./Model.scss";
import Test from "./Test";

const Model = () => {
  const [move, setMove] = React.useState(false);
  const [coor, setCoor] = React.useState({ x: 0, y: 0, deg: 0 });

  const man = React.useRef();
  const platform = React.useRef();
  const keysPressed = {};

  const keyHandler = (e) => {
    if (e.code === "KeyA" && e.type === "keyup") {
      delete keysPressed[e.key];
      setMove(false);
    }
    if (e.code === "KeyA" && e.type === "keydown") {
      keysPressed[e.key] = true;
      if (keysPressed.w) {
        return setCoor((prev) => ({
          ...prev,
          x: prev.x - 5,
          y: prev.y - 5,
          deg: 225,
        }));
      }
      if (keysPressed.d) {
        setMove(false);
        return setCoor((prev) => ({
          ...prev,
          deg: 0,
        }));
      }
      if (keysPressed.s) {
        return;
      }

      setCoor((prev) => ({ ...prev, y: prev.y - 10, deg: 270 }));
      setMove(true);
    }

    if (e.code === "KeyD" && e.type === "keyup") {
      delete keysPressed[e.key];
      setMove(false);
    }
    if (e.code === "KeyD" && e.type === "keydown") {
      keysPressed[e.key] = true;
      setCoor((prev) => ({ ...prev, y: prev.y + 10, deg: 90 }));
      setMove(true);
    }
    if (e.code === "KeyW" && e.type === "keyup") {
      delete keysPressed[e.key];
      setMove(false);
    }
    if (e.code === "KeyW" && e.type === "keydown") {
      keysPressed[e.key] = true;
      setCoor((prev) => ({ ...prev, x: prev.x - 10, deg: 180 }));
      setMove(true);
    }
    if (e.code === "KeyS" && e.type === "keyup") {
      delete keysPressed[e.key];
      setMove(false);
    }
    if (e.code === "KeyS" && e.type === "keydown") {
      keysPressed[e.key] = true;
      setCoor((prev) => ({ ...prev, x: prev.x + 10, deg: 0 }));
      setMove(true);
    }
  };

  React.useEffect(() => {
    document.addEventListener("keyup", keyHandler);
    document.addEventListener("keydown", keyHandler);
    return () => {
      document.removeEventListener("keyup", keyHandler);
      document.addEventListener("keydown", keyHandler);
    };
  }, []);

  return (
    <div className="model">
      <div className="canvas">
        <div ref={platform} className="platform">
          <div
            style={{
              "--x": `${coor.x}px`,
              "--y": `${coor.y}px`,
              "--deg": `${coor.deg}deg`,
            }}
            ref={man}
            className={`man ${move ? "move" : ""}`}
          >
            <div className="head">
              <div className="left"></div>
              <div className="right"></div>
              <div className="front">
                <div className="face">
                  <div className="eyes">
                    <div className="l-eye"></div>
                    <div className="r-eye"></div>
                  </div>
                  <div className="nose"></div>
                  <div className="mouth"></div>
                </div>
                <div className="hear"></div>
              </div>
              <div className="back"></div>
              <div className="top"></div>
              <div className="bottom"></div>
            </div>
            <div className="body">
              <div className="torso">
                <div className="left"></div>
                <div className="right"></div>
                <div className="front">
                  <div className="decolletage"></div>
                </div>
                <div className="back"></div>
                <div className="top"></div>
                <div className="bottom"></div>
              </div>
              <div className="arm r-arm">
                <div className="left"></div>
                <div className="right"></div>
                <div className="front"></div>
                <div className="back"></div>
                <div className="top"></div>
                <div className="bottom"></div>
              </div>
              <div className="arm l-arm">
                <div className="left"></div>
                <div className="right"></div>
                <div className="front"></div>
                <div className="back"></div>
                <div className="top"></div>
                <div className="bottom"></div>
              </div>
            </div>
            <div className="legs">
              <div className="leg r-leg">
                <div className="left"></div>
                <div className="right"></div>
                <div className="front"></div>
                <div className="back"></div>
                <div className="top"></div>
                <div className="bottom"></div>
              </div>
              <div className="leg l-leg">
                <div className="left"></div>
                <div className="right"></div>
                <div className="front"></div>
                <div className="back"></div>
                <div className="top"></div>
                <div className="bottom"></div>
              </div>
            </div>
            <div className="shadow"></div>
          </div>
          <Test manCoor={coor} />
          {/* <Test manCoor={coor} />
          <Test manCoor={coor} />
          <Test manCoor={coor} />
          <Test manCoor={coor} />
          <Test manCoor={coor} />
          <Test manCoor={coor} />
          <Test manCoor={coor} />
          <Test manCoor={coor} /> */}
          {/* <Test /> */}
        </div>
      </div>
    </div>
  );
};

export default Model;
