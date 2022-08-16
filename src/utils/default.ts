/**
 * @Description useRequest错误全局判断
 * @param  -
 * @author glory
 * @date 2022/8/15 16:21
 */
export function useRequestMessageIsError(data: any): boolean {
    // console.log('data__x', data)
    if (!!data && !!data.value && typeof data?.value == 'object') {
        if (!!data?.value?.code) {
            return Object.keys(data?.value).length > 0 && data?.value?.code != 200;
        }
    }
    return false
}

/**
 * @Description defaultRequest错误全局判断
 * @param  -
 * @author glory
 * @date 2022/8/15 16:21
 */
export function defaultRequestMessageIsError(data: any) {
    return !!data && data?.code != 200;
}