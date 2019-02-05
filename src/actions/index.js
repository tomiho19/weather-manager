import CONSTANTS from "../constants"

export const addCity = (id, data) => {
    return {type: CONSTANTS.ADD_CITY, id, data}
};

export const removeCity = (id) => {
    return {type: CONSTANTS.REMOVE_CITY, id}
};

export const loadDataFromLocalStorage = () => {
    return {type: CONSTANTS.LOAD_DATA_FROM_LOCAL_STORAGE}
};

export const loadDataInLocalStorage = (data) => {
    return {type: CONSTANTS.LOAD_DATA_IN_LOCAL_STORAGE, data}
};