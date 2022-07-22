import classes from './ProductList.module.scss'
import ProductItem from './product-item/ProductItem'

const ProductList = ({ products = [], addToBasket = Function.prototype }) => {
	return (
		<div className={classes.list}>
			{
				products.map((product, i) => (
					<ProductItem key={i} {...product} addToBasket={addToBasket} />
				))
			}
		</div>
	)
}

export default ProductList
