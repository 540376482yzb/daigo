import constant from "../constant"
const initialState = {
    categoryList: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case constant.SET_CATEGORY_LIST:
            return { ...state, categoryList: action.categoryList }
        default:
            return state
    }
}
