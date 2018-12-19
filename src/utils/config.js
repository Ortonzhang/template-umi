// 项目名称 用来存储local storage
export const prefix = `${process.env.PROJECT_NAME}`

// 清除对象中值为空的属性
export const filterParams = (obj) => {
  let _newPar = {};
  for (let key in obj) {
      if (obj[key] && obj[key].toString().replace(/(^\s*)|(\s*$)/g, '') !== '') {
          _newPar[key] = obj[key];
      }
  }
  return _newPar;
}

// 日期格式化
export const date_format = (date) => {
  if(!date){
    return '----'
  }else{
    var d = new Date(date);
    var year = d.getFullYear();
    var month = ('0' + (d.getMonth() + 1)).slice(-2);
    var day = ('0' + (d.getDate())).slice(-2);
    var hour = ('0' + (d.getHours())).slice(-2);
    var minutes = ('0' + (d.getMinutes())).slice(-2);
    var seconds = ('0' + (d.getSeconds())).slice(-2);
    return year + "-" + month + "-" + day + " " + hour + ":" + minutes + ":" + seconds;
  }
}

// 下载文件
export const downloadUrl = url => {
  let iframe = document.createElement('iframe')
  iframe.style.display = 'none'
  iframe.src = url
  document.body.appendChild(iframe)
  setTimeout(() => {
    // document.body.removeChild(iframe)
  }, 1000)
}

// 校验手机号
export const checkMobile = (rule, value, callback) => {
  if(value && /^1\d{10}$/.test(value)){
    callback()
  } else {
    callback('请输入正确的手机号！')
  }  
}

// 校验密码
export const validatePassword = (rule, value, callback) => {
  if(value && /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{6,16}$/.test(value)){
    callback()
  } else {
    callback('密码长度至少8-16个字符，至少1个大写字母，1个小写字母和1个数字！')
  }
}

// form 布局
export const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
}

// 定时器
export const delay = (timeout) => {
  return new Promise(resolve => {
    setTimeout(resolve,timeout)
  })
}
