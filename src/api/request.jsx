import axios from "axios";

// const deploy_env = process.env.REACT_APP_DEPLOYMENT_ENV
// const baseURL = 'http://localhost:8080'
// const baseURL = 'https://codanai.com'
const baseURL = 'https://api.sistemaalex.com'
const dev = process.env.REACT_APP_DEPLOYMENT_ENV

/**
 * It returns an axios instance with a baseURL of the API
 * @returns An axios instance with a baseURL of the baseURL constant.
 */
export const request = () => {
  const id = window.localStorage.getItem("id")
  const token = window.localStorage.getItem("token")
  const customAxios = axios.create({
    baseURL, 
    credentials: "include",
    headers: { 
      "user": id,
      token
    }
  });
  
  customAxios.interceptors.response.use((config) => {
    return config
  }, (err) => {
    const { licenseExpired, noToken } = err.response.data
    
    if (licenseExpired) {
      window.localStorage.setItem("rol", 'user')
      window.location.reload(false);
    }

    if (noToken) {
      window.localStorage.removeItem("user");
      window.localStorage.removeItem("rol");
      window.localStorage.removeItem("id");
      window.localStorage.removeItem("userType");
      window.localStorage.removeItem("token")
      window.location.reload(false);
    }

    return err
  });

  return customAxios
}