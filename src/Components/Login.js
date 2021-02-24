import React from 'react'
import {Link} from "react-router-dom";

export default function Login(){
    return (
        <>
            <Link to="/"><button>Default</button></Link>
            <Link to="/dashboard"><button>dashboard</button></Link>

            <br/>

            This is login page
        </>
    )
}
