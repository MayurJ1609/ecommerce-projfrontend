import { API } from '../../backend';

export const getmeToken = (userId, token) => {
	console.log('PaymentBHelper - UserId : ' + userId + ' | token : ' + token);
	return fetch(`${API}/payment/gettoken/${userId}`, {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	})
		.then((response) => response.json()) //WARNING: Do not remove this line, it will break
		.then((response) => {
			return response;
		})
		.catch((err) => {
			console.log(err);
		});
};

export const processPayment = (userId, token, paymentInfo) => {
	return (
		fetch(`${API}/payment/braintree/${userId}`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(paymentInfo),
		})
			.then((response) => {
				console.log('Response from ProcessPayment API JSON: ');
				return response.json();
			})
			// .then((response) => {
			// 	console.log('Response from ProcessPayment API : ' + response);
			// return response.json();
			// })
			.catch((err) => console.log('error in PaymentBHelper error : ' + err))
	);
};
