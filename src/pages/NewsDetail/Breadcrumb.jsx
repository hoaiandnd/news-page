function Breadscrumb() {
  return (
    <>
      {/* Breadcrumb Start */}
      <div className='breadcrumb-wrap'>
        <div className='container'>
          <ul className='breadcrumb'>
            <li className='breadcrumb-item'>
              <a href='#'>Home</a>
            </li>
            <li className='breadcrumb-item'>
              <a href='#'>News</a>
            </li>
            <li className='breadcrumb-item active'>Chi tiết tin tức</li>
          </ul>
        </div>
      </div>
      {/* Breadcrumb End */}
    </>
  )
}

export default Breadscrumb
