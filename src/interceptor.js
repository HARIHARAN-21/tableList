import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://reqres.in/api/users?page=1'
  })

  axiosInstance.interceptors.request.use(
    request =>requestHandler(request)
  )
  
  const isHandlerEnabled = (config={}) => {
    return config.hasOwnProperty('handlerEnabled') && !config.handlerEnabled ? 
      false : true
  }
  
  const requestHandler = (request) => {
    if (isHandlerEnabled(request)) {
      request.headers.common['auth'] = localStorage.getItem("Bearer")
    }
    return request
  }
  
  axiosInstance.interceptors.response.use((response) => {
    if (response) {
      // localStorage.setItem('datalist', response.data);
    }
    return response;
    }, error => {
      return error;
    }
  )