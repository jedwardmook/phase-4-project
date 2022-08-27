import React, { useState } from "react";

function Login(){
    const [username, setUsername] = useState("");

    return (
        <div>
            <form>
                <label for="username">Username</label>
                <input
                    type="text"
                    id="username"
                    autoComplete="off"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                ></input>
            </form>
        </div>
    )
}

export default Login;