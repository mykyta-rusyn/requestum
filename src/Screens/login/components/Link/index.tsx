import React from 'react';
import {Text} from 'react-native';

import {styles} from './styles';

type Props = {
	title: string;
	onPress?: () => void
}

export const Link: React.FC<Props> = React.memo((props) => {
	return (
		<Text
			style={styles.text}
			onPress={props.onPress}
		>
			{props.title}
		</Text>
	);
});
