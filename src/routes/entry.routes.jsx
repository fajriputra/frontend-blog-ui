import { Navigate } from 'react-router-dom';

import { AppRoutes } from './app.routes';

import BaseNotFound from '../shared/components/BaseNotFound/BaseNotFound';

export const entryRoutes = [
	{
		element: <Navigate to='/articles' />,
		index: true,
	},
	{
		children: AppRoutes,
		path: '/articles',
	},
	{
		element: <BaseNotFound title='Page' />,
		path: '404',
	},
];
