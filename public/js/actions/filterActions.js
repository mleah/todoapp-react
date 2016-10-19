
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';



export const FilterTypes = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};


export function setVisibilityFilter(filterType) {
    return { type: SET_VISIBILITY_FILTER, filterType }
}

