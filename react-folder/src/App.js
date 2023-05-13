import React from 'react'
import SS2 from './SS2/SS2'
import SS3 from './SS3/SS3'
import SS4 from './SS4/SS4'
import Countdown from './SS7DayThay/Countdown'
import { Route, Routes } from 'react-router-dom'
import Signup from './SS3/SignUp/Signup'
import Login from './SS3/Login/Login'
import AuthProvider from './SS3/contexts/AuthContext'
import ProtectedRoute from './SS3/shared/ProtectedRoute/ProtectedRoute'


function App() {
  return (
    <AuthProvider>
      <div>
        {/* <SS3/> */}
        {/* <SS4/> */}
        <Routes>
          <Route path="/" element={<ProtectedRoute>
            <SS3 />
          </ProtectedRoute>}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </div>
    </AuthProvider>

  )
}

export default App