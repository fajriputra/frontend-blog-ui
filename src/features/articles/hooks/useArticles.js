import { getArticlesAsyncAction, getArticleAsyncAction } from '../store/articles.asyncAction';
import { articleSlice } from '../store/articles.slice';

import { useReduxDispatch } from '../../../shared/hooks/useReduxDispatch/useReduxDispatch';
import { useReduxSelector } from '../../../shared/hooks/useReduxSelector/useReduxSelector';

export const useArticles = () => {
	const dispatch = useReduxDispatch();
	const state = useReduxSelector((state) => state.articles);

	const resetAll = () => {
		dispatch(articleSlice.actions.resetAll());
	};

	const resetStatus = (param) => {
		dispatch(articleSlice.actions.resetStatus(param));
	};

	const getList = (param) => {
		dispatch(getArticlesAsyncAction(param));
	};

	const getDetail = (param) => {
		dispatch(getArticleAsyncAction(param));
	};

	return {
		state,
		resetStatus,
		resetAll,
		getList,
		getDetail,
	};
};
