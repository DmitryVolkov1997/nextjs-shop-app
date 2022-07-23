import { configureStore } from '@reduxjs/toolkit'
import productSlice from './productSlice/productSlice'
import orderSlice from './orderSlice/orderSlice'
import basketSlice from './basketSlice/basketSlice'
import toastSlice from './toastSlice/toastSlice'

export const store = configureStore({
	reducer: {
		product: productSlice,
		order: orderSlice,
		basket: basketSlice,
		toast: toastSlice
	}
})
