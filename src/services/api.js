import axios from 'axios';

const BACKEND_URL = 'https://www.cbr-xml-daily.ru';
const REQUEST_TIMEOUT = 5000;

const api = axios.create({
  baseURL: BACKEND_URL,
  timeout: REQUEST_TIMEOUT,
});

export default api;