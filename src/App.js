import React from 'react'
import {Routes , Route} from 'react-router-dom'
import { useSelector } from 'react-redux'

import Header from './components/header/Header'
import NotFound from './components/notFound/NotFound'
import Login from './components/body/auth/Login'
import Register from './components/body/auth/Register'
import ForgotPassword from './components/body/auth/ForgotPassword'
import ResetPassword from './components/body/auth/ResetPassword'
import ActivationEmail from './components/body/auth/ActivationEmail'
import Profile from './components/body/profile/Profile'
import EditUser from './components/body/profile/EditUser'
import Landing from './components/body/Landing'



function App() {
  const auth = useSelector(state => state.auth)
  const {isLogged, isAdmin} = auth

  return (
    <>
      <Header/>
      <Routes>
        <Route path= '/login' element={isLogged ? <NotFound /> : <Login/>} exact/>
        <Route path= '/register' element={<Register/>} exact/>

        <Route path= '/forgot_password' element={<ForgotPassword/>} exact/>
        <Route path="/user/reset/:token" element={isLogged ? <NotFound /> : <ResetPassword/> } exact />

        <Route path= '/user/activate/:activation_token' element={<ActivationEmail/>} exact/>
                
        <Route path="/profile" element={isLogged ? <Profile/> : <NotFound />} exact />
        <Route path="/edit_user/:id" element={isAdmin ? <EditUser/> : <NotFound />} exact />
        <Route path= '/create_user' element={<Register/>} exact/>

        <Route path= '/landing' element={<Landing/>} exact/>

      </Routes>
        
    </>
  );
}

export default App;
