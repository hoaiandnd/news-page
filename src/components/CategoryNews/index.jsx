import Slider from 'react-slick'

const settings = {
  autoplay: false,
  infinite: true,
  dots: false,
  slidesToShow: 2,
  slidesToScroll: 1
}
/**
 *
 * @param {{category: {id: string | number; title: string, newsList:  {id: string | number; image: string; title: string}[]}}}} param0
 * @returns
 */
function CategoryNews({ category }) {
  if (category.newsList.length < 2) return null
  return (
    <>
      <div className='col-md-6'>
        <h2>{category.title}</h2>
        <Slider {...settings}>
          {category.newsList.map(news => (
            <div key={news.id}>
              <div className='cn-img'>
                <img src={news.image} />
                <div className='cn-title'>
                  <a href=''>{news.title}</a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  )
}

export default CategoryNews
