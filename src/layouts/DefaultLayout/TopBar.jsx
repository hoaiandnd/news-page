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
                  trantrongnhan2706@mail.com
                </p>
                <p>
                  <i className='fas fa-phone-alt' />
                  +03272320288
                </p>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='tb-menu'>
                <a href=''>Trang Chủ</a>
                <a href=''>Quyền Riêng Tư</a>
                <a href=''>Diều Khoản</a>
                <a href=''>Liên Hệ</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TopBar
