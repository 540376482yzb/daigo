import React, { useState } from 'react';
import useForm from '../../../shared_components/hooks/form.hook'
import {
	Button, Text
} from "native-base"

function CreateCustomer({ onSubmit }) {
	const { formState, generateFormItem, formStyles } = useForm()
	const inputConfig = [
		{ name: 'name' },
		{ name: 'address' },
		{ name: 'phone', keyboardType: 'phone-pad' },
		{ name: 'identification', keyboardType: 'numeric' }
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

export default CreateCustomer

