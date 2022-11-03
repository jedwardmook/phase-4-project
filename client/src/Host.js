import React from "react";
import { Link } from "react-router-dom";

function Host(){

    return (
        <div className="login_window">
            <div className="host_form_div">
                <Link to="/"><button className="exit">X</button></Link>
                <h4 className="form_header">Host</h4>
                <hr/>
                <h2 className="host_welcome">Lordships are earned</h2>
                <img className="host_siege" src="https://img.artpal.com/11414/22-15-6-22-22-17-10m.jpg" />
                <p className="host_p">Prove your mettle and be rewarded with lands and the titles that come with them.</p>
                <div className="space_div"></div>
            </div>
        </div>
    )
}

export default Host;