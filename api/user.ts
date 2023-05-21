import Http from '@/utils/http'

export default new class user extends Http {

  /**
   * 获取热门文章
   */
  public getTest() {
    return this.get('/test')
  }

  /**
   * 获取热门文章
   */
  public sign(body:any) {
    return this.postForm('/sign',body)
  }
}
