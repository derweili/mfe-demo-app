import React from 'react';
import { BrowserRouter, BrowserRouterProps } from 'react-router-dom';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';

export default () => {
	return (
		<BrowserRouter>
			<div>
				<Header />
				<MarketingApp />
			</div>
		</BrowserRouter>
	)
}