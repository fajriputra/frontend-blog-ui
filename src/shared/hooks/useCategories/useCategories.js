import { getCategoriesAsyncAction, getCategoryAsyncAction } from '../../store/categories/categories.asyncAction';
import { categorySlice } from '../../store/categories/categories.slice';

import { useReduxDispatch } from '../../hooks/useReduxDispatch/useReduxDispatch';
import { useReduxSelector } from '../../hooks/useReduxSelector/useReduxSelector';

export const useCateogories = () => {
	const dispatch = useReduxDispatch();
	const state = useReduxSelector((state) => state.categories);

	const resetAll = () => {
		dispatch(categorySlice.actions.resetAll());
	};

	const resetStatus = (param) => {
		dispatch(categorySlice.actions.resetStatus(param));
	};

	const getList = (param) => {
		dispatch(getCategoriesAsyncAction(param));
	};

	const getDetail = (param) => {
		dispatch(getCategoryAsyncAction(param));
	};

	return {
		state,
		resetStatus,
		resetAll,
		getList,
		getDetail,
	};
};
