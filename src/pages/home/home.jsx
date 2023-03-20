import './home.css'
import { Link, useNavigate, Navigate } from "react-router-dom";

function Home() {

  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  const navigate = useNavigate()
  const logout = () => {
    navigate('/login')
    localStorage.setItem('isLoggedIn', 'false');
  }
  if(isLoggedIn){
    return (
      <div className='main'>
        <Link to={'/login'}>Login</Link>
        <Link to={'/register'}>Register</Link>
        <button onClick={logout}>Выйти</button>
      </div>
    )
  } else {
    return (
      <Navigate to='/login' />
    )
  }
}

export default Home