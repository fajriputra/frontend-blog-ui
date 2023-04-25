import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { articleSlice } from '../../features/articles/store/articles.slice';
import { categorySlice } from '../store/categories/categories.slice';

const combinedReducer = combineReducers({
	articles: articleSlice.reducer,
	categories: categorySlice.reducer,
});

export const reduxStore = configureStore({
	reducer: combinedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			immutableCheck: false,
			serializableCheck: false,
		}),
	devTools: {
		trace: false,
	},
});
