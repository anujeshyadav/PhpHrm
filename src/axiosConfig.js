import axios from "axios";

const instance = axios.create({
  // baseURL: "https://node.rupioo.com/",
  baseURL: "https://jupitech.org/demo/demo/api/ApiCommonController/",
  // baseURL: "https://customer-node.rupioo.com/",
});

export default instance;
