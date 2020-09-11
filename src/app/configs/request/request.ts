import axios from 'axios';
import { BASE_URL } from '../../assets/string';

export const request = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
