import constant from "../constant";
import { pageLoading, pageError } from './utility.action'
import CategoryCore from '../../api_services/query_services/category.core'

export const getCategoryList = () => async dispatch => {
    try {
        await pageLoading(true)
        const categoryList = await CategoryCore.getCatergoryList()
        await dispatch({
            type: constant.SET_CATEGORY_LIST,
            categoryList
        })
    } catch (error) {
        await pageError(error)
    } finally {
        pageLoading(false)
    }
}