import React from 'react';
import {createNavigationContainerRef, DefaultTheme, NavigationContainer, Theme} from '@react-navigation/native';

import {LoginStack} from '../LoginStack';
import {LoginStackParamList} from '../LoginStack/Params';
import {MainStack} from '../MainStack';

type Props = {
	isLoaded: boolean;
	isUserLoggedIn: boolean
}

const theme: Theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		background: 'transparent'
	}
};

export const navigation = createNavigationContainerRef<LoginStackParamList>();

export const Navigator: React.FC<Props> = ({isLoaded, isUserLoggedIn}) => {
	return (
		<NavigationContainer ref={navigation} theme={theme}>
			{isLoaded
				? isUserLoggedIn
					? <MainStack />
					: <LoginStack />
				: null
			}
		</NavigationContainer>
	);
};
