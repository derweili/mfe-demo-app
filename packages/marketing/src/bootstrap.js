import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history'
import App from './App';

// Mount Function
const mount = (el, { onNavigate, defaultHistory }) => {
	const history = defaultHistory || createMemoryHistory();

	if( onNavigate ) {
		history.listen(onNavigate)
	}

	ReactDOM.render(
		<App history={history} />,
		el
	);

	return {
		onParentNavigate({pathname: nextPathname}) {
			console.log('Containber just navigated')
			const { pathname } = history.location;
			if( pathname !== nextPathname ) {
				history.push(nextPathname);
			}
		}
	}
}


// if we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
	const devRoot = document.querySelector('#_marketing-dev-root');

	if (devRoot) {
		mount(devRoot, {defaultHistory: createBrowserHistory()});
	}
}

export { mount };