import {Link} from "react-router-dom";
import React from "react";

export default function Default(){
    return (
        <>
            <Link to="/dashboard"><button>Dashboard</button></Link>
            <Link to="/login"><button>login</button></Link>

            <br/>

            Default Page
        </>
    )
}
