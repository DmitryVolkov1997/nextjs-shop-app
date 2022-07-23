import classes from './Basket.module.scss'
import { RiCloseFill } from 'react-icons/ri'
import { HiMinus, HiPlus } from 'react-icons/hi'

const Basket = ({
	                orders = [],
	                hideBasket = Function.prototype,
	                onDelete = Function.prototype,
	                incrementOrder = Function.prototype,
	                decrementOrder = Function.prototype
                }) => {
	const totalPrice = orders.reduce((acc, price) => acc + price.price * price.quantity, 0)
	
	return (
		<div className={classes.basket}>
			<div className={classes.header}>
				<p className={classes.title}>Корзина</p>
				<RiCloseFill className={classes.icon} onClick={hideBasket} />
			</div>
			{
				orders.length ? orders.map(order => {
					return <div key={order.id} className={classes.item}>
						<div className={classes.item__info}>
							<p>{order.name}&nbsp;</p>
							<span>x{order.quantity}&nbsp;</span> = <p>&nbsp;{order.price * order.quantity}</p>
							<div className={classes.icons}>
								<HiMinus className={classes.decrement} onClick={() => decrementOrder(order.id)} />
								<HiPlus className={classes.increment} onClick={() => incrementOrder(order.id)} />
							</div>
						</div>
						<RiCloseFill className={classes.item_icon} onClick={() => onDelete(order.id)} />
					</div>
				}) : <div className={classes.item}>Корзина пуста</div>
			}
			<div className={classes.footer}>
				<p className={classes.info}>Общая стоимость: {totalPrice.toLocaleString()} тенге</p>
			</div>
		</div>
	)
}

export default Basket
