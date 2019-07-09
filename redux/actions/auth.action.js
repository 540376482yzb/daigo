import constant from '../constant'
import AuthCore from '../../api_services/query_services/auth.core.js'

export const signUp = (email,password,confirmPassword) => async dispatch => {
    try{
        await dispatch(frontPageLoading(true))
        await AuthCore.signUpWithEmail(email,password)
    }catch(err){
        await frontPageError(err.message || err)
    }finally{
        await dispatch(frontPageLoading(false))
    }
}

export const signIn = (email,password) => async dispatch => {
    try{
        await dispatch(frontPageLoading(true))
        // await AuthCore.signInWithEmail(email,password)
    }catch(err){
        await frontPageError(err.message || err)
    }finally{
        await dispatch(frontPageLoading(false))
    }
}

export const frontPageLoading = (mode) => dispatch => {
    dispatch({
        type:'FRONT_PAGE_LOADING',
        mode
    })
}

export const frontPageError = error => dispatch => {
    dispatch({
        type:'FRONT_PAGE_ERROR',
        error
    })
}