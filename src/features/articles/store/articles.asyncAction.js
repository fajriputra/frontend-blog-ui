import { createAsyncThunk } from '@reduxjs/toolkit';

import articlesApi from '../datasource/articles.datasource';

export const getArticlesAsyncAction = createAsyncThunk('BLOG-APP/articles/get', async (param, { rejectWithValue }) => {
	try {
		const response = await articlesApi.getArticles(param);
		return response;
	} catch (error) {
		return rejectWithValue(JSON.parse(JSON.stringify(error)));
	}
});

export const getArticleAsyncAction = createAsyncThunk('BLOG-APP/articles/read', async (param, { rejectWithValue }) => {
	try {
		const response = await articlesApi.getArticle(param);
		return response;
	} catch (error) {
		return rejectWithValue(JSON.parse(JSON.stringify(error)));
	}
});
