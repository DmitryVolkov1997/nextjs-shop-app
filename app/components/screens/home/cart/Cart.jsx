import classes from './Cart.module.scss'
import { HiShoppingCart } from 'react-icons/hi'

const Cart = ({ quantity = 0, showBasket = Function.prototype }) => {
	return (
		<div className={classes.cart} onClick={showBasket}>
			<HiShoppingCart className={classes.icon} />
			{quantity ? <span className={classes.quantity}>{quantity}</span> : null}
		</div>
	)
}

export default Cart
