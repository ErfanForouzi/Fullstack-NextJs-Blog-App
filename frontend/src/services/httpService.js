import axios from "axios";

const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
});

request.interceptors.request.use(
  (res) => res,
  (err) => Promise.reject(err)
);

request.interceptors.response.use(
  (res) => res,
  async(err) => {
    const originalConfig = err.config;
    if(err.response.status === 401 && !originalConfig._retry){
        originalConfig._retry = true;
       try {
        const {data} = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/user/refresh-token`,{
            withCredentials:true
        })
        if(data) return request(originalConfig)
       } catch (err) {
        console.log(err);
        return Promise.reject(err)
       }
    }
    return Promise.reject(err)
}
);

const http = {
  get: request.get,
  post: request.post,
  put: request.put,
  delete: request.delete,
  patch: request.patch,
};

export default http;
