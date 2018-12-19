import React from 'react'
import { connect } from 'dva';
import {  Card} from 'antd';
import Breadcrumbs from '@/layouts/components/Breakcrumbs'
import './index.scss'
const LeadsPage = ({
  leads,
  dispatch,
}) => {
  const { list } = leads

  return(
    <div>
      < Breadcrumbs
        list={['流量管理', '流量列表']}
      />
      <Card title="流量列表">
        流量列表
        {
          list.map(item => 
            <li key={item}>item</li>  
          )
        }
      </Card>
    </div>
  )
}


export default connect(({leads, loading})=>({leads, loading:loading.models.leads}))(LeadsPage)
