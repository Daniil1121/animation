import React from "react";

const test2 = [
  { x: 0, y: -10, deg: 270 },
  { x: 0, y: 10, deg: 90 },
  { x: 10, y: 0, deg: 0 },
  { x: -10, y: 0, deg: 180 },
];

const getRandomValue = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const Test = ({ manCoor }) => {
  const [coor, setCoor] = React.useState({
    x: getRandomValue(-3000, 3000),
    y: getRandomValue(-3000, 3000),
    deg: 0,
  });
  const [test, setTest] = React.useState(false);

  const man = React.useRef();

  const func = () => {
    const { x, y, deg } = test2[Math.floor(Math.random() * 4)];
    let i = getRandomValue(30, 60);
    const interval = setInterval(() => {
      setCoor((prev) => {
        if (prev.y <= -3000 || prev.y >= 3000) {
          if (prev.y <= -3000) {
            let i = getRandomValue(0, 10);
            const changeY = setInterval(() => {
              setCoor((prev) => ({
                ...prev,
                y: prev.y + 10,
                deg: 90,
              }));
              i--;
              if (i < 0) clearInterval(changeY);
            }, 50);
          }
          if (prev.y >= 3000) {
            let i = getRandomValue(0, 10);
            const changeY = setInterval(() => {
              setCoor((prev) => ({
                ...prev,
                y: prev.y - 10,
                deg: 270,
              }));
              i--;
              if (i < 0) clearInterval(changeY);
            }, 50);
          }
          return prev;
        }
        if (prev.x <= -3000 || prev.x >= 3000) {
          if (prev.x <= -3000) {
            let i = getRandomValue(0, 10);
            const changeX = setInterval(() => {
              setCoor((prev) => ({
                ...prev,
                x: prev.x + 10,
                deg: 0,
              }));
              i--;
              if (i < 0) clearInterval(changeX);
            }, 50);
          }
          if (prev.x >= 3000) {
            let i = getRandomValue(0, 10);
            const changeX = setInterval(() => {
              setCoor((prev) => ({
                ...prev,
                x: prev.x - 10,
                deg: 180,
              }));
              i--;
              if (i < 0) clearInterval(changeX);
            }, 50);
          }

          return prev;
        }
        if (
          prev.y > -3000 &&
          prev.y < 3000 &&
          prev.x > -3000 &&
          prev.x < 3000
        ) {
          return {
            ...prev,
            x: prev.x + x,
            y: prev.y + y,
            deg,
          };
        } else return prev;
      });
      i--;
      if (i < 0) {
        clearInterval(interval);
        func();
      }
    }, 50);
  };

  React.useEffect(() => {
    func();
  }, []);

  React.useEffect(() => {
    if (
      manCoor.x + 250 > coor.x &&
      manCoor.x - 250 < coor.x &&
      manCoor.y + 250 > coor.y &&
      manCoor.y - 250 < coor.y
    ) {
      setTest(true);
    } else setTest(false);
  }, [manCoor, coor]);

  return (
    <div
      ref={man}
      style={{
        "--x": `${coor.x}px`,
        "--y": `${coor.y}px`,
        "--deg": `${coor.deg}deg`,
      }}
      className={`man man-2 move ${test ? "test" : ""}`}
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
  );
};

export default Test;

function useDebounce(value, delay) {
  // value and delay in ms (1000ms = 1s)
  // debounced values
  const [debouncedValue, setDebouncedValue] = React.useState(value);

  React.useEffect(
    () => {
      // Update debounced value after delay
      const t = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      // clean up the timeout after value changes
      return () => {
        clearTimeout(t);
      };
    },
    [value, delay] // re-run if value or delay changes
  );
  return debouncedValue;
}
