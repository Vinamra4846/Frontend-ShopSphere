
import axios from 'axios';

export const API_BASE_URL = 'https://shop-sphere-backend-q13s.onrender.com'

const api = axios.create({
  baseURL: API_BASE_URL,
});

const token = localStorage.getItem('jwt');

api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

api.defaults.headers.post['Content-Type'] = 'application/json';

export default api;
