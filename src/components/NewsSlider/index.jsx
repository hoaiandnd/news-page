import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true
}

/**
 * @param {{newsList: {id: string | number; image: string; title: string}[]}} param0
 */
function NewsSlider({ newsList }) {
  return (
    <>
      <div className='col-md-6 tn-left'>
        {/* <div className='row tn-slider'> */}
        <Slider {...settings}>
          {newsList?.map(news => (
            <div key={news?.id}>
              <div className='tn-img'>
                <img src={news?.image} />
                <div className='tn-title'>
                  <a href=''>{news?.title}</a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        {/* </div> */}
      </div>
    </>
  )
}

export default NewsSlider
