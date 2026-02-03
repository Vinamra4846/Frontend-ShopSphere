
import axios from 'axios';
const DEPLOYED_URL = 'https://shop-sphere-backend-q13s.onrender.com'

export const API_BASE_URL = process.env.REACT_APP_API_URL || DEPLOYED_URL

const api = axios.create({
  baseURL: API_BASE_URL,
});

const token = localStorage.getItem('jwt');

api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

api.defaults.headers.post['Content-Type'] = 'application/json';

export default api;
