import './BaseContainer.scss';

const BaseContainer = (props) => {
	const { children, style, className } = props;

	return (
		<div className={`base__container ${className}`} style={style}>
			{children}
		</div>
	);
};

export default BaseContainer;
