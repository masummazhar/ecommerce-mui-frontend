import React from "react";
import { useState } from "react";

const Profile = ({name,age,paid,services,dummyFunction}) => {
    const [counter, setCounter] = useState(0)

    // const handleClick = name => {
    //     console.log(`Hello ${name}`)
    //     dummyFunction(name)
    // }

    const handleClick = () => {
        setCounter(counter+1)
        if(counter %2 === 0) console.log("even")
        else console.log("Odd")
    }

    return (
        <>
            <h1>Welcome, {name}</h1>

            <h2>Your age is {age}</h2>

            <h3>
                {
                    age >= 18 ?
                    "You are an Adult"
                    :" You are a child"
                }
            </h3>

            <h3>
                {
                    paid === true &&
                        "You are a premium subscriber"
                }
            </h3>

            {/* <ul>
                {
                    services.map(item => {
                        return <li>{item}</li>
                    })
                }
            </ul> */}

            <ul>
                {
                    services.map(item => 
                         <li key={item}>{item}</li>
                    )
                }
            </ul>

            {/* <button onClick={() => handleClick(name)}>
                Click Me
            </button> */}

            <button onClick={handleClick}>
                Hit +1
            </button>

            <span>Total Hit: {counter}, counter is {counter%2==0? 'even' : 'odd'}</span>
        </>
    )
}

export default Profile

// export default function Profile () {

// }
