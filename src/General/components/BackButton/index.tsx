import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';

import Back from './res/backButton.svg';
import {styles} from './styles';

export const BackButton: React.FC = React.memo(() => {
	const onPress = React.useCallback(() => {
		require('@requestum/navigation').Nav.goBack();
	}, []);

	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<Back style={styles.image} />
		</TouchableWithoutFeedback>
	);
});