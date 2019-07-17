import { createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"
import { AsyncStorage } from "react-native"
import authReducer from "./reducers/auth.reducer"
import globalReducer from './reducers/utility.reducer'
import productReducer from './reducers/product.reducer'
import customerReducer from './reducers/customer.reducer'
import categoryReducer from './reducers/category.reducer'


const rootReducer = combineReducers({
	authReducer, globalReducer, productReducer, customerReducer, categoryReducer
})


const loadState = () => {
	try {
		const serializedState = AsyncStorage.getItem("state")
		if (!serializedState) return undefined
		return JSON.parse(serializedState)
	} catch (err) {
		return undefined
	}
}

const saveState = async state => {
	try {
		const serializedState = JSON.stringify(state)
		await AsyncStorage.setItem("state", serializedState)
	} catch (error) {
		console.log("save error", error)
	}
}

const store = createStore(
	rootReducer,
	loadState(),
	applyMiddleware(thunk)
)

store.subscribe(() => {
	saveState(store.getState())
})

export default store
