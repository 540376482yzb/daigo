import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-native';
import useProductHeader from './ProductList.components/ProductHeader.component';
import CreateProduct from './ProductList.components/CreateProduct.component'
import { addNewProduct } from '../../redux/actions/product.action'
import { getCategoryList } from '../../redux/actions/category.action'

function ProductList({ history, addNewProduct, getCategoryList, categoryList }) {
    const { renderResponsiveHeader, isVisible, setVisible } = useProductHeader()

    useEffect(() => {
        getCategoryList()
    }, [])

    return (
        <Container>
            {renderResponsiveHeader()}
            <Content style={{ flex: 1 }}>
                <BottomModal isVisible={isVisible} setVisible={setVisible} title="New Product">
                    <CreateProduct
                        categoryList={categoryList}
                        onSubmit={formData => addNewProduct(formData)} />
                </BottomModal>
                <View>
                    {/* <CustomerList customerList={customerList} getCustomerList={getCustomerList} history={history} /> */}
                </View>
            </Content>
        </Container>
    )

}

const mapStateToProps = state => {
    return {
        categoryList: state.categoryReducer.categoryList
    }
}
export default connect(mapStateToProps, {
    addNewProduct, getCategoryList
})(withRouter(ProductList))