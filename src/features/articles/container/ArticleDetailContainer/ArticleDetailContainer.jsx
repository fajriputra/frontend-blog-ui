import React, { useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

import { useResponsive } from 'ahooks';

import { Breadcrumb, Col, FloatButton, Row } from 'antd';

import { formatingTag } from '../../../../shared/helpers';

import { useArticles } from '../../hooks/useArticles';

import BaseContainer from '../../../../shared/components/BaseContainer/BaseContainer';
import BasePageNotFound from '../../../../shared/components/BaseNotFound/BaseNotFound';
import BaseLoaderFull from '../../../../shared/components/BaseLoaderFull/BaseLoaderFull';

import ArticleCopywriting from '../../components/ArticleCopywriting/ArticleCopywriting';

const ArticleDetailContainer = () => {
	const { pathname } = useLocation();
	const { category_path, slug } = useParams();

	const responsive = useResponsive();

	const articles = useArticles();

	useEffect(() => {
		if (category_path && slug) {
			articles.getDetail({ category_path, slug });

			return () => {
				articles.resetStatus('GET');
			};
		}
	}, [category_path, slug]);

	return (
		<section className='article__detail' style={{ paddingTop: 30 }}>
			<BaseContainer style={{ padding: responsive['lg'] ? 0 : '0 16px' }}>
				{articles.state.status_GET === 'FAILED' && <BasePageNotFound title='Data' />}
				{articles.state.status_GET === 'SUCCESS' && (
					<React.Fragment>
						<Row>
							<Col xs={24}>
								<Breadcrumb
									items={[
										{
											title: <Link to='/articles'>Articles</Link>,
										},
										{
											title: articles.state.detail.category?.name,
										},
										{
											title: formatingTag(articles.state.detail.title),
										},
									]}
								/>
							</Col>
						</Row>
						<ArticleCopywriting content={articles.state.detail} />
					</React.Fragment>
				)}
			</BaseContainer>

			<FloatButton
				href={`https://api.whatsapp.com/send?text=Cek artikel terkait game yang kamu suka yuk! https://prismatic-faloodeh-185ca9.netlify.app/${pathname}`}
				target='_blank'
				icon={
					<img
						src='https://res.cloudinary.com/ddo4hnmnv/image/upload/v1682330311/v6xhrslieojwxfdlbisf.png'
						width='100%'
					/>
				}
			/>
		</section>
	);
};

export default ArticleDetailContainer;
