import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 30000,
  withCredentials: false,
});

export const getJobs = () => {
  return api.get(`/api/jobs`);
};
