// https://github.com/matthew-andrews/isomorphic-fetch
import fetch from 'dva/fetch'
import { notification } from 'antd';
import { prefix } from 'config'

// 状态校验函数
function checkStatus(response) {
  if(response.status >= 200 && response.status < 300) {
    return response
  }

  const error = new Error(response.statusText)
  error.response = response
  throw error
}

// 请求函数
export default async function request(url, options) {
  // 添加yoken
  let { id, token } = JSON.parse(localStorage.getItem(`${prefix}user`)) 

  const response = await fetch(url, Object.assign(
    {
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-ui': id || '', 
        'X-token': token || ''
      },
      method: 'post'
    }, options))
  
  // 校验状态
  checkStatus(response)

  // 转换成json对象
  const data = await response.json()

  // 自定义状态
  if(data.status === 500 || data.status !== 0){
    notification.warning({
      message: '出错了',
      description: data.msg
    })
    throw new Error(data.msg) 
  }
  return data.data
}