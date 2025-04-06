function TopBar() {
  return (
    <>
      <div className='top-bar'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='tb-contact'>
                <p>
                  <i className='fas fa-envelope' />
                  info@mail.com
                </p>
                <p>
                  <i className='fas fa-phone-alt' />
                  +012 345 6789
                </p>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='tb-menu'>
                <a href=''>About</a>
                <a href=''>Privacy</a>
                <a href=''>Terms</a>
                <a href=''>Contact</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TopBar
