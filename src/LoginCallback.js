import React from 'react';
import { Link } from 'react-router-dom';
import qs from 'qs';

const LoginCallback = ({ location }) => {
	const query = qs.parse(location.search, {
		ignoreQueryPrefix: true
	});
	const code = query.code;
	console.log(`[DEBUG] code is : ${code}`);
	return (
		<>
			<Link to="/">
				<button>이동하기</button>
			</Link>
		</>
	);
};

export default LoginCallback;