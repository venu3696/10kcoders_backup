
import './App.css';
import {BrowserRouter, Routes, Route, } from 'react-router-dom'
import NavBar from './Components/NavBar';
import About from './Components/About';
import More from './Components/More';
import Home from './Components/Home';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/About' element={<About/>} />
      <Route path='/More' element={<More/>} />
    </Routes>

    </BrowserRouter>
    </div>
  );
}

export default App;
