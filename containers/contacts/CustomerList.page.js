import React from "react"
import { connect } from "react-redux"
import {
    Container,
    Content,
    View,
} from "native-base"
import { withRouter } from 'react-router-native'
import { addNewCustomer, getCustomerList } from '../../redux/actions/customer.action'
import useCustomerHeader from './CustomerList.components/CustomerHeader.component'
import BottomModal from '../../shared_components/modals/BottomModal'
import CreateCustomer from './CustomerList.components/CreateCustomer.component'
import CustomerList from './CustomerList.components/CustomerList.component'

function Contact({ addNewCustomer, customerList, getCustomerList, history }) {
    const { renderResponsiveHeader, isVisible, setVisible } = useCustomerHeader()

    return (
        <Container>
            {renderResponsiveHeader()}
            <Content style={{ flex: 1 }}>
                <BottomModal isVisible={isVisible} setVisible={setVisible} title="New Customer">
                    <CreateCustomer onSubmit={(formData) => addNewCustomer(formData)} />
                </BottomModal>
                <View>
                    <CustomerList customerList={customerList} getCustomerList={getCustomerList} history={history} />
                </View>
            </Content>
        </Container>
    )
}

const mapStateToProps = state => {
    return {
        customerList: state.customerReducer.customerList
    }
}
export default withRouter(connect(mapStateToProps, {
    getCustomerList,
    addNewCustomer

})(Contact))
