import React, {useState} from 'react';
import UsersList from '../arrayOfUsers/user';
import "./Signin.css";

function Signin(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginHandler = (e) => {
        e.preventDefault();
        let val = UsersList.find((val) => val.email === email && val.password === password);
        val === undefined ? (window.alert("Invalid Email or Password")):(localStorage.setItem("secret",true));
        setEmail("");
        setPassword("");
        if(val === undefined)
        {
            window.alert("Invalid Email or Password");
        }
        else
        {
            localStorage.setItem("secret",true);
            setEmail("");
            setPassword("");
            props.value(true);
        }

    }


    return (
        <div className='si-m'>
            <p className='si-p1'>Logo Here</p>
            <p className='si-p2'>One account. Access all services.</p>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' className='si-i' required/><br />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' className='si-i' required/>
            <div className='si-rf'>
                <div>
                    <input type="checkbox" className='si-c' /><span className='si-c-r'>Remember me</span>
                </div>
                <p className='si-p3'>Forgot Password?</p>
            </div>
            <button className='si-b' onClick={loginHandler}>Sign In</button>
        </div>
    )
}

export default Signin
