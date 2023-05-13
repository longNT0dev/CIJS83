import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

function ProtectedRoute() {

    // Kiểm tra người dùng đã đăng nhập hay chưa 
    const { user, setUser} = useContext(AuthContext)


    console.log(user, setUser)

    // if(!user.isLoggedIn) {

    // }

    return (
        <div></div>
    )
}

export default ProtectedRoute