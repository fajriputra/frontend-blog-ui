import { createAsyncThunk } from '@reduxjs/toolkit';

import categoriesApi from '../../datasource/categories.datasource';

export const getCategoriesAsyncAction = createAsyncThunk(
	'BLOG-APP/categories/get',
	async (param, { rejectWithValue }) => {
		try {
			const response = await categoriesApi.getCategories(param);
			return response;
		} catch (error) {
			return rejectWithValue(JSON.parse(JSON.stringify(error)));
		}
	},
);

export const getCategoryAsyncAction = createAsyncThunk('BLOG-APP/categories/read', async (id, { rejectWithValue }) => {
	try {
		const response = await categoriesApi.getCategory(id);
		return response;
	} catch (error) {
		return rejectWithValue(JSON.parse(JSON.stringify(error)));
	}
});
