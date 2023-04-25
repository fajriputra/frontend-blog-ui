import { Navigate, Outlet } from 'react-router-dom';

import { articlesRoutes } from './articles/articles.routes';

import BaseLayout from '../shared/components/BaseLayout/BaseLayout';
import BaseNotFound from '../shared/components/BaseNotFound/BaseNotFound';

export const AppRoutes = [
	{
		children: [
			{
				children: [
					{
						children: articlesRoutes,
						element: <Outlet />,
					},
				],
				element: <Outlet />,
			},
			{
				element: <BaseNotFound title='Page' />,
				path: '404',
			},
			{
				element: <Navigate replace to='/404' />,
				path: '*',
			},
		],
		element: <BaseLayout />,
	},
];
