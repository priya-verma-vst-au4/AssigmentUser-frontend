import React, {useEffect} from "react";
import {useParams} from 'react-router-dom';

const UpdateUser = ()=>{
    const [name, setName] = React.useState('')
    const [age, setAge] = React.useState('')
    const [phone, setPhone] = React.useState('')
    const [email, setEmail] = React.useState('')
    const params = useParams();

    useEffect(()=>{
        getUserDetails();
    },[])

    const getUserDetails = async()=>{
        let user = await fetch(`http://localhost:5000/save/${params.id}`)
        user = await user.json();
        setName(user.name);
        setAge(user.age);
        setPhone(user.phone);
        setEmail(user.email)
    }

    const UpdateUser= async()=>{
        console.log(name,age,phone,email)
        let result = await fetch(`http://localhost:5000/save/${params.id}`,{
            method: 'put',
            body: JSON.stringify({name,age,phone,email}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json()
        console.log(result);
        // if(result){
        //     navigate('/')
        // }

    }

    return(
        <div className="register">
            <h1>Update User</h1>
            <input className="inputBox" value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter Name"/>
            <input className="inputBox" value={age} onChange={(e)=>setAge(e.target.value)} type="number" placeholder="Enter Age"/>
            <input className="inputBox" value={phone} onChange={(e)=>setPhone(e.target.value)} type="number" placeholder="Enter Phone Number"/>
            <input className="inputBox" value={email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Enter Email"/>
            <button className="addButton" onClick={UpdateUser} type="button">Update</button>
        </div>
    )
}

export default UpdateUser