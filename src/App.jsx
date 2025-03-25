import "./App.css";
import IceCream from "./Animation/IceCream/IceCream";
import MoveBear from "./Animation/MoveBear/MoveBear";
import Sponge from "./Animation/Sponge/Sponge";
import Timer from "./Animation/Timer/Timer";
import { useEffect, useState } from "react";
import Cube from "./Animation/Cube/Cube";
import Shadow from "./Animation/Shadow/Shadow";
import Model from "./Animation/Model/Model";

function App() {
  const [page, setPage] = useState(7);

  useEffect(() => {
    setPage(Number(localStorage.getItem("page") || 1));
  }, []);

  useEffect(() => {
    localStorage.setItem("page", page);
  }, [page]);

  const style = () => {
    if (page === 3)
      return { background: "rgb(65, 105, 225)", borderRadius: "3px" };
    else return {};
  };

  return (
    <div className="App">
      {page === 1 && <IceCream />}
      {page === 2 && <MoveBear />}
      {page === 3 && <Sponge />}
      {page === 4 && <Timer />}
      {page === 5 && <Cube />}
      {page === 6 && <Shadow />}
      {page === 7 && <Model />}

      <div className="pagination_container">
        <ul style={style()} className="pagination">
          <li
            onClick={() => setPage(1)}
            className={`waves-effect ${page === 1 && "active"}`}
          >
            <a>1</a>
          </li>
          <li
            onClick={() => setPage(2)}
            className={`waves-effect ${page === 2 && "active"}`}
          >
            <a>2</a>
          </li>
          <li
            onClick={() => setPage(3)}
            className={`waves-effect ${page === 3 && "active"}`}
          >
            <a>3</a>
          </li>
          <li
            onClick={() => setPage(4)}
            className={`waves-effect ${page === 4 && "active"}`}
          >
            <a>4</a>
          </li>
          <li
            onClick={() => setPage(5)}
            className={`waves-effect ${page === 5 && "active"}`}
          >
            <a>5</a>
          </li>
          <li
            onClick={() => setPage(6)}
            className={`waves-effect ${page === 6 && "active"}`}
          >
            <a>6</a>
          </li>
          <li
            onClick={() => setPage(7)}
            className={`waves-effect ${page === 7 && "active"}`}
          >
            <a>7</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
