import classes from './Basket.module.scss'
import {RiCloseFill} from 'react-icons/ri'

const Basket = () => {
	return (
		<div className={classes.basket}>
			<div className={classes.header}>
				<p className={classes.title}>Корзина</p>
				<RiCloseFill className={classes.icon}/>
			</div>
			<div className={classes.item}>
				<div className={classes.item__info}>
					Сияющий шар
				</div>
				<RiCloseFill className={classes.item_icon}/>
			</div>
			<div className={classes.footer}>
				<p className={classes.info}>Общая стоимость:</p>
			</div>
		</div>
	)
}

export default Basket
