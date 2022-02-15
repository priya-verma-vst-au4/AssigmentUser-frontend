import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom'

const UserList = ()=>{
    const [users, setUsers] = useState('')
    useEffect(()=>{
        getUsers();
    },[])

    const getUsers= async()=>{
       let result = await fetch('http://localhost:5000/');
       result = await result.json()
       setUsers(result)
    }
    
    const deleteUser = async(id)=>{
        let user = await fetch(`http://localhost:5000/user/${id}`
        ,{
            method: 'delete'
        }
        );
        user = await user.json();
    }
    console.log(users)
    return(
        <div className="userlist">
            <h1>Users List</h1>
            <ul>
                <li>S No.</li>
                <li>Name:</li>
                <li> Age:</li>
                <li>Phone:</li>
                <li>Email:</li>
                <li>Actions</li>
            </ul>
            
            {
                users.map((item, index)=>
                    <ul key={item._id}>
                        <li>{index+1}</li>
                        <li>{item.name}</li>
                        <li>{item.age}</li>
                        <li>{item.phone}</li>
                        <li>{item.email}</li>
                        <li><button onClick={()=>deleteUser(item._id)}>Delete</button>
                        <Link to={"/update/"+item._id}>Update</Link></li>
                    </ul>
                )
            }
        </div>
    )

}

export default UserList