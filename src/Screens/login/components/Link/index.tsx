import React from 'react';

import styled from 'styled-components/native';

type Props = {
	title: string;
	onPress?: () => void
}

const Text = styled.Text`
	text-decoration-line: underline;
	color: ${({theme}) => theme.colors.mahenta};
	text-shadow: ${({theme}) => theme.colors.mahenta} 1px 0 10px;
	font-size: 11px;
`;

export const Link: React.FC<Props> = React.memo((props) => {
	return (
		<Text onPress={props.onPress}>
			{props.title}
		</Text>
	);
});
