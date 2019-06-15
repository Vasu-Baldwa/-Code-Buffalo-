const mongoose = require ('mongoose');
const { RESTDataSource } = require('apollo-datasource-rest');

const Schema = mongoose.Schema;

const boredSchema = new Schema({
  activity: String,
  accessibility: Number,
  type: String,
  participants: Number,
  price: Number,
  link: String,
  key: Number
});

// talk to BoredAPI, may or may not work.
//const baseURL = `http://www.boredapi.com/`

class BoredAPI extends RESTDataSource {
      constructor() {
          super();
          this.baseURL = 'http://www.boredapi.com/';
      }
      async getBored(key) {
          return this.get(`api/activity?key=${key}`);
      }
}
