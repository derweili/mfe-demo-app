import React from 'react';
import { mount } from 'marketing/MarketingApp';
import { useHistory } from 'react-router-dom';

export default () => {
	// get ref
	const ref = React.useRef(null);
	const history = useHistory();

	// use effect
	React.useEffect(() => {
		const { onParentNavigate } = mount(ref.current, {
			onNavigate: ({pathname: nextPathname}) => {
				const {pathname} = history.location;

				if( pathname !== nextPathname ) {
					history.push(nextPathname);
				}
			}
		})

		history.listen(onParentNavigate);

		return () => {
			history.listen(null);
		}
	}, []);

	return <div ref={ref}></div>;
}