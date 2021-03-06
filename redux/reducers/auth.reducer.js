import constant from "../constant"
const initialState = {
	loading: false,
	error: ""
}

export default (state = initialState, action) => {
	switch (action.type) {
		case constant.FRONT_PAGE_LOADING:
			return { ...state, loading: action.mode }
		case constant.FRONT_PAGE_ERROR:
			return { ...state, error: action.error }
		default:
			return state
	}
}
