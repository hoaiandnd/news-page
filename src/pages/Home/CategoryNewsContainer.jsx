import CategoryNews from '@/components/CategoryNews'
import MockApi from '@/mocks/MockApi'
import { useEffect, useState } from 'react'

function CategoryNewsContainer() {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    MockApi.getCategoriesAndRelatedNews().then(categories => {
      setCategories(categories)
    })
  })
  return (
    <div className='cat-news'>
      <div className='row'>
        {categories?.map(category => (
          <CategoryNews key={category.id} category={category} />
        ))}
      </div>
    </div>
  )
}

export default CategoryNewsContainer
