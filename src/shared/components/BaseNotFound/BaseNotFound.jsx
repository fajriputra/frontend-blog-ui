import { Card, Col, Image, Row, Space, Typography } from 'antd';

import './BaseNotFound.scss';

const BaseNotFound = (props) => {
	return (
		<Row gutter={[0, 24]}>
			<Col xs={24}>
				<Card bordered={false} className='base__notfound'>
					<Row align='middle' justify='center'>
						<Space align='center' direction='vertical'>
							<Image
								preview={false}
								src='https://res.cloudinary.com/ddo4hnmnv/image/upload/v1682065293/nqljos2zz2yr7dsk4aq6.png'
								style={{ width: 256 }}
							/>
							<Typography.Text strong>{props.title} Not Found</Typography.Text>
							<Typography.Text type='cool-grey-400'>
								Oops, the {props.title} you are looking for was not found
							</Typography.Text>
						</Space>
					</Row>
				</Card>
			</Col>
		</Row>
	);
};

export default BaseNotFound;
