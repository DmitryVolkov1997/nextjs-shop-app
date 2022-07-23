import { createSlice } from '@reduxjs/toolkit'

const toastSlice = createSlice({
	name: 'toast',
	initialState: {
		toast: '',
		showToast: false
	},
	reducers: {
		setToast(state, { payload }) {
			state.toast = payload.text
		},
		setShowToast(state, { payload }) {
			state.showToast = payload
		}
	}
})

export const { setToast, setShowToast } = toastSlice.actions
export default toastSlice.reducer
