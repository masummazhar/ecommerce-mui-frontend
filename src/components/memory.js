import React from "react";
import { useState } from "react";

const data = [
    {id: 1, name: 'tamim'},
    {id: 2, name: 'sakib'},
    {id: 3, name: 'musfiq'},
]


const Memory = () => {
    const [users,setUsers] = useState(data)
    const [id, setId] = useState()
    const [name, setName] = useState()

    const [myObj,setMyObj] = useState ({
        name: 'abc',
        address: {
            village: "x",
            post: "y",
            district: "z"
        }
    })

    const handleChangeId = event => {
        setId(event.target.value)
    }

    const handleChangeName = event => {
        setName(event.target.value)
    }

    const handleAdd = () => {
        setUsers([...users,{id: id, name: name}])
    }

    const handleUpdate = () => {
        setUsers(users.map(user => {
            if(user.id == id){
                user.name = name
                return user
            } else return user
        }))
    }

    const handleRemove = () => {
        setUsers(users.filter(user => user.id != id))
    }

    const handleChangeObject = () => {
        setMyObj({
            ...myObj,
            // name: "pqr",
            address:{
                ...myObj.address,
                village:"qqqq"
            }
        })
    }

    return (
        <>
            <span>User List: </span>

            <ul>
                {users.map(item => {
                    return <li key={item.id}>{item.id}&nbsp;{item.name}</li>
                })}
            </ul>

            <span>Player Id: </span>
            <input onChange={event => handleChangeId(event)}/>

            <span>Player Name: </span>
            <input onChange={event => handleChangeName(event)}/>


            <br/>
            <br/>
            <button onClick={handleRemove}>Remove</button> &nbsp;
            <button onClick={handleAdd}>Add</button>&nbsp;
            <button onClick={handleUpdate}>Update</button>


            <h3>
                Name: {myObj.name}
                <br/>
                My address: {myObj.address.village},{myObj.address.post},{myObj.address.district}
            </h3>
            <button onClick={handleChangeObject}>Update Obj</button>
        </>
    )
}


export default Memory