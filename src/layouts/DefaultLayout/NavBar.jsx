import MockApi from '@/mocks/MockApi'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    MockApi.getCategories().then(setCategories)
  }, [])
  console.log(categories)
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
                  Trang chủ
                </NavLink>
                <div className='nav-item dropdown'>
                  <a href='#' className='nav-link dropdown-toggle' data-toggle='dropdown'>
                    Danh mục
                  </a>
                  <div className='dropdown-menu'>
                    {categories.map(category => (
                      <NavLink
                        key={category.id}
                        to={`/category/${category.id}`}
                        className={({ isActive }) => (isActive ? 'dropdown-item active' : 'dropdown-item')}
                      >
                        {category.title}
                      </NavLink>
                    ))}
                  </div>
                </div>
                <a href='contact.html' className='nav-item nav-link'>
                  Liên Hệ Với Chúng Tôi
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
