import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Animated, {FadeIn, FadeOut, Layout} from 'react-native-reanimated';

import {IInput, Inputs, Link} from '../../components';

import UserImage from './res/user.svg';
import {styles} from './styles';

import {BackButton, Button, Theme} from '@requestum/general';
import {LoginScreenProps} from '@requestum/navigation';
import {useAppDispatch, userState} from '@requestum/states';

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

export const LoginScreen: React.FC<LoginScreenProps> = ({route}) => {
	const [flow, setFlow] = React.useState<Flow>(route.params.flow);
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');
	const dispatch = useAppDispatch();
	const emailRef = React.useMemo(() => React.createRef<IInput>(), []);
	const passwordRef = React.useMemo(() => React.createRef<IInput>(), []);
	const passwordInputRef = React.useMemo(() => React.createRef<TextInput>(), []);

	const toggleFlow = React.useCallback(() => (
		setFlow((prev) => prev === 'login' ? 'signup' : 'login')
	), []);

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
			style={Theme.styles.flex1}
		>
			<BackButton />
			<UserImage style={styles.userImage} />

			<View style={styles.header}>
				<Text style={styles.title}>
					{screenOptions[flow].title}
				</Text>
				<Text style={styles.description}>
					{screenOptions[flow].description}
				</Text>
			</View>

			<View style={styles.controls}>
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
					<Animated.View
						entering={FadeIn}
						exiting={FadeOut}
						style={styles.forgotText}
					>
						<Link
							title={screenOptions[flow].forgotText!}
						/>
					</Animated.View>
				) : null}

				<Animated.View layout={Layout}>
					<Button
						title={screenOptions[flow].buttonText}
						onPress={flow === 'login' ? onLoginPress : onSignupPress}
					/>
				</Animated.View>
			</View>

			<View style={styles.toggleFlow}>
				<Text style={styles.toggleFlowTitle}>
					{screenOptions[flow].toggleFlowTitle}
				</Text>
				<Link
					title={screenOptions[flow].toggleFlowAction}
					onPress={toggleFlow}
				/>
			</View>
		</KeyboardAwareScrollView>
	);
};
