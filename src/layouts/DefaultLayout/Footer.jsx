function Footer() {
  return (
    <>
      <>
        {/* Footer Start */}
        <div className='footer'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-3 col-md-6'>
                <div className='footer-widget'>
                  <h3 className='title'>Liên Hệ</h3>
                  <div className='contact-info'>
                    <p>
                      <i className='fa fa-map-marker' />
                      180 Cao Lỗ ,Phường 4, Quân 8,tp.Hồ Chí Minh 
                    </p>
                    <p>
                      <i className='fa fa-envelope' />
                      trantrongnhan2706@gmail.com
                    </p>
                    <p>
                      <i className='fa fa-phone' />
                      0327232028
                    </p>
                    <div className='social'>
                      <a href=' https://x.com/?lang=vi'>
                        <i className='fab fa-twitter' />
                      </a>
                      <a href='https://www.facebook.com/stories/102379145263129/?view_single=false'>
                        <i className='fab fa-facebook-f'  />
                        
                      </a>
                      <a href='https://www.linkedin.com/'>
                        <i className='fab fa-linkedin-in' />
                      </a>
                      <a href='https://www.instagram.com/'>
                        <i className='fab fa-instagram' />
                      </a>
                      <a href='https://www.youtube.com/'>
                        <i className='fab fa-youtube' />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-3 col-md-6'>
                <div className='footer-widget'>
                  <h3 className='title'>Liên Kết hữu ích</h3>
                  <ul>
                    <li>
                      <a href='#'>Sức khỏe</a>
                    </li>
                    <li>
                      <a href='#'>Thể thao </a>
                    </li>
                    <li>
                      <a href='#'>Pháp luật</a>
                    </li>
                    <li>
                      <a href='#'>Giao dục</a>
                    </li>
                    <li>
                      <a href='#'>Khoa học</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='col-lg-3 col-md-6'>
                <div className='footer-widget'>
                  <h3 className='title'>Liên Kết Nhanh </h3>
                  <ul>
                    <li>
                      <a href='#'>xe </a>
                    </li>
                    <li>
                      <a href='#'>du lịch</a>
                    </li>
                    <li>
                      <a href='#'>ý kiến</a>
                    </li>
                    <li>
                      <a href='#'>tâm sự</a>
                    </li>
                    <li>
                      <a href='#'>thư giãn</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='col-lg-3 col-md-6'>
                <div className='footer-widget'>
                  <h3 className='title'>Bản Tin</h3>
                  <div className='newsletter'>
                    <p>
                    Xã hội học taciti giai cấp thích hợp
                    </p>
                    <form>
                      <input className='form-control' type='email' placeholder='Nhập Email của bạn ở đây' />
                      <button className='btn'>Submit</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer End */}

        {/* Footer Menu Start */}
        <div className='footer-menu'>
          <div className='container'>
            <div className='f-menu'>
              <a href=''>điều khoản sử dụng</a>
              <a href=''>Chinh sách báo mât</a>
              <a href=''>Cookies</a>
              <a href=''>Trợ giúp về khả năng tiếp cận</a>
              <a href=''>Quan cáo với chúng tôi</a>
              <a href=''>Liên Hệ Với Chúng Tôi</a>
            </div>
          </div>
        </div>
        {/* Footer Menu End */}

        {/* Footer Bottom Start */}
        <div className='footer-bottom'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 copyright'>
                <p>
                  Trần Trọng Nhân
                </p>
              </div>

              <div className='col-md-6 template-by'>
                <p>
                  STU 
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Bottom End */}

        {/* Back to Top */}
        <a href='#' className='back-to-top'>
          <i className='fa fa-chevron-up' />
        </a>
      </>
    </>
  )
}

export default Footer
