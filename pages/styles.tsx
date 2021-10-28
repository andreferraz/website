import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import StyleGuide from 'components/style-guide';
import { GetServerSideProps } from 'next';

interface Props {
	skip: boolean;
}

const Styles: React.FC<Props> = ({ skip }) => {
	const router = useRouter();
	useEffect(() => {
		if (skip) router.push('/');
	}, [skip, router]);

	return <StyleGuide />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	if (context.req && context.req.headers.host.includes('localhost')) {
		return {
			props: {
				skip: false,
			},
		};
	}
	return {
		props: {
			skip: true,
		},
	};
};

export default Styles;
