import { leadsClaimList, addRemark, getPhone, getAvailableUdeskToken, keepUdeskTokenAlive, releaseUdeskToken } from '../services'
import qs from 'qs'
import moment from 'moment';
import { delay } from 'config'
export default {
  namespace: 'claim',
  state: {
    list: ['1','2','3'],
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
        if(pathname.includes('claim')){
          console.log('claim')
        }
      })
    }
  }
};
