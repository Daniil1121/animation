import './App.css';
import style from './App.module.css'


function App() {
  return (
    <div className={style.app}>
      <div className={style.container}>
        <div className={style.ice_cream}>
          <div className={style.color}></div>
        </div>
        <div className={style.stick}></div>
      </div>
    </div>
  );
}

export default App;
