import React from 'react';
import {TextInput} from 'react-native';
import {KeyboardAwareScrollView as KeyboardAwareScrollViewImpl} from 'react-native-keyboard-aware-scroll-view';

import {IInput, Inputs, Link} from '../../components';

import UserImage from './res/user.svg';
import {styles} from './styles';

import {BackButton, Button, safeLayoutAnimation} from '@requestum/general';
import {LoginScreenProps} from '@requestum/navigation';
import {useAppDispatch, userState} from '@requestum/states';
import styled from 'styled-components/native';

type Flow = 'login' | 'signup';

type ScreenOptions = {
	buttonText: string;
	description: string;
	forgotText?: string;
	title: string;
	toggleFlowAction: string;
	toggleFlowTitle: string
}

const screenOptions: Record<Flow, ScreenOptions> = {
	login: {
		buttonText: 'Login',
		description: 'Enter your login password from your account',
		title: 'LOGIN',
		toggleFlowAction: 'Sign up',
		toggleFlowTitle: 'Don`t have an account?',
		forgotText: 'Forgot password',
	},
	signup: {
		buttonText: 'Sign Up',
		description: 'Create your email and password for your account',
		title: 'SIGN UP',
		toggleFlowAction: 'Log in',
		toggleFlowTitle: 'Already have an account?',
	}
};

const KeyboardAwareScrollView = styled(KeyboardAwareScrollViewImpl)`
	flex: 1;
`;

const UserImageView = styled(UserImage)`
	width: 60px;
	height: 60px;
	position: absolute;
	right: 75px;
	top: ${({theme}) => theme.windowHeight * 0.44}px;
`;

const HeaderView = styled.View`
	margin-bottom: 8px;
	gap: 8px;
	align-items: center;
`;

const TextTitle = styled.Text`
	font-family: ${({theme}) => theme.fonts.semiBold};
	font-size: 18px;
	color: ${({theme}) => theme.colors.white};
`;

const TextDescription = styled.Text`
	font-family: ${({theme}) => theme.fonts.regular};
	font-size: 11px;
	color: ${({theme}) => theme.colors.lightGrey};
`;

const ControlsView = styled.View`
	gap: 16px
`;

const LinkView = styled.View`
	align-items: flex-end;
`;

const ToggleFlowView = styled.View`
	justify-content: center;
	align-items: center;
	flex-direction: row;
	gap: 8px;
`;

const TextToggleFlowTitle = styled.Text`
	font-family: ${({theme}) => theme.fonts.regular};
	font-size: 11px;
	color: ${({theme}) => theme.colors.white};
	text-shadow: ${({theme}) => theme.colors.mahenta} 1px 0 10px;
`;

export const LoginScreen: React.FC<LoginScreenProps> = ({route}) => {
	const [flow, setFlow] = React.useState<Flow>(route.params.flow);
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');
	const dispatch = useAppDispatch();
	const emailRef = React.useMemo(() => React.createRef<IInput>(), []);
	const passwordRef = React.useMemo(() => React.createRef<IInput>(), []);
	const passwordInputRef = React.useMemo(() => React.createRef<TextInput>(), []);

	const toggleFlow = React.useCallback(() => {
		safeLayoutAnimation();
		setFlow((prev) => prev === 'login' ? 'signup' : 'login');
	}, []);

	const checkInputs = React.useCallback((): boolean => {
		let result = true;

		if (!email.trim().length) {
			emailRef.current?.errorAnimation();
			result = false;
		}

		if (!password.trim().length) {
			passwordRef.current?.errorAnimation();
			result = false;
		}

		return result;
	}, [email, emailRef, password, passwordRef]);

	const onLoginPress = React.useCallback(() => {
		if (checkInputs()) {
			dispatch(userState.actions.login({email}));
		}
	}, [checkInputs, dispatch, email]);

	const onSignupPress = React.useCallback(onLoginPress, [onLoginPress]);

	return (
		<KeyboardAwareScrollView
			contentContainerStyle={styles.root}
			keyboardShouldPersistTaps={'handled'}
			showsVerticalScrollIndicator={false}
		>
			<BackButton />
			<UserImageView />

			<HeaderView>
				<TextTitle>
					{screenOptions[flow].title}
				</TextTitle>
				<TextDescription>
					{screenOptions[flow].description}
				</TextDescription>
			</HeaderView>

			<ControlsView>
				<Inputs
					email={email}
					emailRef={emailRef}
					password={password}
					passwordInputRef={passwordInputRef}
					passwordRef={passwordRef}
					setEmail={setEmail}
					setPassword={setPassword}
					onSubmit={onLoginPress}
				/>

				{screenOptions[flow].forgotText !== undefined ? (
					<LinkView>
						<Link
							title={screenOptions[flow].forgotText!}
						/>
					</LinkView>
				) : null}

				<Button
					title={screenOptions[flow].buttonText}
					onPress={flow === 'login' ? onLoginPress : onSignupPress}
				/>
			</ControlsView>

			<ToggleFlowView>
				<TextToggleFlowTitle>
					{screenOptions[flow].toggleFlowTitle}
				</TextToggleFlowTitle>
				<Link
					title={screenOptions[flow].toggleFlowAction}
					onPress={toggleFlow}
				/>
			</ToggleFlowView>
		</KeyboardAwareScrollView>
	);
};
