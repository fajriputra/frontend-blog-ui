export class DatasourceQuery {
	constructor(param) {
		this.currentPage = param.currentPage;
		this.category = param.category;
		this.perPage = param.perPage;
		this.total = param.total;
		this.search = param.search;
	}
	currentPage = 1;
	category = '';
	perPage = 10;
	total = 0;
	search = '';
}

export class DatasourceResponse {
	data = null;
	message = '';
	meta = DatasourceQuery;
}
