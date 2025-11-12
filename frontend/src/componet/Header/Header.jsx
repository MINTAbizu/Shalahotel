import React from 'react'
import { useStateValue } from '../../Staateprovider/Stateprovider'
import '../Header/Header.css'


import { Link } from 'react-router-dom'
import { useAuth } from '../../Context/Authcontext';
function Header() {
    const [{ basket }] = useStateValue()
     const { user, loading } = useAuth();
      const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    // optionally redirect to home page
  };
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container-fluid d-flex align-items-center">
          <a className="navbar-brand d-flex align-items-center" href="/">
            <img
              src="https://shalahotel.com/wp-content/uploads/2022/03/cropped-favicon-1-32x32.png"
              // alt="Shala Hotel logo"
              width="32"
              height="32"
              className="me-2"
            />
            
          </a>
          <span className="rounded logotitile">  <large>ሻላ</large>  </span>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse d-lg-flex justify-content-end" id="mainNav">
            <ul className="navbar-nav d-flex flex-column flex-lg-row gap-2 gap-lg-3 ms-lg-3 mb-2 mb-lg-0 align-items-lg-center">
              <li className="nav-item">
                <Link className="nav-link" to={'/'}>Home</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Rooms</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Facilities</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>

              <Link to={'/checkoutproduct'}> 
                             <span className="cart-count nav-item">
                              <i className="bi bi-cart-fill"></i>
                              <span className='basketcount '>{basket.length}</span>
                              </span>

              </Link>
                  {/* <FaShoppingCart />  */}
              <li className="nav-item d-flex gap-2 ms-lg-3 mt-2 mt-lg-0">
                {/* <button className="btn btn-outline-primary btn-sm">Login</button> */}
                {/* <Link to={'/Login'}><button className="btn btn-primary btn-sm">Login</button></Link> */}

                
                 <nav>
        {user ? (
          <>
            <span className='color:danger' style={{color:'orange',fontSize:'18px' ,backgroundColor:'black'}}>Welcome,: {user.name}</span>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link to={'/Login'}>Login</Link>
        )}
               </nav>
               
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
