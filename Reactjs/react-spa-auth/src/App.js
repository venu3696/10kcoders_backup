
import './App.css';
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";
import AuthProvider from './Components/AuthProvider';
function App() {
  return (
    <div className="App">
     <AuthProvider>
      
     </AuthProvider>
    </div>
  );
}

export default App;
