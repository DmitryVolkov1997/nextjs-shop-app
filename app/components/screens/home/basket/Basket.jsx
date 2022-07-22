import classes from './Basket.module.scss'
import { RiCloseFill } from 'react-icons/ri'

const Basket = ({ orders = [] }) => {
	const totalPrice = orders.reduce((acc, price) => acc + price.price * price.quantity, 0)
	
	return (
		<div className={classes.basket}>
			<div className={classes.header}>
				<p className={classes.title}>Корзина</p>
				<RiCloseFill className={classes.icon} />
			</div>
			{
				orders.length ? orders.map(order => {
					return <div key={order.id} className={classes.item}>
						<div className={classes.item__info}>
							<p>{order.name}&nbsp;</p><span>x{order.quantity}&nbsp;</span> = {order.price * order.quantity}
						</div>
						<RiCloseFill className={classes.item_icon} />
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
