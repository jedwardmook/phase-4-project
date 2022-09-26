import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import user_icon from './images/user_icon.jpg'

function Signup({setCurrentUser}){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [errors, setErrors] = useState([])

    let navigate = useNavigate()

    const handleErrors = () => {
        setErrors([])
    }

    function handleSubmit(e){
        e.preventDefault();
        fetch("/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password,
                password_confirmation: passwordConfirmation,
                photo: {user_icon},
                name: null,
                bio: null,
                location: null,
                allegiance: null,
            }),
        }).then((response) => {
            if (response.ok) {
                response.json().then((user) => {
                    setCurrentUser(user);
                    navigate(`/users/${user.id}/profile`);
                    });
            } else {
                response.json().then((errors) => setErrors(errors.errors));
            }
        });
        setUsername("")
        setPassword("")
        setPasswordConfirmation("")
    }

    return (
        <div className="login_window">
            <div className="form_div_signup">
                <Link to="/"><button className="exit">X</button></Link>
                <h4 className="form_header">Sign up</h4>
                <hr/>
                <h3 className="form_welcome">Welcome to Heirbnb</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="form_input_top"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                ></input>
                <input
                    type="password"
                    className="form_input_middle"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                ></input>
                <input
                    type="password"
                    className="form_input_bottom"
                    placeholder="Confirm password"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                ></input>
                <button type="submit" className="proceed_button">Proceed</button>
                <p className="note">Return to <Link to="/login">Login</Link>.</p>
            </form>          
            {errors.length > 0 && (
                <div onClick={handleErrors} className="errors_div">
                    <p className="errors">{errors}</p>
                </div>
            )}
            </div>
        </div>
    )
}

export default Signup;