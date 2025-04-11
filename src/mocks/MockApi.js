import mockNews from './news.mock.json'
import mockCategories from './category.mock.json'
class MockApi {
  static resolve(value) {
    return Promise.resolve(value)
  }
  /**
   *
   * @param {number} limit
   */
  static getNews(offset = 0, limit = 10) {
    return MockApi.resolve(mockNews.slice(offset, limit))
  }
  static getCategoriesAndRelatedNews() {
    return MockApi.resolve(
      mockCategories.map(cat => ({
        ...cat,
        newsList: mockNews.filter(news => news.categoryId === cat.id)
      }))
    )
  }
  static getCategories() {
    return MockApi.resolve(mockCategories)
  }
}

export default MockApi
