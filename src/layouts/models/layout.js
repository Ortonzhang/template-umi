import { prefix } from 'config'
import qs from 'qs'
import * as layoutService from '../services'
import {routerRedux} from 'dva/router';
export default {
  namespace: 'layout',
  state: {
    menu: [
      {
        name: "数据预览",
        url: "/dashboard",
        icon: "dashboard",
        key: "dashboard"
      },
      {
        name: "流量管理",
        icon: "inbox",
        sub: 'sub1',
        child: [
          {
            name: "流量列表",
            url: "/leads",
            icon: "table",
            key: "leads",
          },
          {
            name: "认领列表",
            url: "/claim",
            icon: "table",
            key: "claim",
          }
        ]
      }
    ],
    collapsed: window.localStorage.getItem(`${prefix}collapsed`) === 'true',
    visible: false,
    openKeys: [],
    status: 'dashboard',
    src: window.location.origin + '/member/captcha',
    user: JSON.parse(window.localStorage.getItem(`${prefix}user`)) || {},
  },
  reducers: {
    changeStatus(state, { payload }) {
      if( Object.keys(payload).includes('user')){
        window.localStorage.setItem(`${prefix}user`, JSON.stringify(payload.user))
      }
      return { ...state, ...payload }
    },
    changeCollapsed(state) {
      window.localStorage.setItem(`${prefix}collapsed`, !state.collapsed)
      return {
        ...state,
        collapsed: !state.collapsed
      }
    },
    changePwdModel(state){
      return {
        ...state,
        visible: !state.visible
      }
    },
  },
  effects: {
    *logout({ payload }, { put, call }) {
      yield put({type: 'changeStatus', payload: {user: {}}})
      yield put(routerRedux.push({ pathname: '/login' } ))
    },
    *login({ payload }, {put, call}) {
      //  发送请求
      // let {id, name, token} = yield call(layoutService.login, qs.stringify(payload))
      let {id, name, token} = { name: '章三', id: '00000', token: '1212121212121' }
      yield put({type: 'changeStatus', payload: { user: {name, id, token} }})
      yield put(routerRedux.push({ pathname: '/dashboard' } ))
    },
    *changePassword({ payload }, {put, call}) {
      console.log(payload)
      yield put({type: 'changeStatus', payload: {visible: false}})
      yield put({type: 'logout'})
    }
  },
  subscriptions: {
    setup({dispatch, history}) {
      return history.listen(({pathname, query}) => {
        let user = window.localStorage.getItem(`${prefix}user`)
        if(pathname !== '/login' && pathname !== '/resetPwd' && pathname !== '/register') {
          
          if(pathname === '/' && user){
            dispatch(routerRedux.push({ pathname: '/dashboard'}))
          }
          if(!user || user === '{}'){
            dispatch(routerRedux.push({ pathname: '/login'}))
          }
        }
        dispatch({type:'changeStatus', payload: { // 更改左侧选中状态的menu
          status: pathname === '/' ? 'dashboard' : pathname.replace('/', '')
        }})
      }) 
    }
  }
}