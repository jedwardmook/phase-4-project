import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login({setCurrentUser}){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([])

    let navigate = useNavigate()

    const handleErrors = () => {
        setErrors([])
    }
    
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
                })
            } else {
                response.json().then((errors) => setErrors(errors))
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
                {errors.length > 0 && (
                    <div onClick={handleErrors} className="errors_div">
                        <p classname="errors">{errors.errors}</p>
                    </div>
                )}
            </form>
            </div>
        </div>
    )
}

export default Login;