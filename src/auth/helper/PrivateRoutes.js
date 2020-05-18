import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAutheticated } from './index';

const PrivateRoute = ({ component: Component, ...rest }) => {
	console.log('Understanding ...rest : ' + JSON.stringify(rest));
	//{"path":"/user/dashboard","exact":true,"location":{"pathname":"/user/dashboard","search":"","hash":""},"computedMatch":{"path":"/user/dashboard","url":"/user/dashboard","isExact":true,"params":{}}}
	return (
		<Route
			{...rest} // understand here
			render={(
				props //understand props
			) =>
				isAutheticated() ? (
					<Component {...props} />
				) : (
					<Redirect
						to={{
							pathname: '/signin',
							state: { from: props.location },
						}}
					/>
				)
			}
		/>
	);
};

export default PrivateRoute;
