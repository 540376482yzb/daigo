import React, { useEffect } from 'react';
import { StyleSheet, ActivityIndicator, StatusBar } from 'react-native';
import { Container, Content, View, Thumbnail, Fab, Icon } from 'native-base'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-native'
import { getCustomerDetail } from '../../redux/actions/customer.action'
import JButton from '../../shared_components/buttons'
import Profile from '../../shared_components/profiles'


function CustomerDetail({ history, match, getCustomerDetail, customerDetail = {} }) {

    useEffect(() => {
        const { customer_id } = match.params;
        getCustomerDetail(customer_id)
    }, [])

    return (
        <Container style={{ backgroundColor: 'grey' }}>
            <Fab
                containerStyle={{}}
                style={{ backgroundColor: '#5067FF', zIndex: 2 }}
                position="bottomRight"
                onPress={() => alert('hello')}>
                <Icon type="AntDesign" name="delete" />
            </Fab>
            <StatusBar hidden={true} />
            <Content>
                <Profile.Header onPress={() => history.goBack()} />
                <Profile.Content>
                    <Profile.Left size={5}>
                        <Thumbnail large source={{ uri: 'https://www.thelocal.se/userdata/images/article/6d67730d16af04f3f956389d4cc244af808b8381c23b1e3d218ecd792de14fa8.jpg' }} />
                    </Profile.Left>
                    <Profile.Right size={5}>
                        <JButton.IconItemButton text={customerDetail.name} icon={{
                            type: 'SimpleLineIcons', name: 'people'
                        }} />
                        <JButton.IconItemButton text={customerDetail.phone} icon={{
                            type: 'AntDesign', name: 'phone'
                        }} />
                        <JButton.IconItemButton text={customerDetail.address} icon={{
                            type: 'Entypo', name: 'address'
                        }} />
                        <JButton.IconItemButton text={customerDetail.identification} icon={{
                            type: 'AntDesign', name: 'idcard'
                        }} />
                    </Profile.Right>
                </Profile.Content>
            </Content>
        </Container>
    )
}

const mapStateToProps = state => {
    return {
        customerDetail: state.customerReducer.customerDetail
    }
}

export default withRouter(connect(mapStateToProps, {
    getCustomerDetail
})(CustomerDetail))

const styles = StyleSheet.create({
    headerLeft: {
        paddingVertical: 10
    }
})
