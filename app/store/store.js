import { configureStore } from '@reduxjs/toolkit'
import productSlice from './productSlice/productSlice'
import orderSlice from './orderSlice/orderSlice'

export const store = configureStore({
	reducer: {
		product: productSlice,
		order: orderSlice
	}
})