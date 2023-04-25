import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { App, ConfigProvider } from 'antd';

import { reduxStore } from './shared/store/redux';

import RoutesComponent from './routes/RoutesComponent';

import BaseNotFound from './shared/components/BaseNotFound/BaseNotFound';

import 'antd/dist/reset.css';
import '@shared/styles/styles.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
	<ConfigProvider renderEmpty={() => <BaseNotFound />}>
		<Provider store={reduxStore}>
			<BrowserRouter>
				<App>
					<RoutesComponent />
				</App>
			</BrowserRouter>
		</Provider>
	</ConfigProvider>,
);
