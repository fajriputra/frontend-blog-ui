import React, { useEffect, useState } from 'react';

import { useResponsive } from 'ahooks';

import { Col, Pagination, Row } from 'antd';

import { useCateogories } from '../../../../shared/hooks/useCategories/useCategories';
import { useArticles } from '../../hooks/useArticles';

import CategoryHeadline from '../../components/CategoryHeadline/CategoryHeadline';
import CategoryFilter from '../../components/CategoryFilter/CategoryFilter';

import BaseContainer from '../../../../shared/components/BaseContainer/BaseContainer';
import Card from '../../../../shared/components/BaseCard/BaseCard';
import BaseNotFound from '../../../../shared/components/BaseNotFound/BaseNotFound';
import BaseLoaderFull from '../../../../shared/components/BaseLoaderFull/BaseLoaderFull';

const ArticleListContainer = () => {
	const responsive = useResponsive();
	const articles = useArticles();
	const categories = useCateogories();

	const [page, setPage] = useState(1);
	const [filterValue, setFilterValue] = useState({
		search: '',
		category: undefined,
	});

	const CATEGORY_OPTIONS = categories.state.data.map((category) => ({ label: category.name, value: category.name }));

	useEffect(() => {
		articles.getList({
			currentPage: page,
			perPage: 10,
			...(filterValue.search && { search: filterValue.search }),
			...(filterValue.category && {
				category: filterValue.category,
			}),
		});

		return () => {
			articles.resetStatus('GET');
		};
	}, [page, filterValue.search, filterValue.category]);

	useEffect(() => {
		categories.getList();

		return () => {
			categories.resetStatus('GET');
		};
	}, []);

	return (
		<section className='section__category'>
			<CategoryHeadline />

			<BaseContainer style={{ padding: responsive['lg'] ? 0 : '0 16px' }}>
				<CategoryFilter
					categoryOptions={CATEGORY_OPTIONS}
					onChange={(v) => {
						setFilterValue(v);
						setPage(1);
					}}
					data={filterValue}
				/>

				{articles.state.status_GET === 'SUCCESS' && (
					<Row
						gutter={[
							{ xs: 0, md: 16, lg: 16 },
							{ xs: 16, md: 16, lg: 16 },
						]}
						justify={articles.state.data.length > 0 ? 'start' : 'center'}
					>
						{articles.state.data.length > 0 ? (
							articles.state.data.map((article) => (
								<Col key={article._id} xs={24} md={8} lg={6}>
									<Card data={article} />
								</Col>
							))
						) : (
							<BaseNotFound title='Data' />
						)}
					</Row>
				)}
				{articles.state.data.length > 0 && (
					<Row justify='center' align='middle' style={{ marginTop: 50 }}>
						<Pagination
							showSizeChanger={false}
							total={articles.state.meta.total}
							current={page}
							onChange={(v) => setPage(v)}
						/>
					</Row>
				)}
			</BaseContainer>
		</section>
	);
};

export default ArticleListContainer;
