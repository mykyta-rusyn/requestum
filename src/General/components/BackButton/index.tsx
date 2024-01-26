import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';

import Back from './res/backButton.svg';

import styled from 'styled-components/native';

const BackView = styled(Back)`
	position: absolute;
	top: ${({theme}) => theme.windowHeight * 0.09}px;
	left: 24px;
	height: 24px;
	width: 24px;
`;

export const BackButton: React.FC = React.memo(() => {
	const onPress = React.useCallback(() => {
		require('@requestum/navigation').Nav.goBack();
	}, []);

	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<BackView />
		</TouchableWithoutFeedback>
	);
});