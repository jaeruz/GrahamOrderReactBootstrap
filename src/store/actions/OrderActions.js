export const createOrder = (order) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('orders').add({
            ...order,
        }).then(() => {
            dispatch({ type: 'ADD_ORDER', order: order })
        }).catch((err) => {
            dispatch({ type: 'ADD_ORDER_ERROR', err })
        })
    }
}