import React, {useState} from 'react'
import UsersList from '../arrayOfUsers/user';
import "./Signup.css";



function Signup(props) {

    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");


    const signup = () => {
        const obj ={name:Name,email:Email,password:Password};
        UsersList.push(obj);
        console.log(UsersList);
        localStorage.setItem("secret",true);
        props.value(true);
    }


    return (
        <div className='su-m'>
            <p className='su-p1'>SignUp Here</p>
            <input type="text" value={Name} onChange={(e) => setName(e.target.value)} placeholder='Enter Name' className='su-i' required />
            <input type="email" value={Email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' className='su-i' required />
            <input type="password" value={Password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' className='su-i' required />
            <button onClick={signup} className='su-b'>Sign Up</button>
        </div>
    )
}

export default Signup
