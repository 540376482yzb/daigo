import constant from "../constant"

export const pageLoading = mode => dispatch => {
	dispatch({
		type: "GLOBAL_PAGE_LOADING",
		mode
	})
}

export const pageError = error => dispatch => {
	dispatch({
		type: "GLOBAL_PAGE_ERROR",
		error: error.message || error
	})
	setTimeout(() => {
		dispatch({
			type: "GLOBAL_PAGE_ERROR",
			error: undefined
		})
	}, 1000)
}
