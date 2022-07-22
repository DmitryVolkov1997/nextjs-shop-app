import '../app/components/assets/styles/globals.scss'
import Layout from '../app/components/layout/Layout'
import { Provider } from 'react-redux'
import { store } from '../app/store/store'

function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	)
}

export default MyApp
