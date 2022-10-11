import axios from '../utils/axios'
import { pageParams } from '../types'
import { User } from '../types/user'

enum Api {
    USER_LIST = '/api/user/list?user=Glory',
    USER_LIST2 = '/api/user/list2',
    USER_ADD = '/api/user/add',
    USER_UPDATE = '/api/user/update',
    USER_DELETE = '/api/user/delete'
}

export async function getUserList(params: pageParams) {
    return axios({ url: Api.USER_LIST, data: params })
}

export async function getUserList2(params: pageParams) {
    return axios({ url: Api.USER_LIST2, data: params, method: 'POST' })
}

export async function updateUserInfo(params: User) {
    if (params?.id) return axios({ url: Api.USER_UPDATE, data: params, method: 'POST' })
    return axios({ url: Api.USER_ADD, data: params, method: 'POST' })
}

export async function deleteUser(params: { id: number }) {
    return axios({ url: Api.USER_DELETE, data: params, method: 'POST' })
}
