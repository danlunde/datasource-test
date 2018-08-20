// myapi.js
import { RESTDataSource } from "apollo-datasource-rest";

export default class extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://example.com";
  }

  hello() {
    return "Hello World!";
  }
}
