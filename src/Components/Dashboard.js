import React from 'react'
import {Link} from "react-router-dom";

export default function Dashboard(){
    return (
        <>
            <Link to="/"><button>Default</button></Link>
            <Link to="/login"><button>login</button></Link>

            <br/>

            This is dashboard page
        </>
    )
}
