import { TailSpin } from  'react-loader-spinner'
import classes from './Preloader.module.scss'

const Preloader = () => {
	return (
		<div className={classes.preloader}>
			<TailSpin
				height="100"
				width="100"
				color='grey'
				ariaLabel='loading'
			/>
		</div>
	)
}

export default Preloader
