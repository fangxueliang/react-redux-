import { MENUKEY } from '../action_type'


export default (state = [1], action) => {
    switch (action.type) {
        case MENUKEY:
            let newState
            newState = JSON.parse(JSON.stringify(action))
            return newState
        default:
            return state
    }

}