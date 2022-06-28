// 接口数据类型
export interface userListType {
    id: number
    name: string
    age: number
}

// 模拟请求接口返回的数据
const userList = [
    { id: 1, name: '张三', age: 18 },
    { id: 2, name: '李四', age: 19 }
]

// 封装模拟异步效果的定时器
async function wait(delay: number) {
    // eslint-disable-next-line no-promise-executor-return
    return new Promise(resolve => setTimeout(resolve, delay))
}

// 接口
export const getUserList = async () => {
    await wait(1000) // 延迟100毫秒返回
    return userList
}
