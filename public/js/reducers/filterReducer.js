import { FilterTypes, SET_VISIBILITY_FILTER} from '../actions/filterActions.js'

function visibilityFilter(state = FilterTypes.SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:

            return action.filterType;

        default:
            return state
    }

}

export default visibilityFilter