import { SortTypes } from '../actions/sortActions.js'

function currentSort(state = SortTypes.DATE_ADDED, action) {
    if (action.newSort) {
        return action.newSort
    } else {
        return state
    }
}

export default currentSort