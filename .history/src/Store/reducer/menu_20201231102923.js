import { MENU } from './action_type'
import { menuFun } from "./dataList";

export default (state = 'initState', action) => {
    switch (action.type) {
        case MENU:
            let { data } = menuFun()
            return data.list
        default:
            return state
    }

}
