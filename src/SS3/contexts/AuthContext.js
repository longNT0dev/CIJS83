import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext()


export default function AuthProvider({ children }) {
    const [user, setUser] = useState({
        isLoggedIn: true,
        id: ''
    })


    // useEffect(() => {
    //     // Check localStorage xem đã đăng nhập chưa 
    //     setUser({
    //         isLoggedIn: true,
    //         id: 1
    //     })
    // }, [])

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}

