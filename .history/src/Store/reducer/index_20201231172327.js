import { combineReducers } from "redux"
import menu from './menu'//储存的菜单数据
import menuKey from './menu'//储存的key

export default combineReducers({
    menu, menuKey
})