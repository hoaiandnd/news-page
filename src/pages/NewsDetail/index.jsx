import { useParams } from 'react-router-dom'
import Breadscrumb from './Breadcrumb'
import Others from './Others'
import RelatedNews from './RelatedNews'
import { useEffect, useState } from 'react'
import MockApi from '@/mocks/MockApi'

function NewsDetail() {
  const { id } = useParams()
  const [newsDetail, setNewsDetail] = useState()
  useEffect(() => {
    MockApi.getNewsById(id).then(newsDetail => setNewsDetail(newsDetail))
  }, [id])
  console.log(newsDetail)
  if (!newsDetail) {
    return <div className='container'>Loading...</div>
  }
  return (
    <>
      <Breadscrumb />
      <>
        {/* Single News Start*/}
        <div className='single-news'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-8'>
                <div className='sn-container'>
                  <div className='sn-img'>
                    <img src={newsDetail?.image} />
                  </div>
                  <div className='sn-content'>
                    <h1 className='sn-title'>{newsDetail?.title}</h1>
                    {newsDetail?.content}
                  </div>
                </div>
                <RelatedNews />
              </div>
              <Others categoryId={newsDetail.categoryId} />
            </div>
          </div>
        </div>
        {/* Single News End*/}
      </>
    </>
  )
}

export default NewsDetail
