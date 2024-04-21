import './App.css';
import { Routes } from 'react-router-dom';
import Login1 from './components/Login1';
import Cardadd from './components/Cardadd';

function App() {
  return (
    <div className="App">
      <Cardadd/>
      <Routes>
        {/* <Routes path='/' element={<Login1/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
