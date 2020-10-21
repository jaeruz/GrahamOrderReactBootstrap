const initState = {
    orderList: [
        // { id: 0, title: 'dummy order', dateAdded: 'Tue Sep 22 2020 09:48:42 GMT+0800 (Philippine Standard Time)', deliveryDate: '', totalPrice: 100, orders: [{ item: 'Oreo Graham' }, { item: 'GDL (Orig)' }] }
        // { id: '1', title: '', dateAdded: '', deliveryDate: '', orders: [] }
    ]
}



const OrderReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_ORDER': {
            console.log(action.order)
            console.log(...state.orderList)
            action.order.id = state.orderList.length + 1;
            let newOrder = [...state.orderList, action.order];
            console.log(newOrder)

            console.log('created order', action.order);
            return {
                orderList: newOrder
            }

        }
    }

    return state;
}

export default OrderReducer;