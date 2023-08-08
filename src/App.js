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
import Layout from './SS3/shared/Layout/Layout'
import Test from './Test/Test'
import CustomDatePicker from './DatePicker/CustomDatePicker'
import Table1 from './Table/Table'
import FirstScreen from './PopupConfirm/PopupConfirm'


function App() {

  return (
    // <AuthProvider>
    <div>
      <Routes>
        <Route path="/" element={<FirstScreen />
        }></Route>
        {/* <Route path="/:chatId" element={<ProtectedRoute>
          <SS3></SS3>
        </ProtectedRoute>}></Route> */}
        {/* <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route> */}
      </Routes>
    </div>
    // </AuthProvider>
  )
}

export default App