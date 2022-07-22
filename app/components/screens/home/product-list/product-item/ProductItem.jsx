import classes from './ProductItem.module.scss'
import Image from 'next/image'

const ProductItem = (props) => {
	const { id, name, description, price, full_background, addToBasket = Function.prototype } = props
	
	return (
		<div className={classes.item}>
			<Image className={classes.img} src={full_background} alt={name} width={350} height={350} />
			<div className={classes.info}>
				<div className={classes.info__header}>
					<h3 className={classes.title}>{name}</h3>
					<p className={classes.description}>{description}</p>
				</div>
				<div className={classes.info__footer}>
					<button className={classes.btn} onClick={() => addToBasket(id)}>Купить</button>
					<p className={classes.price}>{price}&nbsp;тенге</p>
				</div>
			</div>
		</div>
	)
}

export default ProductItem
