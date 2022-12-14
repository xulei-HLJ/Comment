import axios from 'axios';
import qs from 'qs';

function get (url) {
  // 通过 Promise 包装， resolve 语义化。
  return new Promise((resolve, reject) => {
    axios(url).then((res) => {
      if (res.data.code === 0) {
        resolve(res.data.data);
      } else {
        reject('error');
      }
    })
  })
}

function post (url, body) {
  return new Promise((resolve, reject) => {
    axios.post(url, qs.stringify(body)).then((res) => {
      if (res.data.code === 0) {
        resolve(res.data.data);
      } else {
        reject('error');
      }
    })
  })
}

export default {
  get,
  post
}