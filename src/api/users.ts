import axios from '../utils/axios'
import { pageParams } from '../types'

enum Api {
    USER_LIST = '/api/user/list?user=Glory',
    USER_LIST2 = '/api/user/list2'
}

export async function getUserList(params: pageParams) {
    return axios({ url: Api.USER_LIST, data: params })
}

export async function getUserList2(params: pageParams) {
    return axios({ url: Api.USER_LIST2, data: params, method: 'POST' })
}
