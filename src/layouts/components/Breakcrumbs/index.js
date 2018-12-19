import React from 'react'
import { Breadcrumb, Icon } from 'antd';
import PropTypes from 'prop-types'

const Breadcrumbs = ({ list }) => {
  return (
    <Breadcrumb style={{margin: '0 0 20px 0'}}>
      <Breadcrumb.Item href="/">
        <Icon type="dashboard" style={{marginRight: '4px'}}/>
          dashboard
      </Breadcrumb.Item>
      {
        list && list.map((item, index) => 
          <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>
        )
      }
    </Breadcrumb>
  )
}

Breadcrumbs.prototype = {
  list: PropTypes.list
}

export default Breadcrumbs