import { AxiosRequestConfig, AxiosResponse,AxiosError } from 'axios'
import type { RequestConfig } from './request'
import Request from './request'

export interface Response<T> {
    statusCode: number
    desc: string
    result: T
}

// 重写返回类型
interface MYRequestConfig<T, R> extends RequestConfig<Response<R>> {
    data?: T
}

const requestBaseUrl = import.meta.env.MODE === 'production' ? import.meta.env.VITE_AXIOS_BASE_URL : import.meta.env.BASE_URL

const request = new Request({
    baseURL: requestBaseUrl,
    // baseURL: import.meta.env.BASE_URL,
    // baseURL: import.meta.env.VITE_AXIOS_BASE_URL,
    timeout: 1000 * 60 * 5,
    interceptors: {
        // 请求拦截器
        requestInterceptors: (config: AxiosRequestConfig) => {
            // 手动设置拦截器 自行更改
            // console.log('config_', config)
            // @ts-ignore
            config.headers.Authorization = 'Beer Glory'
            return config
        },
        // 响应拦截器
        responseInterceptors: (result: AxiosResponse) => {
            // return result
            // 对响应数据进行操作
            // console.log('result__', result)
            if (result?.data?.code === 200) {
                return result?.data
            }
            // 对状态码异常的进行判断
            //  ....

            return result
        },
        responseInterceptorsCatch: (error: AxiosError) => {
            // @ts-ignore
            const { status } = error.response
            if (status === 500) {
                console.log('服务器错误,请联系管理员!')
            }
            if (!error.message) {
                if (status === 502) {
                    console.log('服务器更新中，请稍后再试！')
                    return Promise.reject(status)
                }
                if (error) {
                    console.log(error.response && error.response.data ? error.response.data : '网络异常')
                }
                return Promise.reject(error)
            }
        }
    }
})

/**
 * @description: 函数的描述
 * @generic D 请求参数
 * @generic T 响应结构
 * @param {MYRequestConfig} config 不管是GET还是POST请求都使用data
 * @returns {Promise}
 */
const MyRequest = <D = any, T = any>(config: MYRequestConfig<D, T>) => {
    const { method = 'GET' } = config
    if (method === 'get' || method === 'GET') {
        config.params = config.data
    }
    return request.request<Response<T>>(config)
}
// 取消请求
export const cancelRequest = (url: string | string[]) => {
    return request.cancelRequest(url)
}
// 取消全部请求
export const cancelAllRequest = () => {
    return request.cancelAllRequest()
}

export default MyRequest
