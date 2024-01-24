import React from 'react';
import {Text, View} from 'react-native';

import R from './res/R.svg';
import {styles} from './styles';

import {Button} from '@requestum/general';
import {HomeScreenProps} from '@requestum/navigation';
import {useAppDispatch, useAppSelector, userState} from '@requestum/states';

export const HomeScreen: React.FC<HomeScreenProps> = () => {
	const {email} = useAppSelector(userState.selectors.user)!;
	const dispatch = useAppDispatch();

	const onLogout = React.useCallback(() => {
		dispatch(userState.actions.logout());
	}, [dispatch]);

	return (
		<View style={styles.root}>
			<R style={styles.R} />
			<View style={styles.titleContainer}>
				<Text style={styles.title}>
					You’re loggen in now 
				</Text>
				<Text style={styles.userName}>
					{email}
				</Text>
			</View>

			<Text style={styles.appContent}>
				Now you can see the app content!
			</Text>

			<Button
				title='Log out'
				onPress={onLogout}
			/>
		</View>
	);
};
