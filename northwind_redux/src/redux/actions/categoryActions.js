import * as actionTypes from "./ActionTypes";

export function changeCategory(category){
    return {
        type: actionTypes.CHANGE_CATEGORY,
        payload: category
    }
}