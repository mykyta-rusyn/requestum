import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {MainStackParamList} from './Params';

import {HomeScreen} from '@requestum/screens';

const MainNav = createStackNavigator<MainStackParamList>();

export function MainStack(): React.ReactNode {
	return (
		<MainNav.Navigator
			screenOptions={{
				headerShown: false
			}}
		>
			<MainNav.Screen
				component={HomeScreen}
				name='Home'
			/>
		</MainNav.Navigator>
	);
}
