import React from 'react';

import R from './res/R.svg';

import {Button} from '@requestum/general';
import {HomeScreenProps} from '@requestum/navigation';
import {useAppDispatch, useAppSelector, userState} from '@requestum/states';
import styled from 'styled-components/native';

const RootView = styled.View`
	flex: 1;
	padding: 100% 35px 26% 35px;
	gap: 54px;
`;

const RView = styled(R)`
	position: absolute;
	top: 54px;
	right: 54px;
`;

const TitleContainerView = styled.View`
	gap: 8px;
	align-items: center;
`;

const TextTitle = styled.Text`
	font-family: ${({theme}) => theme.fonts.regular};
	font-size: 11px;
	color: ${({theme}) => theme.colors.lightGrey};
`;

const TextUserName = styled.Text`
	font-family: ${({theme}) => theme.fonts.semiBold};
	font-size: 18px;
	color: ${({theme}) => theme.colors.white};
`;

const TextAppContent = styled.Text`
	font-family: ${({theme}) => theme.fonts.medium};
	font-size: 16px;
	color: ${({theme}) => theme.colors.white};
	text-align: center;
`;

export const HomeScreen: React.FC<HomeScreenProps> = () => {
	const {email} = useAppSelector(userState.selectors.user)!;
	const dispatch = useAppDispatch();

	const onLogout = React.useCallback(() => {
		dispatch(userState.actions.logout());
	}, [dispatch]);

	return (
		<RootView>
			<RView />
			<TitleContainerView>
				<TextTitle>
					You’re loggen in now 
				</TextTitle>
				<TextUserName>
					{email}
				</TextUserName>
			</TitleContainerView>

			<TextAppContent>
				Now you can see the app content!
			</TextAppContent>

			<Button
				title='Log out'
				onPress={onLogout}
			/>
		</RootView>
	);
};
