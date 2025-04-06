import { Outlet } from 'react-router-dom'
import './DefaultLayout.css'
import Footer from './Footer'
import Header from './Header'
import NavBar from './NavBar'
import TopBar from './TopBar'

function DefaultLayout() {
  return (
    <>
      <TopBar />
      <Header />
      <NavBar />
      <div className='container'>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default DefaultLayout
