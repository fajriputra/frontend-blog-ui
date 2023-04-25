import React from 'react';

import dayjs from 'dayjs';

import { Avatar, Col, Divider, Row, Typography } from 'antd';

import { formatingTag, generateColorHsl, getInitials, getRange, viewsFormat } from '../../../../shared/helpers';

import BaseHTMLRender from '../../../../shared/components/BaseHTMLRender/BaseHTMLRender';

import './ArticleCopywriting.scss';
import { EyeFilled } from '@ant-design/icons';

const ArticleCopywriting = (props) => {
	const { content } = props;

	const saturationRange = getRange(50, 10);
	const lightnessRange = getRange(50, 10);

	const username = Object.keys(content).length > 0 ? content?.author?.username : '';
	const initialsName = getInitials(username);
	const bgColor = generateColorHsl(username, saturationRange, lightnessRange);

	return (
		<div className='article__copywriting'>
			<Row gutter={[0, 30]}>
				<Col xs={24}>
					<Row align='middle'>
						<Row align='middle'>
							<Avatar
								size={40}
								style={{
									marginRight: 8,
									backgroundColor: bgColor,
									verticalAlign: 'middle',
									fontWeight: 500,
									fontSize: 14,
								}}
							>
								{initialsName}
							</Avatar>
							<Typography.Text strong>{username}</Typography.Text>
						</Row>
						<Divider type='vertical' style={{ height: 40, margin: '0 20px' }} />
						<Typography.Text className='article__copywriting__tag'>
							{formatingTag(content.category?.name)}
						</Typography.Text>
						<Divider type='vertical' style={{ height: 40, margin: '0 20px' }} />
						<Typography.Text style={{ color: '#000' }}>
							<EyeFilled style={{ paddingRight: 4, paddingTop: 3 }} />
							{viewsFormat(content.views)} Views
						</Typography.Text>
					</Row>
				</Col>
				<Col xs={24}>
					<Typography.Title level={2} className='article__copywriting__title'>
						{formatingTag(content.title)}
					</Typography.Title>
				</Col>
				<Col xs={24}>
					<div className='article__copywriting__banner'>
						<img
							src={content.image_url}
							alt={`Article ${formatingTag(content.title)}`}
							className='article__banner__image'
						/>
					</div>

					<div className='article__content'>
						<BaseHTMLRender content={content.description} />
					</div>

					<Typography.Title level={5} style={{ marginTop: 18, fontSize: 14 }}>
						Last updated : {dayjs(content.updatedAt).format('DD MMMM YYYY')}
					</Typography.Title>
				</Col>
			</Row>
		</div>
	);
};

export default ArticleCopywriting;
