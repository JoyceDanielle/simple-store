import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header';
import { changeUser, selectUser } from './redux/slice/userSlice';

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
      <Header title='Joyzis Store'/>
    </div>
  );
}

export default App;
