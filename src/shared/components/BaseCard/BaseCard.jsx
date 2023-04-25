import { Link } from 'react-router-dom';

import { Col, Row, Typography } from 'antd';

import { convertToSlug, formatingTag, viewsFormat } from '../../helpers/index';

import './BaseCard.scss';
import { EyeFilled } from '@ant-design/icons';

const Card = (props) => {
	const { data } = props;

	return (
		<Row className='base__card'>
			<Col xs={24}>
				<Row className='base__card__image'>
					<Col xs={24}>
						<Link to={`/articles/${convertToSlug(String(data.category?.category_path))}/${data?.slug}`}>
							<img src={data.image_url} alt='Artikel Image' />
						</Link>
					</Col>
				</Row>
			</Col>

			<Col xs={24}>
				<div className='copywriting copywriting--absolute'>
					<Row align='middle' justify='space-between'>
						{data.category && <Typography.Text className='tag'>{formatingTag(data.category.name)}</Typography.Text>}
						<Typography.Text style={{ color: '#ffffff' }}>
							<EyeFilled style={{ paddingRight: 4, paddingTop: 3 }} />
							{viewsFormat(data.views)} Views
						</Typography.Text>
					</Row>
					<Typography.Title level={4} className='title'>
						{data.title}
					</Typography.Title>
				</div>
			</Col>
		</Row>
	);
};

export default Card;
