import React from 'react'
import { Link } from 'react-router-dom'
export default function RequestDemo() {
    return (
        <div style={{margin:"20px"}}>

            <h1>Home Page</h1>
            <input type={"text"} onClick={()=>localStorage.setItem('user_name_is',"guest")} placeholder="Guest role" style={{marginBottom:"5px"}} /><br/>
            <Link to="/createproject"><button style={{marginBottom:"5px"}}>click here to login</button> </Link><br/>
            <Link to="/reqaccess"><button style={{marginBottom:"5px"}}>Register Screen</button> </Link><br/>
            <Link to="/forgot"><button style={{marginBottom:"5px"}}>Forgot Password</button> </Link><br/>

        </div>
    )
}
