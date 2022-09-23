
import { BrowserRouter } from 'react-router-dom';
import RoutesPage from './RoutesPage';

function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
        <RoutesPage/>
      </BrowserRouter>
    </div>
  );
}

export default App;
