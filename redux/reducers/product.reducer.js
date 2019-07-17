import constant from "../constant"
const initialState = {
    customerList: [],
    customerDetail: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case constant.SET_CUSTOMER_LIST:
            return { ...state, customerList: action.customerList }
        case constant.SET_CUSTOMER_DETAIL:
            return { ...state, customerDetail: action.customerDetail }
        default:
            return state
    }
}
