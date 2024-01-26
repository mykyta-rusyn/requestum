import React from 'react';

import Logo from './res/logo.svg';

import {Button} from '@requestum/general';
import {WelcomeScreenProps} from '@requestum/navigation';
import styled from 'styled-components/native';

const RootView = styled.View`
	flex: 1;
	justify-content: space-between;
	padding: ${({theme}) => `
		${theme.windowHeight * 0.26}px
		35px
		${theme.windowHeight * 0.09}px
		35px
	`};
	align-items: center;
`;
const ButtonView = styled.View`
	gap: 15px;
	width: 100%;
`;

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({navigation}) => {
	
	const onLoginPress = React.useCallback(() => (
		navigation.navigate('Login', {flow: 'login'})
	), [navigation]);
	
	const onSignupPress = React.useCallback(() => (
		navigation.navigate('Login', {flow: 'signup'})
	), [navigation]);

	return (
		<RootView>
			<Logo />
			<ButtonView>
				<Button
					title='Login'
					onPress={onLoginPress}
				/>
				<Button
					dark
					title='Register'
					onPress={onSignupPress}
				/>
			</ButtonView>
		</RootView>
	);
};
