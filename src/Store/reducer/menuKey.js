// Menu key值
import { MENUKEY } from '../action_type'
const defautVal = { type: "MENUKEY", data: [1] }
const menuKey = (state = defautVal, action) => {
    switch (action.type) {
        case MENUKEY:
            let newState
            newState = JSON.parse(JSON.stringify(action))
            return newState
        default:
            return state
    }
}
export default menuKey