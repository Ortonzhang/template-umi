import request from '@/utils/request'

export const leadsClaimList = data => request('/member/leads/myleads', { body: data })

export const addRemark = data => request('/member/leads/updateRemark', { body: data })

export const getPhone = id => request(`/member/leads/getMobile/${id}`)

export const getAvailableUdeskToken = () => request('/member/udesk/getAvailableUdeskToken')

export const keepUdeskTokenAlive = data => request('/member/udesk/keepUdeskTokenAlive', {body: data})

export const releaseUdeskToken = id => request(`/member/udesk/releaseUdeskToken/${id}`)
