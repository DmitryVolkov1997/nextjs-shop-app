import { createSlice } from '@reduxjs/toolkit'

const basketSlice = createSlice({
	name: 'basket',
	initialState: {
		isShowBasket: false
	},
	reducers: {
		setShowBasket(state) {
			state.isShowBasket = !state.isShowBasket
		}
	}
})

export const { setShowBasket } = basketSlice.actions
export default basketSlice.reducer