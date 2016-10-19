export const CURRENT_SORT = 'CURRENT_SORT';

export const SortTypes = {
    DATE_ADDED: 'DATE_ADDED',
    DUE_DATE_ASC: 'DUE_DATE_ASC',
    DUE_DATE_DESC: 'DUE_DATE_DESC'
};

export function currentSort(newSort) {
    return {type: CURRENT_SORT, newSort}
}