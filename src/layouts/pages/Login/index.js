import React from 'react';
import { connect } from 'dva';
import styles from './index.scss';
import { Form } from 'antd';
import LoginComponent from '../../components/Login'
import RegisterComponent from '../../components/Register'

const Login = ({
  dispatch,
  layout,
  form: {
    validateFieldsAndScroll,
  },
}) => {
  const BaseURl = window.location.hash
  const { src } = layout
  const LoginComponentProps = {
    handle(values){
      dispatch({ type: 'layout/login', payload: values })
    }
  }

  const RegisterComponentProps = {
    handle(values){
      dispatch({ type: 'layout/register', payload: values })
    },
    check(values) {
      return dispatch({ type: 'layout/checkMobile', payload: values })
    },
    src,
    changeSrc: () => dispatch({ type: 'layout/changeSrc'})
  }


  return (
    <div className={styles['login']}>
      <div className={styles['body']}>
        <h3>欢迎
        {BaseURl.includes('login') && '登录'}
        {BaseURl.includes('register') && '注册'}
        某某某系统</h3>
        {
          BaseURl.includes('login') && 
          <LoginComponent
            {...LoginComponentProps}
          />
        }
        {
          BaseURl.includes('register') &&
          <RegisterComponent 
            {...RegisterComponentProps}
          />
        }
      </div>
    </div>
  )
}



export default connect(({ layout })=>({ layout }))(Form.create()(Login))