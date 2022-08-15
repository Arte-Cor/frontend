import axios from 'axios';

export const apiService = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});
