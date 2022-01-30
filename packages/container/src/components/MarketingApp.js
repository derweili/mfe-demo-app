import React from 'react';
import { mount } from 'marketing/MarketingApp';

export default () => {
	// get ref
	const ref = React.useRef(null);

	// use effect
	React.useEffect(() => {
		mount(ref.current)
	}, [ref])

	return <div ref={ref}></div>;
}