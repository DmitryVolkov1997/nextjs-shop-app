import { createSlice } from '@reduxjs/toolkit'

const orderSlice = createSlice({
	name: 'order',
	initialState: {
		orders: []
	},
	reducers: {
		setOrder(state, { payload }) {
			state.orders = payload.data
		}
	}
})

export const { setOrder } = orderSlice.actions
export default orderSlice.reducer