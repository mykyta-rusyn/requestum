import React from 'react';
import {ImageBackground, StatusBar, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';

import {loadUser, nullReturning, Theme} from '@requestum/general';
import {Navigator} from '@requestum/navigation';
import {store, useAppDispatch, useAppSelector, userState} from '@requestum/states';
import {hideAsync, preventAutoHideAsync} from 'expo-splash-screen';

preventAutoHideAsync().catch(nullReturning);

function AppInit(): React.ReactNode {
	const [isLoaded, setIsLoaded] = React.useState(false);
	const isUserLoggedIn = !!useAppSelector(userState.selectors.user);
	const dispatch = useAppDispatch();

	React.useEffect(() => {
		Promise.allSettled([
			loadUser(),
			Theme.loadFonts()
		]).then(([preloadUser]) => {
			if (preloadUser.status === 'fulfilled' && preloadUser.value !== undefined) {
				dispatch(userState.actions.login(preloadUser.value));
			}

			setIsLoaded(true);
		}).finally(hideAsync);
	}, [dispatch]);

	return <Navigator isLoaded={isLoaded} isUserLoggedIn={isUserLoggedIn} />;
}

export default function App(): React.ReactNode {
	return (
		<ImageBackground
			source={require('./assets/splash.png')}
			style={StyleSheet.absoluteFill}
		>
			<StatusBar
				translucent
				backgroundColor={'transparent'}
				barStyle={'light-content'}
			/>
			<Provider store={store}>
				<AppInit />
			</Provider>
		</ImageBackground>
	);
}
