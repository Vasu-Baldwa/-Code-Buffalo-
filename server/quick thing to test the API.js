const { RESTDataSource } = require('apollo-datasource-rest');

class BoredAPI extends RESTDataSource {
      constructor() {
          super();
          this.baseURL = 'http://www.boredapi.com/';
      }

      async getBored(key) {
          return this.get(`api/activity?key=${key}`);
      }

}
