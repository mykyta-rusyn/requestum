import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {LoginStackParamList} from './Params';

import {LoginScreen, WelcomeScreen} from '@requestum/screens';

const LoginNav = createStackNavigator<LoginStackParamList>();

export function LoginStack(): React.ReactNode {
	return (
		<LoginNav.Navigator
			screenOptions={{
				headerShown: false,
				cardStyle: {
					backgroundColor: 'transparent'
				},
			}}
		>
			<LoginNav.Screen
				component={WelcomeScreen}
				name='Welcome'
			/>
			<LoginNav.Screen
				component={LoginScreen}
				name='Login'
			/>
		</LoginNav.Navigator>
	);
}
