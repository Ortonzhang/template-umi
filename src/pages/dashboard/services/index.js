import request from '@/utils/request'

export const dashboardStatus = () => request('/member/dashboard/stats')

export const leadsToday = (data) => request('/member/leads/today', { body: data })