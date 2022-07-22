import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
	name: 'product',
	initialState: {
		products: [],
		loading: true
	},
	reducers: {
		setProducts(state, { payload }) {
			state.products = payload.data
		},
		setLoading(state, { payload }) {
			state.loading = payload
		}
	}
})

export const { setProducts, setLoading } = productSlice.actions
export default productSlice.reducer