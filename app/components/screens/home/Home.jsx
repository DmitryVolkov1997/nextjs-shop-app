import classes from './Home.module.scss'
import ProductList from './product-list/ProductList'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { BASE_URL } from '../../../config'
import {
	setLoading,
	setProducts
} from '../../../store/productSlice/productSlice'
import Preloader from '../../preloader/Preloader'
import Container from '../../container/Container'
import { setOrder } from '../../../store/orderSlice/orderSlice'
import Basket from './basket/Basket'
import { setShowBasket } from '../../../store/basketSlice/basketSlice'
import Toast from './toast/Toast'
import { setShowToast, setToast } from '../../../store/toastSlice/toastSlice'

const Home = () => {
	const dispatch = useDispatch()
	const { products, loading } = useSelector((state) => state.product)
	const { toast, showToast } = useSelector((state) => state.toast)
	const { orders = [] } = useSelector((state) => state.order)
	const { isShowBasket } = useSelector((state) => state.basket)

	const addToBasket = (item) => {
		const orderIndex = orders.findIndex((order) => order.id === item.id)

		dispatch(setToast({ text: item.name }))
		dispatch(setShowToast(true))

		if (orderIndex < 0) {
			let order = products.find((order) => order.id === item.id)
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

	const removeFromBasket = (id) => {
		const newOrders = orders.filter((order) => order.id !== id)
		dispatch(setOrder({ data: newOrders }))
	}

	const incrementOrder = (id) => {
		const filteredOrders = orders.map((order) => {
			if (order.id === id) {
				return {
					...order,
					quantity: order.quantity + 1
				}
			} else {
				return order
			}
		})
		dispatch(setOrder({ data: filteredOrders }))
	}

	const decrementOrder = (id) => {
		const filteredOrders = orders.map((order) => {
			if (order.id === id) {
				return {
					...order,
					quantity: order.quantity > 0 ? order.quantity - 1 : 0
				}
			} else {
				return order
			}
		})
		dispatch(setOrder({ data: filteredOrders }))
	}

	const hideBasket = () => {
		dispatch(setShowBasket())
	}

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await axios.get(BASE_URL, {
				headers: { Authorization: '99bf1ca1-9bd0c163-444c538a-f648d67f' }
			})
			dispatch(setProducts({ data: data.featured }))
			dispatch(setLoading(false))
		}
		fetchData()
	}, []) // eslint-disable-line react-hooks/exhaustive-deps

	useEffect(() => {
		const timeout = setTimeout(() => {
			dispatch(setShowToast(false))
		}, 2000)

		return () => {
			clearTimeout(timeout)
		}
	}, [showToast])

	return (
		<Container>
			<div className={classes.home}>
				<div className={classes.content}>
					{showToast ? <Toast toast={toast} /> : null}
					{isShowBasket ? (
						<Basket
							orders={orders}
							showBasket={isShowBasket}
							hideBasket={hideBasket}
							onDelete={removeFromBasket}
							incrementOrder={incrementOrder}
							decrementOrder={decrementOrder}
						/>
					) : null}
					{loading ? (
						<Preloader />
					) : (
						<ProductList products={products} addToBasket={addToBasket} />
					)}
				</div>
			</div>
		</Container>
	)
}

export default Home
