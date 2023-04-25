import { Helmet } from 'react-helmet';

import { coreConfig } from '../../config/core.config';

const BasePageMetaHead = (props) => {
	return (
		<Helmet>
			<title>
				{coreConfig.APP.TITLE} {props.title ? `| ${props.title}` : 'asd'}
			</title>
		</Helmet>
	);
};

export default BasePageMetaHead;
