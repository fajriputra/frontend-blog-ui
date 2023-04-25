export const formatingTag = (value) => {
	if (!value) return '';

	return value.replace(/-/g, ' ').replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));
};
