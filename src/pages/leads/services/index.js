import request from '@/utils/request'

export const leadsList = (data) => request('/member/leads/list', { body: data})

export const leadsClaim = (id) => request(`/member/leads/claim/${id}`)

export const memberClaimByBatch = (data) => request(`/member/leads/claimByBatch`, {body: data})

export const memberBalance = () => request(`/member/balance`)
