import NewsSlider from '@/components/NewsSlider'
import MockApi from '@/mocks/MockApi'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const sliderImageCount = 2
const restImageCount = 6

function TopNews() {
  const [newsList, setNewsList] = useState([])
  useEffect(() => {
    MockApi.getNews().then(newsList => setNewsList(newsList))
  }, [])
  const sliderNewsList = newsList.slice(0, sliderImageCount)
  const restNewsList = newsList.slice(sliderImageCount, restImageCount)
  return (
    <>
      <div className='top-news'>
        <div className='row'>
          <NewsSlider newsList={sliderNewsList} />
          <div className='col-md-6 tn-right'>
            <div className='row'>
              {restNewsList?.map(news => (
                <div key={news.id} className='col-md-6'>
                  <div className='tn-img'>
                    <img src={news.image} />
                    <div className='tn-title'>
                      <Link to={`/news/${news.id}`}>{news.title}</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TopNews
