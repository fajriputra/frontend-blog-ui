import { createSlice } from '@reduxjs/toolkit';

import { getCategoriesAsyncAction, getCategoryAsyncAction } from '../categories/categories.asyncAction';

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
		filter: [],
	},
};

export const categorySlice = createSlice({
	name: 'BLOG-APP/categorySlice',
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
		builder.addCase(getCategoriesAsyncAction.pending, (state) => {
			state.status_GET = 'LOADING';
		});
		builder.addCase(getCategoriesAsyncAction.fulfilled, (state, { payload }) => {
			state.status_GET = 'SUCCESS';
			state.data = payload.data;
			state.meta = payload.meta;
		});
		builder.addCase(getCategoriesAsyncAction.rejected, (state, { payload }) => {
			state.status_GET = 'FAILED';
			state.message = payload;
		});
		builder.addCase(getCategoryAsyncAction.pending, (state) => {
			state.status_GET = 'LOADING';
		});
		builder.addCase(getCategoryAsyncAction.fulfilled, (state, { payload }) => {
			state.status_GET = 'SUCCESS';
			state.detail = payload.data;
		});
		builder.addCase(getCategoryAsyncAction.rejected, (state, { payload }) => {
			state.status_GET = 'FAILED';
			state.message = payload;
		});

		return builder;
	},
});
