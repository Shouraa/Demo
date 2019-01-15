import axios from "axios";

const instance = axios.create({
  baseURL: "https://integrify-demo.firebaseio.com/"
});

export default instance;
