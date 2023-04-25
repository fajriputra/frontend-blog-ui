import { Col, Row, Typography } from 'antd';

import BaseContainer from '../../../../shared/components/BaseContainer/BaseContainer';

import './CategoryHeadline.scss';

const CategoryHeadline = () => {
	return (
		<div className='category__headline'>
			<Row>
				<Col xs={24} lg={0}>
					<BaseContainer className='category__container'>
						<Row>
							<Col xs={24} lg={0}>
								<div className='copywriting'>
									<Typography.Title level={2} className='copywriting__heading'>
										Informasi Tentang Game
									</Typography.Title>
									<Typography.Text className='copywriting__description'>
										Temukan pembahasan penting seputar game yang dikemas dalam artikel secara menarik.
									</Typography.Text>
								</div>
							</Col>
							<Col xs={24} lg={0}>
								<div className='banner' />
							</Col>
						</Row>
					</BaseContainer>
				</Col>

				<Col xs={0} lg={24}>
					<BaseContainer className='category__container'>
						<Row>
							<Col xs={0} lg={12}>
								<div className='copywriting'>
									<Typography.Title level={2} className='copywriting__heading'>
										Informasi Tentang Game
									</Typography.Title>
									<Typography.Text className='copywriting__description'>
										Temukan pembahasan penting seputar game yang dikemas dalam artikel secara menarik.
									</Typography.Text>
								</div>
							</Col>
							<Col xs={0} lg={12}>
								<div className='banner' />
							</Col>
						</Row>
					</BaseContainer>
				</Col>
			</Row>
		</div>
	);
};

export default CategoryHeadline;
