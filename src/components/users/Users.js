import React, { useState } from "react";
import Footer from "../footer/Footer";
import ArrayOfUsers from "../arrayOfUsers/ArrayOfUsers";
import Nav from "../nav/Nav";
import "./Users.css";




const UserList = (data) => {

// const Delete = (e) =>{
//     ArrayOfUsers = ArrayOfUsers.filter(val => val.id !== e);
//     // setstate(true);
// }


  return (
    <div key={data.id} className="m">
      <div className="s-1">
        <img src={data.imgURL} alt="any" className="img1" />
      </div>
      <div className="s-2">
        <p className="p1">{data.name}</p>
        <p className="p2">{data.email}</p>
        <p className="p3">{data.userType}</p>
      </div>
      <div className="s-3">
        <div className="s-3-s">
          <img src={data.edit} alt="any" className="img2" />
          <img src={data.dele} alt="any" className="img2" />
        </div>
        <p>
          Salary:<span className="span">{data.Salary}</span>
        </p>
        <p>
          Cost:<span className="span">{data.Cost}</span>
        </p>
      </div>
    </div>
  );
};

const Users = (props) => {
  const [state, setstate] = useState(true);
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Role, setRole] = useState("");
  const [Salary, setSalary] = useState("");
  const [Group, setGroup] = useState("");


const submit =(e) => {
    e.preventDefault();
    const obj = 
    {
        id: ArrayOfUsers.length+1,
        imgURL: "https://eyemediastudios.co.uk/wp-content/uploads/2021/02/photography-8-4-6.jpg",
        name: Name,
        email: Email,
        userType: Role,
        edit: "https://static.vecteezy.com/system/resources/thumbnails/001/500/458/small/edit-icon-free-vector.jpg",
        dele: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqdV_TgwjyVgB6KDmAJGN3oT9XTME0sflargbMBwODuYwJA19RDXRS0aDEtDkXmZdL2aU&usqp=CAU",
        Salary: "$"+Salary,
        Cost: "$"+Group
    }
    ArrayOfUsers.push(obj);
    setstate(true);
}



  return (
    <div className="u-o">
      <Nav value={props.value} />
      <div className="h-m">
        <div>
          <p>
            <span className="span">Projects</span>/users
          </p>
          <p className="p-u">Users</p>
        </div>
        <button onClick={() => setstate(false)} className="add-u">
          Add User
        </button>
      </div>
      {state ? (
        <div className="outer">{ArrayOfUsers.map(UserList)}</div>
      ) : (
        <div className="an-m">
            <img className="c-img" onClick={() => setstate(true)} src="https://images.all-free-download.com/images/graphiclarge/x_wrong_cross_no_clip_art_26502.jpg" alt="cros" />

            <div className="form">
                <label>Name:</label><br />
                <input type="text" value={Name} onChange={(e) => setName(e.target.value)} className="i" /><br />
                <label>Email:</label><br />
                <input type="email" value={Email} onChange={(e) => setEmail(e.target.value)} className="i" /><br />
                <label >Role:</label><br />
                <select onChange={(e) => setRole(e.target.value)} className="i">
                    <option value="">Select</option>
                    <option value="Admin">Admin</option>
                    <option value="Client">Client</option>
                    <option value="Developer">Developer</option>
                    <option value="QA">QA</option>
                </select><br />
                <label >Salary:</label><br />
                <input type="text" value={Salary} onChange={(e) => setSalary(e.target.value)} className="i" /><br />
                <label >Group:</label><br />
                <input type="number" value={Group} onChange={(e) => setGroup(e.target.value)} className="i" /><br /><br />
                <button className="btn" onClick={submit}>Submit</button>
            </div>


        </div>
      )}

      <Footer />
    </div>
  );
};

export default Users;
