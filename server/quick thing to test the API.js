const { RESTDataSource } = require('apollo-datasource-rest');

class BoredAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://www.boredapi.com/api/activity?key=';
  }

  async getBored(key) {
    return this.get(`${key}`);
  }

}
