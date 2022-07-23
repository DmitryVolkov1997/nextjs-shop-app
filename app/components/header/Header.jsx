import classes from './Header.module.scss'
import Container from '../container/Container'
import Link from 'next/link'
import { SiShopify } from 'react-icons/si'
import { TiShoppingCart } from 'react-icons/ti'
import { useSelector, useDispatch } from 'react-redux'
import { setShowBasket } from '../../store/basketSlice/basketSlice'

const Header = () => {
	const dispatch = useDispatch()
	const { orders = [] } = useSelector(state => state.order)
	
	const handleShowBasket = () => {
		dispatch(setShowBasket())
	}
	
	return (
		<header className={classes.header}>
			<Container>
				<div className={classes.row}>
					<SiShopify className={classes.logo} size={40} />
					<div className={classes.inner}>
						<Link href={'/'}>
							<a className={classes.link}>Repo<span>sitory</span></a>
						</Link>
						<div className={classes.box} onClick={handleShowBasket}>
							<TiShoppingCart className={classes.cart} />
							{
								orders.length ? <span className={classes.quantity}>{orders.length}</span> : null
							}
						</div>
					</div>
				</div>
			</Container>
		</header>
	)
}

export default Header
