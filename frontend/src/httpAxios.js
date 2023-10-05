import axios from "axios";
const httpAxios = axios.create({
  baseURL: 'http://localhost/phandinhhieu_2121110296/public/api/',
  timeout: 12000,
  headers: {'X-Custom-Header': 'foobar'}
});
export default httpAxios;