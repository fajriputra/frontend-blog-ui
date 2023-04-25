import React from 'react';

import BasePageLoader from '../../shared/components/BasePageLoader/BasePageLoader';
import BasePageMetaHead from '../../shared/components/BasePageMetaHead/BasePageMetaHead';

export const articlesRoutes = [
	{
		index: true,
		element: (
			<React.Fragment>
				<BasePageMetaHead title='List Article Page' />
				<BasePageLoader pagePath='articles/PageListArticle' />
			</React.Fragment>
		),
	},
	{
		path: ':category_path/:slug',
		element: (
			<React.Fragment>
				<BasePageMetaHead title='Detail Article Page' />
				<BasePageLoader pagePath='articles/PageDetailArticle' />
			</React.Fragment>
		),
	},
];
