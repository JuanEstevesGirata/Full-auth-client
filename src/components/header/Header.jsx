import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import UserLink from './UserLink'


function Header() {
    const auth = useSelector(state => state.auth)

    const {user, isLogged} = auth

  
    const handleLogout = async () => {
        try {
            // await axios.get('/user/logout')
            localStorage.removeItem('firstLogin')
            localStorage.removeItem('loggedAgoraUser')
            window.location.href = "/";
        } catch (err) {
            window.location.href = "/";
        }
    }

    const transForm = {
        transform: isLogged ? "translateY(-5px)" : 0
    }

    return (
        <header>
            <div className="logo">
                <h1><Link to="/">Full Auth</Link></h1>
            </div>

            <ul style={transForm}>
                {
                    isLogged
                    ? <UserLink user = {user} handleLogout = {handleLogout}/>
                    :<li><Link to="/login"><i className="fas fa-user"></i> Sign in</Link></li>
                }
                
            </ul>
        </header>
    )
}

export default Header