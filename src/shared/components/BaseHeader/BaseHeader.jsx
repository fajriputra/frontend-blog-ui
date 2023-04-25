import React, { useState } from 'react';

import { Row, Col, Typography } from 'antd';
import { BarsOutlined } from '@ant-design/icons';

import BaseContainer from '../BaseContainer/BaseContainer';
import BaseHeaderMobile from './BaseHeaderMobile/BaseHeaderMobile';

import './BaseHeader.scss';

const BaseHeader = () => {
	const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

	const handleMobileMenu = (isVisible = false) => setMobileMenuVisible(isVisible);

	return (
		<React.Fragment>
			<BaseHeaderMobile isVisible={mobileMenuVisible} handleClose={() => handleMobileMenu(false)} />

			<header className='base__header'>
				<BaseContainer className='base__header__container'>
					<Row align='middle' justify='space-between'>
						<Col>
							<div className='base__header__logo'>
								<Typography.Title level={4}>Ahmad Fauzi</Typography.Title>
							</div>
						</Col>
						<Col lg={0}>
							<BarsOutlined onClick={() => handleMobileMenu(true)} style={{ fontSize: 25 }} />
						</Col>
					</Row>
				</BaseContainer>
			</header>

			{/* <div className='leverage' /> */}
		</React.Fragment>
	);
};

export default BaseHeader;
