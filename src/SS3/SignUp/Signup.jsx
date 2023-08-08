import React, { useState } from 'react'

function Signup() {

    const isEmpty = (value) => {
        if (!value) {
            return true
        }

        if (Array.isArray(value) && value.length === 0) {
            return true
        }

        if (typeof value === 'object' && Object.keys(value).length === 0) {
            return true
        }


        return false
    }


    const hasMinLength = (value, minLength) => {
        if ((typeof value === 'string' || Array.isArray(value)) && value.length >= minLength) {
            return true
        }

        return false
    }

    const [info, setInfo] = useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState({
        // email || password
        type: '',
        message: ''
    })

    const handleInputChange = (e) => {
        setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }


    const checkUserExist = async () => {
        let res = await fetch("https://64565c532e41ccf1691ad14d.mockapi.io/users")
        let result = await res.json()

        for(let el of result) {
            console.log(el)
        }
    }

    const handleSignup = async () => {
        try {

            checkUserExist()

            // Check rỗng 
            // if (!info.email) {
            //     setError({
            //         type: 'email',
            //         message: 'Email is required'
            //     })
            // }

            // if (!info.password) {
            //     setError({
            //         type: 'password',
            //         message: 'Password is required'
            //     })
            // }

            if (isEmpty(info.email)) {
                setError({
                    type: 'email',
                    message: 'Email is required'
                })

                return
            }

            if (isEmpty(info.password)) {
                setError({
                    type: 'password',
                    message: 'Password is required'
                })

                return
            }

            const minLength = 8
            if (!hasMinLength(info.password, minLength)) {
                setError({
                    type: 'password',
                    message: `Password must be at least ${minLength} characters`
                })

                return
            }
            // for (let key in info) {
            //     if (isEmpty(info[key])) {
            //         setError({
            //             type: key,
            //             message: `${key} is required`
            //         })
            //     }
            // }

            await fetch("https://64565c532e41ccf1691ad14d.mockapi.io/users", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(info)
            })


            setInfo({ email: '', password: '' })
        } catch (err) {
            // Xử lý lỗi 
        }

    }

    return (
        <div>
            {/* <div>
                <input type="email" value={info.email} name="email" placeholder="Enter your email" onChange={handleInputChange} /><br />
                <span style={{ color: 'red' }}>{error.type === 'email' && error.message}</span>
            </div>

            <div>
                <input type="password" value={info.password} name="password" placeholder="Enter your password" onChange={handleInputChange} /><br />
                <span style={{ color: 'red' }}>{error.type === 'password' && error.message}</span>
            </div>
            <button onClick={handleSignup}>Sign up</button> */}
            <iframe src="https://motphimtv.me/xem-phim/ho-tam-tap-1-11243_133485.html" frameborder="0"></iframe>
        </div>
    )
}

export default Signup