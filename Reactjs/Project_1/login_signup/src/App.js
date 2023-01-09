import React, { useState } from 'react';
import './App.css';

import Login from './Components/Login';
import Register from './Components/Register';

function App() {
  const[currentForm, setCurrentForm] = useState('login')

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    <div className="App">

      { currentForm === Login ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />  }

    
    </div>
  );
}

export default App;
