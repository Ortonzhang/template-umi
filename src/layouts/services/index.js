import request from '@/utils/request'


// 登录
export const login = (data) => request('/member/login', {body: data})

// 退出登录
export const logout = () => request('/member/logout')



