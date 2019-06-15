const { RESTDataSource } = require('apollo-datasource-rest');


class BoredAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://www.boredapi.com/api/';
    }

    async getEvent() {
        return this.get('activity');
    }

    async getEventP(price) {
        const result = await this.get('activity', {
            price
        });

        return result;
    }
};