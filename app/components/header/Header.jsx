import classes from './Header.module.scss'
import Container from '../container/Container'
import Link from 'next/link'
import {SiShopify} from 'react-icons/si'

const Header = () => {
	return (
		<header className={classes.header}>
			<Container>
				<div className={classes.row}>
					<SiShopify className={classes.logo} size={40} />
					<Link href={'/'}>
						<a className={classes.link}>Repo<span>sitory</span></a>
					</Link>
				</div>
			</Container>
		</header>
	)
}

export default Header
