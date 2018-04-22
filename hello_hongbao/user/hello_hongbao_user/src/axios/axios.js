import axios from 'axios';
import Nprogress from 'nprogress'
import { Toast } from'mint-ui'

var instance = axios.create({
  baseURL:"https://some-domain.com/api/",
  timeout: 5000,
  headers: {'token':'dasjhdudghuy2'},
});

//拦截器

instance.interceptors.request.use((config) => {
  //在发送请求之前做某件事
  Nprogress.start()
  return config;
},(error) =>{

  return Promise.reject(error);
});
//返回状态判断(添加响应拦截器)
instance.interceptors.response.use((res) =>{
  //对响应数据做些事
  if(!res.data.success){
    return Promise.reject(res);
  }
  Nprogress.done()
  return res;
}, (error) => {
  Nprogress.done()
  Toast({
    message: '请求失败',
    position: 'middle',
    duration: 2000
  });
  return Promise.reject(error);
});
export default instance;
