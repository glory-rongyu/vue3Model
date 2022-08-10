/**
 * @Description 数组转树
 * @param  -
 * @author glory
 * @date 2022/8/10 13:43
 */
export function arrayToTree(array: any[], pid: number = 0) {
    function loop(pid: number): any[] {
        return array.reduce((pre: any[], cur: any) => {
            if (pid === cur.pid) {
                cur.childre = loop(cur.id)
                pre.push(cur)
                // return pre.concat([cur])
            }
            return pre
        }, [])
    }

    return loop(pid)
}

/**
 * @Description 树转数组
 * @param  -
 * @author glory
 * @date 2022/8/10 13:43
 */
export function treeToArray(tree: any[]) {
    function loop(data: any[]): any[] {
        return data.reduce((pre, { children = [], ...items }) => {
            return pre.concat([items, ...loop(children)])
        }, [])
    }

    return loop(tree)
}
