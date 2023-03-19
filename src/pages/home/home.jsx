import './home.css'
import { Link, useNavigate } from "react-router-dom";

function Home() {

  // const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  const navigate = useNavigate()
  const logout = () => {
    navigate('/login')
    localStorage.setItem('isLoggedIn', 'false');
  }

  return (
    <div className='main'>
      <Link to={'/login'}>Login</Link>
      <Link to={'/register'}>Register</Link>
      <button onClick={logout}>Выйти</button>
    </div>
  )
}

export default Home