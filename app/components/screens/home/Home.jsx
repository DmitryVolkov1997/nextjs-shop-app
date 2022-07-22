import classes from './Home.module.scss'
import ProductList from './product-list/ProductList'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { BASE_URL } from '../../../config'
import { setLoading, setProducts } from '../../../store/productSlice/productSlice'
import Preloader from '../../preloader/Preloader'
import Container from '../../container/Container'
import Cart from './cart/Cart'
import { setOrder } from '../../../store/orderSlice/orderSlice'
import Basket from './basket/Basket'
import { setShowBasket } from '../../../store/basketSlice/basketSlice'

const Home = () => {
	const dispatch = useDispatch()
	const { products, loading } = useSelector(state => state.product)
	const { orders = [] } = useSelector(state => state.order)
	const { isShowBasket } = useSelector(state => state.basket)
	
	const addToBasket = (id) => {
		const orderIndex = orders.findIndex(order => order.id === id)
		
		if (orderIndex < 0) {
			let order = products.find(order => order.id === id)
			let newOrder = {
				...order,
				quantity: 1
			}
			dispatch(setOrder({ data: [...orders, newOrder] }))
		} else {
			const order = orders.map((order, i) => {
				if (i === orderIndex) {
					return {
						...order,
						quantity: order.quantity + 1
					}
				} else {
					return order
				}
			})
			dispatch(setOrder({ data: order }))
		}
	}
	
	const handleShowBasket = () => {
		dispatch(setShowBasket())
	}
	
	useEffect(() => {
		const fetchData = async () => {
			const { data } = await axios.get(BASE_URL, { headers: { Authorization: '99bf1ca1-9bd0c163-444c538a-f648d67f' } })
			dispatch(setProducts({ data: data.featured }))
			dispatch(setLoading(false))
		}
		fetchData()
	}, []) // eslint-disable-line react-hooks/exhaustive-deps
	
	return (
		<Container>
			<div className={classes.home}>
				<div className={classes.content}>
					<Cart quantity={orders.length} showBasket={handleShowBasket} />
					{isShowBasket ? <Basket orders={orders} showBasket={isShowBasket} /> : null}
					{loading ? <Preloader /> : <ProductList products={products} addToBasket={addToBasket} />}
				</div>
			</div>
		</Container>
	)
}

export default Home
