import mockNews from './news.mock.json'
import mockCategories from './category.mock.json'
class MockApi {
  static resolve(value) {
    return Promise.resolve(value)
  }
  static getCategories() {
    return MockApi.resolve(mockCategories)
  }
  /**
   *
   * @param {number} limit
   */
  static getNews(offset = 0, limit = 10) {
    return MockApi.resolve(mockNews.slice(offset, limit))
  }
  static getNewsById(id) {
    return MockApi.resolve(mockNews.find(news => news.id === +id))
  }
  static getCategoriesAndRelatedNews() {
    return MockApi.resolve(
      mockCategories.map(cat => ({
        ...cat,
        newsList: mockNews.filter(news => news.categoryId === cat.id)
      }))
    )
  }
  static getCategoryAndRelatedNews(id) {
    const category = mockCategories.find(cat => cat.id === +id)
    if (!category) {
      return MockApi.resolve(null)
    }
    return MockApi.resolve({ ...category, newsList: mockNews.filter(news => news.categoryId === category.id) })
  }
}

export default MockApi
