import React from 'react';
import useForm from '../../../shared_components/hooks/form.hook'
import {
    Button, Text
} from "native-base"

function CreateProduct({ categoryList, onSubmit }) {
    const { formState, generateFormItem, formStyles } = useForm()
    const inputConfig = [
        { name: 'name' },
        { name: 'price', keyboardType: 'numeric' },
        { name: 'product_category', selectList: categoryList, inputType: "select" },
        { name: "scan_id" },
        { stock: 'stock', keyboardType: 'numeric' },
        { weight: 'weight', keyboardTYpe: 'numeric' }
    ]

    return (
        <>
            {generateFormItem(inputConfig)}
            <Button block rounded primary onPress={() => onSubmit(formState)} style={formStyles.formButton}>
                <Text>Add</Text>
            </Button>
        </>
    )
}

export default CreateProduct
