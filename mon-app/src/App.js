import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RouterTest from './RouterTest';
import Counter from './Counter'
import InputDisplay from './InputDisplay';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/test' element={<RouterTest />}/>
        <Route path='/' element={<Counter />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
