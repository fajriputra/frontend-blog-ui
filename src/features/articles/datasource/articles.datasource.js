import { GET } from '../../../shared/datasource/api.datasource';

const getArticles = async (param) => {
	return await GET('/public/articles', param, {});
};

const getArticle = async (param) => {
	return await GET(`/public/articles/${param.category_path}/${param.slug}`, {}, {});
};

export default {
	getArticles,
	getArticle,
};
