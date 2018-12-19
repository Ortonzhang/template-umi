import React from 'react'
import { connect } from 'dva';
import {  Card } from 'antd';
import Breadcrumbs from '@/layouts/components/Breakcrumbs'
const ClaimPage = ({
  claim,
  dispatch,
}) => {
  const { list } = claim

  return(
    <div>
      < Breadcrumbs
        list={['流量管理', '认领列表']}
      />
      <Card title="认领列表">
        {
          list.map(item => 
            <li key={item}>item</li>
          )
        }
      </Card>
    </div>
  )
}


export default connect(({claim})=>({claim}))(ClaimPage)
