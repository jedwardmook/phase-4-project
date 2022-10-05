import React, { useState } from "react";
import { Link } from "react-router-dom";

function HostForm(){

    return (
        <div className="login_window">
            <div className="host_form_div">
            <Link to="/"><button className="exit">X</button></Link>
            </div>
        </div>
    )
}

export default HostForm;