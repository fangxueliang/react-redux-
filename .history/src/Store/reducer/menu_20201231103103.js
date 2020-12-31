import { MENU } from '../action_type'
import { menuFun } from "../dataList";

const menuDataList = {
    type: MENU,
    data: {
        type: 'menu',
        description: '菜单栏',
        list: [{ value: '首页', key: '1', to: '/home' },
        { value: '个人简介', key: '2', to: '/profile' },
        { value: '个人搜索', key: '3', to: '/search' },
        { value: '起名大全', key: '4', to: '/all' },
        { value: '数据统计', key: '5', to: '/statistical' }]
    }
}
export default (state = menuDataList, action) => {
    switch (action.type) {
        case MENU:
            let { data } = menuFun()
            return data.list
        default:
            return state
    }

}
