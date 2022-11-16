import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login({setCurrentUser, setIsLoggedIn}){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([])

    let navigate = useNavigate()
     
    function handleSubmit(e) {
        e.preventDefault()
        setErrors([])
        fetch("/sessions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password,
            })
        }).then((response) => {
            if (response.ok) {
                response.json().then((user) => {
                    setCurrentUser(user);
                    navigate("/");
                    setIsLoggedIn(true);
                })
            } else {
                response.json().then((errors) => setErrors(errors.errors))
            }
        });
        setUsername('')
        setPassword('')
    }

    return (
        <div className="login_window">
            <div className="form_div">
                <Link to="/"><button className="exit">X</button></Link>
                <h4 className="form_header">Log in</h4>
                <hr/>
                <h3 className="form_welcome">Welcome back to Heirbnb</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="form_input_top"
                    autoComplete="off"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                ></input>
                <input
                    type="password"
                    className="form_input_bottom"
                    autoComplete="off"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                ></input>
                <p className="note">Don't have an account. Sign up <Link to="/signup">here</Link>.</p> 
                <button type="submit" className="proceed_button">Proceed</button>
                <div className={errors? "review_errors_div" : "off"}>
                    <p className="errors_div">{errors}</p>
                </div>
            </form>
            </div>
        </div>
    )
}

export default Login;