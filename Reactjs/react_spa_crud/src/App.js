import  "./App.css"
import Home from "./Components/Home";

import Pricing from "./Components/Pricing";
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import  NavBar  from "./Components/NavBar";
import Features from "./Components/Features";
import NoMatch from "./Components/NoMatch";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/features" element={<Features/>}/>
      <Route path="/pricing" element={<Pricing/>}/>
      <Route path='*' element={<NoMatch/>} />
      
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
