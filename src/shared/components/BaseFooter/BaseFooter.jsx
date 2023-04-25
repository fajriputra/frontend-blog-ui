import { Typography } from 'antd';

import BaseContainer from '../BaseContainer/BaseContainer';

import './BaseFooter.scss';

const BaseFooter = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className='base__footer'>
			<BaseContainer>
				<Typography.Text
					style={{
						color: 'rgba(0, 0, 0, 0.6)',
						fontSize: 14,
						padding: '40px 0',
						textAlign: 'center',
					}}
				>
					© {currentYear}. All rights reserved.
				</Typography.Text>
			</BaseContainer>
		</footer>
	);
};

export default BaseFooter;
