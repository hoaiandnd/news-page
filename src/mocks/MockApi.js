import mockNews from './news.mock.json'
import mockCategories from './category.mock.json'
class MockApi {
  /**
   *
   * @param {number} limit
   */
  static getNews(offset = 0, limit = 10) {
    return Promise.resolve(mockNews.slice(offset, limit))
  }
  static getCategoriesAndRelatedNews() {
    return Promise.resolve(mockCategories.map(cat => (
      {
        ...cat,
        newsList: mockNews.filter(news => news.categoryId === cat.id)
      }
    )))
  }
}

export default MockApi
