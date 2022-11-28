import { CATEGORIES_ACTION_TYPES } from "./categories.types"
export const CATEGORIES_INITAL_VALUE = {
    categoriesMap: {},
}

export const categoriesreducer = (state = CATEGORIES_INITAL_VALUE, action = {}) => {
    const { type, payload } = action
    switch (type) {
        case CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP:
            return {
                ...state,
                categoriesMap: payload
            }
        default:
            return state
    }

}