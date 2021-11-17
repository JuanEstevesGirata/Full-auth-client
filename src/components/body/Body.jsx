import React from 'react'
import {Routes , Route} from 'react-router-dom'
import { useSelector } from 'react-redux'
import ActivationEmail from './auth/ActivationEmail'
import Login from './auth/Login'
import Register from './auth/Register'
import Landing from './Landing'
import ForgotPassword from './auth/ForgotPassword'
import NotFound from '../utils/NotFound/NotFound'
import Profile from './profile/Profile'
import ResetPassword from './auth/ResetPassword'

const Body = () => {
    const auth = useSelector(state => state.auth)
    const {isLogged} = auth
    
    return (
        <section>
            <Routes>
                <Route path= '/login' element={isLogged ? <NotFound /> : <Login/>} exact/>
                <Route path= '/register' element={<Register/>} exact/>
                <Route path= '/forgot_password' element={<ForgotPassword/>} exact/>
                <Route path="/user/reset/:token" element={isLogged ? <NotFound /> : <ResetPassword/> } exact />

                <Route path= '/user/activate/:activation_token' element={<ActivationEmail/>} exact/>
                <Route path= '/landing' element={<Landing/>} exact/>
                <Route path="/profile" element={isLogged ? <Profile/> : <NotFound />} exact />
            </Routes>
        </section>
    )
}

export default Body
