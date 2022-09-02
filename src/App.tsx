import { useDispatch, useSelector } from 'react-redux';
import { changeUser, selectUser } from './redux/slice/userSlice';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import DetailProduct from './pages/DetailProduct';

function App() {

  //disparar a ação
  const dispatch = useDispatch()

  function teste(){
    dispatch(changeUser('joyce'))
  }

  //consumir o estado
  const user = useSelector(selectUser)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/product' element={<DetailProduct/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
