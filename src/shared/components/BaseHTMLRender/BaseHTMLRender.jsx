import DOMPurify from 'isomorphic-dompurify';

const BaseHTMLRender = ({ content }) => {
	return <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}></div>;
};

export default BaseHTMLRender;
