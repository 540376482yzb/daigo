import React, { useState } from 'react';
import { StyleSheet } from 'react-native'
import {
    Item,
    Label,
    Input,
    Picker
} from "native-base"

export default function useForm(options) {
    const [formState, setFormState] = useState({})

    const handleChange = (type) => (value) => {
        setFormState({ ...formState, [type]: value })
    }

    const generateFormItem = (inputConfig) => {
        return inputConfig.map(({ name, keyboardType, inputType, selectList }) => {
            if (inputType === 'selected') {
                renderPicker(name, selectList)
            }
            return (
                <Item floatingLabel style={formStyles.formItem} key={name}>
                    <Label style={{ textTransform: 'capitalize' }}>{name}</Label>
                    <Input
                        keyboardType={keyboardType}
                        value={formState[name]}
                        onChangeText={handleChange(name)} />
                </Item>
            )
        })
    }

    const renderPicker = (name, selectList) => {
        return (
            <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                headerBackButtonText="Back!"
                selectedValue={formState[name]}
                onValueChange={handleChange(name)}
            >
                {selectList.map(selected => <Picker.Item label={selected.name} value={selected._id} />)}
            </Picker>
        )
    }

    const formStyles = StyleSheet.create({
        formItem: {
            padding: 5
        },
        formButton: {
            marginTop: 30,
            marginLeft: 15
        }
    })

    return {
        formState,
        handleChange,
        generateFormItem,
        formStyles
    }
}
