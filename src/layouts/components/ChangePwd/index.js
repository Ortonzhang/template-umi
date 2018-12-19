import React from 'react'
import { Modal, Form, Input, Button } from  'antd'
import { formItemLayout } from 'config'
import PropTypes from 'prop-types'

const FormItem = Form.Item

const ChangePwd = ({
  visible,
  hideModal,
  handle,
  form: {
    getFieldValue,
    getFieldDecorator,
    validateFieldsAndScroll
  }
}) => {
  const handleOk = () => {
    validateFieldsAndScroll((errors, values) => {
      if (errors) {
        return
      }
      handle(values)
    })
  }
  return (
    <Modal
          title="修改密码"
          visible={visible}
          onCancel={hideModal}
          footer={null}
        >
        <Form>
          <FormItem { ...formItemLayout } label="输入旧密码:">
            {
              getFieldDecorator('oldPwd', {
                rules: [{ required: true, message: '请输入旧密码!' }, {validator: (rule, value, callback)=>{ value && value.length < 8 ? callback('密码长度最少8位') : callback()}}],
              })(<Input placeholder="请输入旧密码" type="password" />)
            }

          </FormItem>
          <FormItem { ...formItemLayout } label="输入新密码:">
            {
              getFieldDecorator('newPwd', {
                rules: [{ required: true, message: '请输入新密码!' }, {validator: (rule, value, callback)=>{ value && value.length < 8 ? callback('密码长度最少8位') : callback()}}],
              })(<Input placeholder="请输入新密码" type="password" />)
            }
          </FormItem>
          <FormItem { ...formItemLayout } label="重复新密码:">
            {
              getFieldDecorator('newPwdRe', {
                rules: [{ required: true, message: '请重复新密码!' }, {validator: (rule, value, callback)=>{ value && value !== getFieldValue('newPwd') ? callback('两次输入密码不一致') : callback()}}],
              })(<Input placeholder="请重复新密码" type="password" />)
            }
          </FormItem>
          <FormItem wrapperCol={{ span: 12, offset: 5 }} style={{textAlign: 'right'}}>
            <Button type="primary" onClick={()=>handleOk()}>
              确定
            </Button>
            <Button type="default" style={{marginLeft: '20px'}} onClick={()=>hideModal()}>
              取消
            </Button>
          </FormItem>
        </Form>
      </Modal>
  )
}

ChangePwd.prototype = {
  visible: PropTypes.bool,
  handle: PropTypes.func,
  hideModal: PropTypes.func
}


export default Form.create()(ChangePwd)