import { createSlice } from '@reduxjs/toolkit';

import { getArticlesAsyncAction, getArticleAsyncAction } from './articles.asyncAction';

const initialState = {
	status_GET: 'IDLE',
	message: '',
	data: [],
	detail: {},
	meta: {
		currentPage: 1,
		perPage: 10,
		total: 0,
		search: '',
		category: '',
	},
};

export const articleSlice = createSlice({
	name: 'BLOG-APP/articleSlice',
	initialState,
	reducers: {
		resetAll(state) {
			state = initialState;
			return state;
		},
		resetStatus(state, action) {
			state.message = '';
			state.status_GET = action.payload === 'GET' ? 'IDLE' : state.status_GET;
			return state;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getArticlesAsyncAction.pending, (state) => {
			state.status_GET = 'LOADING';
		});
		builder.addCase(getArticlesAsyncAction.fulfilled, (state, { payload }) => {
			state.status_GET = 'SUCCESS';
			state.data = payload.data;
			state.meta = payload.meta;
		});
		builder.addCase(getArticlesAsyncAction.rejected, (state, { payload }) => {
			state.status_GET = 'FAILED';
			state.message = payload;
		});
		builder.addCase(getArticleAsyncAction.pending, (state) => {
			state.status_GET = 'LOADING';
		});
		builder.addCase(getArticleAsyncAction.fulfilled, (state, { payload }) => {
			state.status_GET = 'SUCCESS';
			state.detail = payload.data;
		});
		builder.addCase(getArticleAsyncAction.rejected, (state, { payload }) => {
			state.status_GET = 'FAILED';
			state.message = payload;
		});

		return builder;
	},
});
