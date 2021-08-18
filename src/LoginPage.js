import React from 'react';

const LoginPage = () => {
	const clientID = process.env.FT_CLIENT_ID;
	const callbackURL = "http://localhost:3000/logincb";
	const url = `https://api.intra.42.fr/oauth/authorize?client_id=${clientID}&redirect_uri=${callbackURL}&response_type=code`;

	return (
		<button>
			<a href={url}>login with 42</a>
		</button>
	);
};

export default LoginPage;