import './App.css';
import IceCream from './Animation/IceCream/IceCream'
import MoveBear from './Animation/MoveBear/MoveBear'
import Sponge from './Animation/Sponge/Sponge'
import { useEffect, useState } from 'react';

function App() {

  const [page, setPage] = useState(1)



  useEffect(() => {
    setPage(Number(localStorage.getItem('page') || 1))
  }, [])

  useEffect(() => {
    localStorage.setItem('page', page)
  }, [page])

  return (
    <div className='App'>

      {page === 1 && <IceCream />}
      {page === 2 && <MoveBear />}
      {page === 3 && <Sponge />}

      <div className='pagination_container'>
        <ul className="pagination">
          <li onClick={() => setPage(1)} className={`waves-effect ${page === 1 && 'active'}`}><a >1</a></li>
          <li onClick={() => setPage(2)} className={`waves-effect ${page === 2 && 'active'}`}><a >2</a></li>
          <li onClick={() => setPage(3)} className={`waves-effect ${page === 3 && 'active'}`}><a href="#!">3</a></li>
         {/*  <li onClick={() => setPage(4)} className={`waves-effect ${page === 4 && 'active'}`}><a href="#!">4</a></li>
          <li onClick={() => setPage(5)} className={`waves-effect ${page === 5 && 'active'}`}><a href="#!">5</a></li> */}
        </ul>
      </div>
    </div>
  );
}

export default App;
