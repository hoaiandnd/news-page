import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <>
      <div className='nav-bar'>
        <div className='container'>
          <nav className='navbar navbar-expand-md bg-dark navbar-dark'>
            <a href='#' className='navbar-brand'>
              MENU
            </a>
            <button type='button' className='navbar-toggler' data-toggle='collapse' data-target='#navbarCollapse'>
              <span className='navbar-toggler-icon' />
            </button>

            <div className='collapse navbar-collapse justify-content-between' id='navbarCollapse'>
              <div className='navbar-nav mr-auto'>
                <NavLink
                  to={'/'}
                  className={({ isActive }) => (isActive ? 'nav-item nav-link active' : 'nav-item nav-link')}
                >
                  Home
                </NavLink>
                <div className='nav-item dropdown'>
                  <a href='#' className='nav-link dropdown-toggle' data-toggle='dropdown'>
                    Dropdown
                  </a>
                  <div className='dropdown-menu'>
                    <a href='#' className='dropdown-item'>
                      Sub Item 1
                    </a>
                    <a href='#' className='dropdown-item'>
                      Sub Item 2
                    </a>
                  </div>
                </div>
                <a href='single-page.html' className='nav-item nav-link'>
                  Single Page
                </a>
                <a href='contact.html' className='nav-item nav-link'>
                  Contact Us
                </a>
              </div>
              <div className='social ml-auto'>
                <a href=''>
                  <i className='fab fa-twitter' />
                </a>
                <a href=''>
                  <i className='fab fa-facebook-f' />
                </a>
                <a href=''>
                  <i className='fab fa-linkedin-in' />
                </a>
                <a href=''>
                  <i className='fab fa-instagram' />
                </a>
                <a href=''>
                  <i className='fab fa-youtube' />
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

export default NavBar
