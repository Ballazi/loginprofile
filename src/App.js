import "./App.css";
import Signin from "./components/signin/Signin";
import Users from "./components/users/Users";
import { BrowserRouter } from "react-router-dom";
import React, { useState } from "react";
import SignUp from "./components/signup/Signup";

function App() {
  const [state, setstate] = useState(false);
  const [isNew, setNew] = useState(false);

  const fun = (e) => {
    setstate(e);
  };

  const clickHandler = () => setNew((prevState) => !prevState);


  return (
    <BrowserRouter>
      <div className="App">
        {state ? (
          <Users value={fun} />
        ) : (
          <>
            {isNew ? <Signin value={fun}/> : <SignUp value={fun}/>}

            <p className="text-center">
              {isNew ? "Don't have an account?" : "Already have an account?"}
              <span className="signup-text" onClick={clickHandler}>
                {" "}
                {isNew ? "SignUp" : "LogIn"}
              </span>
            </p>
          </>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
