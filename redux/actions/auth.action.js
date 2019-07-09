import constant from "../constant"
import AuthCore from "../../api_services/query_services/auth.core.js"

export const signUp = (email, password, confirmPassword) => async dispatch => {
	setTimeout(async () => {
		try {
			if (password !== confirmPassword) throw new Error("Password not match")
			await dispatch(frontPageLoading(true))
			await AuthCore.signUpWithEmail(email, password)
		} catch (err) {
			await dispatch(frontPageError(err.message || err))
		} finally {
			await dispatch(frontPageLoading(false))
		}
	}, 1000)
}

export const signIn = (email, password) => async dispatch => {
	try {
		await dispatch(frontPageLoading(true))
		await AuthCore.signInWithEmail(email, password)
		console.log("hello")
	} catch (err) {
		await dispatch(frontPageError(err.message || err))
	} finally {
		await dispatch(frontPageLoading(false))
	}
}

export const signOut = () => async dispatch => {
	AuthCore.signOut()
}

export const frontPageLoading = mode => dispatch => {
	dispatch({
		type: "FRONT_PAGE_LOADING",
		mode
	})
}

export const frontPageError = error => dispatch => {
	dispatch({
		type: "FRONT_PAGE_ERROR",
		error
	})
}
