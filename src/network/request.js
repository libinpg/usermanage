import axios from "axios"

export function request(config) {
    const instance = axios.create({
      baseURL: "http://152.136.185.210:7878/api/hy66",
      method: "get"
    });

    // //axios 拦截器 请求拦截
    // instance.interceptors.request.use(config => {
    //   return config
    // }, err => {
    //   console.log(err);
    // })

    //axios 拦截器 响应拦截
  instance.interceptors.response.use(result => {
    return result.data
  }, err => {
  })
    return instance(config)
}
