import { GET } from '../../shared/datasource/api.datasource';

const getCategories = async () => {
	return await GET('/public/categories', {}, {});
};

const getCategory = async (id) => {
	return await GET(`/public/categories/${id}`, {}, {});
};

export default {
	getCategories,
	getCategory,
};
