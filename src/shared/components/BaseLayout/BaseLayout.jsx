import React from 'react';
import { Outlet } from 'react-router-dom';

import BaseHeader from '../BaseHeader/BaseHeader';
import BaseFooter from '../BaseFooter/BaseFooter';

const BaseLayout = () => {
	return (
		<React.Fragment>
			<BaseHeader />
			<main>
				<Outlet />
			</main>
			<BaseFooter />
		</React.Fragment>
	);
};

export default BaseLayout;
