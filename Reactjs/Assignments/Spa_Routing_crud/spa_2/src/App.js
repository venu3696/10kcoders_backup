
import './App.css';
import {BrowserRouter, Route, Routes, } from 'react-router-dom'
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import ContactUs from './Components/ContactUs';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import NoMatch from './Components/NoMatch';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contactUs' element={<ContactUs/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='*' element={<NoMatch/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
