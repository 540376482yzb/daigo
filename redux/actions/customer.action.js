import constant from "../constant";
import { pageLoading, pageError } from './utility.action'
import CustomerCore from '../../api_services/query_services/customer.core';

export const addNewCustomer = options => async dispatch => {
    try {
        await pageLoading(true)
        await CustomerCore.createCustomer(options)
    } catch (error) {
        await pageError(error)
    } finally {
        pageLoading(false)
    }
}

export const getCustomerList = () => async dispatch => {
    try {
        await pageLoading(true)
        const customerList = await CustomerCore.getCustomerList()
        await dispatch({
            type: constant.SET_CUSTOMER_LIST,
            customerList
        })
    } catch (error) {
        await pageError(error)
    } finally {
        pageLoading(false)
    }
}

export const getCustomerDetail = (customer_id) => async dispatch => {
    try {
        await pageLoading(true)
        const customer = new CustomerCore(customer_id);
        const customerDetail = await customer.getCustomerDetail()
        console.log(customerDetail)
        await dispatch({
            type: constant.SET_CUSTOMER_DETAIL,
            customerDetail
        })
    } catch (error) {
        await pageError(error)
    } finally {
        pageLoading(false)
    }
}