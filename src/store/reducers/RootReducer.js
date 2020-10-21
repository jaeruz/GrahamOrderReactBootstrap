import OrderReducer from './OrderReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const RootReducer = combineReducers({
    order: OrderReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default RootReducer