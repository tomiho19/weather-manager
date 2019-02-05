import CONSTANTS from '../constants'

const cityReducer = (state = {cities: {}}, action) => {
    let copy = {};
    switch (action.type) {
        case CONSTANTS.ADD_CITY:
            copy = Object.assign({}, state);
            copy.cities[action.id] = action.data;
            return copy;
        case CONSTANTS.REMOVE_CITY:
            copy = Object.assign({}, state);
            delete copy.cities[action.id];
            return copy;
        default:
            return state
    }
};

export default cityReducer;