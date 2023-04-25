export const viewsFormat = (numViews) => {
	let views;
	switch (true) {
		case numViews < 1000:
			views = numViews;
			break;
		case numViews < 1000000:
			views = (numViews / 1000).toFixed(2) + 'K';
			break;
		default:
			views = (numViews / 1000000).toFixed(2) + 'M';
			break;
	}
	return views;
};
