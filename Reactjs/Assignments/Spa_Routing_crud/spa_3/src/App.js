
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import NavBar from './Components/NavBar';
import Layout from './Components/Layout';
import Users from './Components/Users';
import EditUser from './Components/EditUser';
import DeleteUser from './Components/DeleteUser';
import CreateUser from './Components/CreateUser';
function App() {
  return (
   <BrowserRouter>
   <NavBar/>
   <Routes>
    <Route path='/' element={<Layout/>}>
      <Route index element={<Users/>} />
      <Route path='/edit/:id' element={<EditUser/>} />
      <Route path='/delete/:id' element={<DeleteUser/>}/>
      <Route path='/create' element={<CreateUser/>}/>

    </Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
