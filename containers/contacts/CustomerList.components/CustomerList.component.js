import React, { useEffect } from 'react';
import { List } from "native-base"
import AvatarListItem from '../../list_items/AvatarListItem'

export default function CustomerList({ customerList = [], getCustomerList, history }) {

    useEffect(() => {
        getCustomerList()
    }, [])

    handleDetailClick = (id) => {
        history.push(`/contact/detail/${id}`)
    }

    return (
        <List>
            {customerList.map(customer => {
                return <AvatarListItem
                    key={customer._id}
                    primaryText={customer.name}
                    subText={customer.address}
                    onPress={() => handleDetailClick(customer._id)}
                />
            }
            )}
        </List>
    )
}