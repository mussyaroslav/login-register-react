import { Navigate } from 'react-router-dom'

function Basket() {

  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  if(isLoggedIn) {
    return (
      <div>Корзина</div>
    )
  } else {
    return (
      <Navigate to='/login' />
    )
  }
}

export default Basket