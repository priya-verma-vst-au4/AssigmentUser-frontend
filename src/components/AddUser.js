import React, {useState} from "react";
import {useNavigate} from 'react-router-dom'

const AddUser = ()=>{
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate();

    const saveDate= async()=>{
        console.log(name,age,phone,email)
        let result = await fetch('http://localhost:5000/save',{
            method: 'post',
            body: JSON.stringify({name,age,phone,email}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json()
        console.log(result);
        if(result){
            navigate('/')
        }

    }

    return(
        <div className="register">
            <h1>Add User</h1>
            <input className="inputBox" value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter Name"/>
            <input className="inputBox" value={age} onChange={(e)=>setAge(e.target.value)} type="number" placeholder="Enter Age"/>
            <input className="inputBox" value={phone} onChange={(e)=>setPhone(e.target.value)} type="number" placeholder="Enter Phone Number"/>
            <input className="inputBox" value={email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Enter Email"/>
            <button className="addButton" onClick={saveDate} type="button">Submit</button>
        </div>
    )
}

export default AddUser