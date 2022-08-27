import React, { useState } from "react";

function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([])

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
                response.json().then((response) => console.log(response))
            } else {
                response.json().then((errors) => setErrors(errors.errors))
            }
        });
        setUsername('')
        setPassword('')
    }

    return (
        <div className="login_window">
            <button className="exit"></button>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    autoComplete="off"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                ></input>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    autoComplete="off"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                ></input>
                <button type="submit" id="proceed_button">Proceed</button>
                {errors.length > 0 && (
                    <div>
                        <p>{errors}</p>
                    </div>
                )}
                <p id="account">Account Requisition</p>
            </form>
        </div>
    )
}

export default Login;