import React from 'react';
import {View} from 'react-native';

import Logo from './res/logo.svg';
import {styles} from './styles';

import {Button} from '@requestum/general';
import {WelcomeScreenProps} from '@requestum/navigation';

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({navigation}) => {
	
	const onLoginPress = React.useCallback(() => (
		navigation.navigate('Login', {flow: 'login'})
	), [navigation]);
	
	const onSignupPress = React.useCallback(() => (
		navigation.navigate('Login', {flow: 'signup'})
	), [navigation]);

	return (
		<View style={styles.root}>
			<Logo />
			<View style={styles.buttons}>
				<Button
					title='Login'
					onPress={onLoginPress}
				/>
				<Button
					dark
					title='Register'
					onPress={onSignupPress}
				/>
			</View>
		</View>
	);
};
