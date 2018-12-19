import qs from 'qs'
import { dashboardStatus, leadsToday }  from '../services'
export default {
  namespace: 'dashboard',
  state: {
    list: [],
    data: {
      totalLeads: 10,
      dailyLeads: 12,
      myLeads: 12,
      balance: 34
    },
  },
  effects: {
    
  },
  reducers: {
    changeStatus (state, { payload }) {
      return {...state, ...payload}
    }
  },
  subscriptions: {
    setup({dispatch, history}) {
      // 用来监听url变化
      return history.listen(({pathname}) => {
        if(pathname.includes('dashboard')){
          console.log('dashboard')
        }
      })
    }
  }
}