import { leadsList, leadsClaim, memberClaimByBatch, memberBalance } from '../services'
import qs from 'qs'
import moment from 'moment'
export default {
  namespace: 'leads',
  state: {
    list: [],

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
        if(pathname.includes('leads')){
          console.log('leads')
        }
      })
    } 
  }
};
