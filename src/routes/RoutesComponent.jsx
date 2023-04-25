import { useRoutes } from 'react-router-dom';

import { entryRoutes } from './entry.routes';

const RoutesComponent = () => {
	const route = useRoutes(entryRoutes);

	return route;
};

export default RoutesComponent;
