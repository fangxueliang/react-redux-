import { MENUKEY } from '../action_type'

const menuKey = (state = [1], action) => {
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