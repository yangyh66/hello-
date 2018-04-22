import axios from './axios.js'

export default {
  /**
   * 用户登录
   */
  Login(params,methods) {
    if(methods==='get'){
      axios.get('/user?ID='+params)
        .then(function (response) {

        })
    }else {
      axios.post('/user?ID=',{id:params})
        .then(function (response) {
          console.log(response);
        })

    }

  },
}

