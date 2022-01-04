import React from 'react';
import "./Nav.css";

const Nav = (props) => {
    const logOut = (e) =>{
        e.preventDefault();
        localStorage.clear();
        props.value(false);
    }
    return (
        <div className='nv-m'>
            <div className='nv-m-s'>
                <p className='nv-l1'>Logo Here</p>
                <button className="nv-l2" onClick={logOut}>Log Out</button>
            </div>
        </div>
    )
}

export default Nav;