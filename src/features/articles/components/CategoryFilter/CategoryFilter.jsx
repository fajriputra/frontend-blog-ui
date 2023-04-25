import React, { useEffect, useState } from 'react';

import { FaSearch } from 'react-icons/fa';

import { useDebounceFn, useResponsive } from 'ahooks';

import { Col, Empty, Input, Row, Select } from 'antd';

const CategoryFilter = (props) => {
	const { categoryOptions, data, onChange } = props;

	const responsive = useResponsive();

	const [keywords, setKeywords] = useState('');
	const [state, setState] = useState({ search: '', category: '' });

	const searchDebounce = useDebounceFn(
		(v) => {
			internalHandleOnChange({ search: v });
		},
		{
			wait: 500,
		},
	);

	const internalHandleOnChange = (param) => {
		const tmpData = JSON.parse(JSON.stringify(state));

		if (param.category) {
			tmpData.category = param.category;
		}
		if (typeof param.search === 'string') {
			tmpData.search = param.search;
		}
		setState({ ...tmpData });
		onChange && onChange({ ...tmpData });
	};

	useEffect(() => {
		setState({
			category: data?.category,
			search: data?.search,
		});
		setKeywords(data?.search);
	}, [data]);

	return (
		<div style={{ margin: '30px auto 15px' }}>
			<Row gutter={[24, 24]}>
				<Col xs={24} lg={12}>
					<Input
						allowClear
						onChange={(v) => {
							setKeywords(v.target.value);
							searchDebounce.run(v.target.value);
						}}
						prefix={<FaSearch />}
						placeholder='Input keywords'
						id='input_keyword'
						value={keywords}
					/>
				</Col>
				<Col flex={responsive['md'] ? '1' : undefined} xs={24}>
					<Select
						showSearch
						allowClear
						filterOption={(inpt, opt) => (opt?.label.toUpperCase()?.includes(inpt.toUpperCase()) ? true : false)}
						maxTagCount='responsive'
						notFoundContent={<Empty style={{ padding: 16 }} description='Category is not found' />}
						onChange={(v) => internalHandleOnChange({ category: v })}
						options={categoryOptions}
						placeholder='Select Category'
						style={{ width: '100%' }}
						value={state.category}
					/>
				</Col>
			</Row>
		</div>
	);
};

export default CategoryFilter;
