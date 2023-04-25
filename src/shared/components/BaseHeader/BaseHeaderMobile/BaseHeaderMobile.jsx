import { Row, Typography } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

import BaseContainer from '../../BaseContainer/BaseContainer';

import './BaseHeaderMobile.scss';

const BaseHeaderMobile = (props) => {
	const { handleClose, isVisible = false } = props;

	return (
		<div className={isVisible ? 'base__header__mobile' : 'base__header__mobile--close'}>
			<BaseContainer
				style={{
					padding: 16,
				}}
			>
				<Row justify='space-between' align='middle'>
					<div className='base__header__mobile__logo'>
						<Typography.Title level={4}>Ahmad Fauzi</Typography.Title>
					</div>
					<CloseOutlined style={{ fontSize: 20 }} onClick={handleClose} />
				</Row>
			</BaseContainer>
		</div>
	);
};

export default BaseHeaderMobile;
