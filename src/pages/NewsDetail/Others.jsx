import MockApi from '@/mocks/MockApi'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Others({ categoryId }) {
  const [others, setOthers] = useState()
  useEffect(() => {
    MockApi.getCategoryAndRelatedNews(categoryId).then(data => setOthers(data))
  }, [categoryId])
  return (
    <>
      <div className='col-lg-4'>
        <div className='sidebar'>
          <div className='sidebar-widget'>
            <h2 className='sw-title'>Trong danh mục này</h2>
            <div className='news-list'>
              {others?.newsList?.map(news => (
                <div key={news.id} className='nl-item'>
                  <div className='nl-img'>
                    <img src={news.image} />
                  </div>
                  <div className='nl-title'>
                    <Link to={`/news/${news.id}`}>{news.title}</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* <div className='sidebar-widget'>
            <div className='image'>
              <a href='https://htmlcodex.com'>
                <img src='img/ads-2.jpg' alt='Image' />
              </a>
            </div>
          </div>

          <div className='sidebar-widget'>
            <div className='tab-news'>
              <ul className='nav nav-pills nav-justified'>
                <li className='nav-item'>
                  <a className='nav-link active' data-toggle='pill' href='#featured'>
                    Featured
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' data-toggle='pill' href='#popular'>
                    Popular
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' data-toggle='pill' href='#latest'>
                    Latest
                  </a>
                </li>
              </ul>

              <div className='tab-content'>
                <div id='featured' className='container tab-pane active'>
                  <div className='tn-news'>
                    <div className='tn-img'>
                      <img src='img/news-350x223-1.jpg' />
                    </div>
                    <div className='tn-title'>
                      <a href=''>Lorem ipsum dolor sit amet consec adipis elit</a>
                    </div>
                  </div>
                  <div className='tn-news'>
                    <div className='tn-img'>
                      <img src='img/news-350x223-2.jpg' />
                    </div>
                    <div className='tn-title'>
                      <a href=''>Lorem ipsum dolor sit amet consec adipis elit</a>
                    </div>
                  </div>
                  <div className='tn-news'>
                    <div className='tn-img'>
                      <img src='img/news-350x223-3.jpg' />
                    </div>
                    <div className='tn-title'>
                      <a href=''>Lorem ipsum dolor sit amet consec adipis elit</a>
                    </div>
                  </div>
                  <div className='tn-news'>
                    <div className='tn-img'>
                      <img src='img/news-350x223-4.jpg' />
                    </div>
                    <div className='tn-title'>
                      <a href=''>Lorem ipsum dolor sit amet consec adipis elit</a>
                    </div>
                  </div>
                  <div className='tn-news'>
                    <div className='tn-img'>
                      <img src='img/news-350x223-5.jpg' />
                    </div>
                    <div className='tn-title'>
                      <a href=''>Lorem ipsum dolor sit amet consec adipis elit</a>
                    </div>
                  </div>
                </div>
                <div id='popular' className='container tab-pane fade'>
                  <div className='tn-news'>
                    <div className='tn-img'>
                      <img src='img/news-350x223-4.jpg' />
                    </div>
                    <div className='tn-title'>
                      <a href=''>Lorem ipsum dolor sit amet consec adipis elit</a>
                    </div>
                  </div>
                  <div className='tn-news'>
                    <div className='tn-img'>
                      <img src='img/news-350x223-3.jpg' />
                    </div>
                    <div className='tn-title'>
                      <a href=''>Lorem ipsum dolor sit amet consec adipis elit</a>
                    </div>
                  </div>
                  <div className='tn-news'>
                    <div className='tn-img'>
                      <img src='img/news-350x223-2.jpg' />
                    </div>
                    <div className='tn-title'>
                      <a href=''>Lorem ipsum dolor sit amet consec adipis elit</a>
                    </div>
                  </div>
                  <div className='tn-news'>
                    <div className='tn-img'>
                      <img src='img/news-350x223-1.jpg' />
                    </div>
                    <div className='tn-title'>
                      <a href=''>Lorem ipsum dolor sit amet consec adipis elit</a>
                    </div>
                  </div>
                  <div className='tn-news'>
                    <div className='tn-img'>
                      <img src='img/news-350x223-2.jpg' />
                    </div>
                    <div className='tn-title'>
                      <a href=''>Lorem ipsum dolor sit amet consec adipis elit</a>
                    </div>
                  </div>
                </div>
                <div id='latest' className='container tab-pane fade'>
                  <div className='tn-news'>
                    <div className='tn-img'>
                      <img src='img/news-350x223-3.jpg' />
                    </div>
                    <div className='tn-title'>
                      <a href=''>Lorem ipsum dolor sit amet consec adipis elit</a>
                    </div>
                  </div>
                  <div className='tn-news'>
                    <div className='tn-img'>
                      <img src='img/news-350x223-4.jpg' />
                    </div>
                    <div className='tn-title'>
                      <a href=''>Lorem ipsum dolor sit amet consec adipis elit</a>
                    </div>
                  </div>
                  <div className='tn-news'>
                    <div className='tn-img'>
                      <img src='img/news-350x223-5.jpg' />
                    </div>
                    <div className='tn-title'>
                      <a href=''>Lorem ipsum dolor sit amet consec adipis elit</a>
                    </div>
                  </div>
                  <div className='tn-news'>
                    <div className='tn-img'>
                      <img src='img/news-350x223-4.jpg' />
                    </div>
                    <div className='tn-title'>
                      <a href=''>Lorem ipsum dolor sit amet consec adipis elit</a>
                    </div>
                  </div>
                  <div className='tn-news'>
                    <div className='tn-img'>
                      <img src='img/news-350x223-3.jpg' />
                    </div>
                    <div className='tn-title'>
                      <a href=''>Lorem ipsum dolor sit amet consec adipis elit</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='sidebar-widget'>
            <div className='image'>
              <a href='https://htmlcodex.com'>
                <img src='img/ads-2.jpg' alt='Image' />
              </a>
            </div>
          </div>

          <div className='sidebar-widget'>
            <h2 className='sw-title'>News Category</h2>
            <div className='category'>
              <ul>
                <li>
                  <a href=''>National</a>
                  <span>(98)</span>
                </li>
                <li>
                  <a href=''>International</a>
                  <span>(87)</span>
                </li>
                <li>
                  <a href=''>Economics</a>
                  <span>(76)</span>
                </li>
                <li>
                  <a href=''>Politics</a>
                  <span>(65)</span>
                </li>
                <li>
                  <a href=''>Lifestyle</a>
                  <span>(54)</span>
                </li>
                <li>
                  <a href=''>Technology</a>
                  <span>(43)</span>
                </li>
                <li>
                  <a href=''>Trades</a>
                  <span>(32)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className='sidebar-widget'>
            <div className='image'>
              <a href='https://htmlcodex.com'>
                <img src='img/ads-2.jpg' alt='Image' />
              </a>
            </div>
          </div>

          <div className='sidebar-widget'>
            <h2 className='sw-title'>Tags Cloud</h2>
            <div className='tags'>
              <a href=''>National</a>
              <a href=''>International</a>
              <a href=''>Economics</a>
              <a href=''>Politics</a>
              <a href=''>Lifestyle</a>
              <a href=''>Technology</a>
              <a href=''>Trades</a>
            </div>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default Others
