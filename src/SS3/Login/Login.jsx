import React, { useState } from 'react'

function Login() {
    const [info, setInfo] = useState({
        email: '',
        password: ''
    })

    const handleInputChange = (e) => {
        setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleLogin = () => {
        // Mặc định vào đây là thành công
        localStorage.token = Date.now()
    }
    // accessToken, refreshToken, stale token 

    return (
        <div>
            <input type="email" name="email" placeholder="Enter your email" onChange={handleInputChange} /><br />
            <input type="password" name="password" placeholder="Enter your password" onChange={handleInputChange} /><br />
            <button onClick={handleLogin}>Sign up</button>
        </div>
    )
}

export default Login