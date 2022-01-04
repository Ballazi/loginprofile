import React from 'react'
import Footer from '../footer/Footer'
import ArrayOfUsers from '../arrayOfUsers/ArrayOfUsers';
import Nav from '../nav/Nav'
import "./Users.css";

const UserList = (data) => {
    return(
        <div key={data.id} className='m'>
            <div className='s-1'>
                <img src={data.imgURL} alt="any" className='img1' />
            </div>
            <div className='s-2'>
                <p className='p1'>{data.name}</p>
                <p className='p2'>{data.email}</p>
                <p className='p3'>{data.userType}</p>
            </div>
            <div className='s-3'>
                <div className='s-3-s'>
                    <img src={data.edit} alt="any" className='img2'/>
                    <img src={data.dele} alt="any" className='img2'/>
                </div>
                <p>Salary:<span className='span'>{data.Salary}</span></p>
                <p>Cost:<span className='span'>{data.Cost}</span></p>
            </div>
        </div>
    )
}

const Users = (props) => {
    return (
        <div>
            <Nav value={props.value}/>
            <div className='first'>
                <div className='h-m'>
                    <div>
                        <p><span className='span'>Projects</span>/users</p>
                        <p className='p-u'>Users</p>
                    </div>
                    <button className='add-u'>Add User</button>
                </div>
                <div className='outer'>{ArrayOfUsers.map(UserList)}</div>
            </div>
            <div className='second'></div>

            <Footer />
        </div>
    )
}

export default Users
