import React from 'react'
import classes from './Toast.module.scss'

const Toast = ({ toast = '' }) => {
	return <div className={classes.toast}>{toast} Добавлен в корзину</div>
}

export default Toast
