import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { Navigate } from 'react-router-dom'

function ProtectedRoute({children}) {

    // Kiểm tra người dùng đã đăng nhập hay chưa 
    const { user, setUser} = useContext(AuthContext)


    console.log(user, setUser)

    if(!user.isLoggedIn) {
        return <Navigate to="/login" replace />
    }

    return children

}

export default ProtectedRoute