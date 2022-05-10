import axios from "axios";

const baseURL = 'http://localhost:8080'

export const request = () => {
  const customAxios = axios.create({
    baseURL, 
    credentials: "include",
  });

  return customAxios
}