import './App.css';
import Signin from './components/signin/Signin';
import Users from './components/users/Users';
import {BrowserRouter} from "react-router-dom" 
import React, {useState } from 'react';

function App() {
  const [state, setstate] = useState(false);



  const fun = (e) => {
    setstate(e)
  }

  return (
    <BrowserRouter>
      <div className="App">
        {state ?(<Users value={fun}/>):(<Signin value={fun}/>)}
      </div>
    </BrowserRouter>
  );
}

export default App;
