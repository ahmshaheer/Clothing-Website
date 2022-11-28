import { CATEGORIES_ACTION_TYPES } from "./categories.types"
import { createAction } from "../../createActions/cActions"
export const setcategoriesMap = (categoriesMap) => createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP, categoriesMap) 