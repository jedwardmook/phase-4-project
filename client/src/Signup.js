import React, { useState } from "react";

function Signup(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [errors, setErrors] = useState([])

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
            }),
        }).then((response) => {
            if (response.ok) {
                response.json().then((response) => console.log(response));
            } else {
                response.json().then((errors) => setErrors(errors.errors));
            }
        });
        setUsername("")
        setPassword("")
        setPasswordConfirmation("")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                ></input>
                <label htmlFor="password">Password</label>
                <input
                    type="text"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                ></input>
                <label htmlFor="password_confirmation">Confirm Password</label>
                <input
                    type="text"
                    id="password_confirmation"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                ></input>
                <button type="submit" id="proceed_button">Proceed</button>
                <p id="account">Return to Login</p>
            </form>          
            {errors.length > 0 && (
                <div>
                    <p>{errors}</p>
                </div>
            )}
        </div>
    )
}

export default Signup;