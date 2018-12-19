import React from 'react'
import Headers from './components/Header'
import Menu from './components/Menu'
import ChangePwd from './components/ChangePwd'
import Login from './pages/Login'
import { Layout } from 'antd'
import withRouter from 'umi/withRouter';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';

import { TransitionGroup, CSSTransition } from "react-transition-group";
import { connect } from 'dva';

const { Content } = Layout
function LayoutBox({children, location, layout, dispatch}) {
  if(location && location.pathname === '/login') {
    return <Login />
  }

  const {  visible } = layout

  const ChangePwdPros = {
    handle(values){
      dispatch({type: 'layout/changePassword', payload: values})
    },
    visible,
    hideModal(){
      dispatch({type: 'layout/changePwdModel'})
    }
  }

  return(
    <LocaleProvider locale={zhCN}>
      <Layout>
        <Menu/ >
        <Layout style={{ minHeight: '100vh', overflow: 'auto' }}>
          <Headers location={location} />
          <Content style={{ margin: '24px 16px'}}>
            { children }
          </Content>
          <ChangePwd 
            {...ChangePwdPros}
          />
        </Layout>
      </Layout>
    </LocaleProvider>
  )
}

export default withRouter(
  connect(({layout}) => ({layout}))(({ children, location, layout, dispatch }) =>
  <TransitionGroup>
    <CSSTransition key={location.pathname} classNames="fade" timeout={300}>
      <LayoutBox 
        children={children}
        location={location}
        layout={layout}
        dispatch={dispatch}
        />
    </CSSTransition>
  </TransitionGroup>)
  
);


