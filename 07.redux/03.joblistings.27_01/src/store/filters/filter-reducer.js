import { ADD_FILTER, REMOVE_FILTER, CLEAR_FILTER } from './filter-action';

export const filterReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_FILTER:
            if (state.includes(action.filter)) {
                return state;
            }
            return [...state, action.filter];
        case REMOVE_FILTER:
            return state.filter((f) => f !== action.filter);
        case CLEAR_FILTER:
            return [];
        default: {
            return state;
        }
    }
};
