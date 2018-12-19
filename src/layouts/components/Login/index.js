import React from 'react';
import PropTypes from 'prop-types'
import { Form,  Input, Button, Icon, Row, Divider } from 'antd';
import Styles from './index.scss'
import Link from 'umi/link';
const FormItem = Form.Item


const LoginComponent = ({
  handle,
  form: {
    getFieldDecorator,
    validateFieldsAndScroll
  }
}) => {
  function handleOk() {
    validateFieldsAndScroll((errors, values) => {
      if (errors) {
        return
      }
      handle(values)
    })
  }

  return (
    <div>
      <form className={Styles['form']}>
      <h4>登录</h4>
      <FormItem hasFeedback>
        {getFieldDecorator('mobile', {
          rules: [
            {
              required: true, message: '请输入手机号'
            },
          ],
        })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入手机号" />)}
      </FormItem>
      <FormItem hasFeedback>
        {getFieldDecorator('password', {
          rules: [
            {
              required: true, message: '请输入密码'
            },
          ],
        })(<Input type="password" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} onPressEnter={handleOk} placeholder="请输入密码" />)}
      </FormItem>
      <Button type="primary" onClick={handleOk} className={Styles['login-btn']}>
        登录
      </Button>
      <Row>
        <Link to="/resetPwd">忘记密码</Link>
        <Divider type="vertical" />
        <Link to="/register">注册账号</Link>
      </Row>
    </form>
    </div>
  );
};


LoginComponent.prototype = {
  handle: PropTypes.func
}


export default Form.create()(LoginComponent)
