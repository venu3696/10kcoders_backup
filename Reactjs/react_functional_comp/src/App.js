// import Employees from './Components/Employees';

import UsrsCrud from "./Components/UsrsCrud";

//import { Person } from './Components/Person';
// import {User} from './Components/User';

function App() {
  return (
    <div className="App">
    {/* <User/> */}
    {/* <Person/> */}
    {/* <Employees/> */}
    <UsrsCrud/>
    </div>
  );
}

export default App;

// 1. functional component won't have render method. It will have return method only
// 2. functional component won't have state method. It will have hooks (useState)
// 3. functional won't have Life cycle hooks
// 4. functional component does not require .this
// we will have hooks (useEffect .this hook equal to component did mount)

