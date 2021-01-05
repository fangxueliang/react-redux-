import { combineReducers } from "redux"//合并
import menu from './menu'//储存的菜单数据
import menuKey from './menuKey'//储存的key
import nameStatistical from "./nameStatistical";//起名大全 统计

export default combineReducers({
    menu, menuKey, nameStatistical
})