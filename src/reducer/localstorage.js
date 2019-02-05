import CONSTANTS from '../constants'

const localstorageReducer = (state = {}, action) => {
    switch (action.type){
        case CONSTANTS.LOAD_DATA_FROM_LOCAL_STORAGE:
            return state;
        case CONSTANTS.LOAD_DATA_IN_LOCAL_STORAGE:
            return state;
        default:
            return state
    }
};

export default localstorageReducer;