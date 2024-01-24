import React from 'react';
import {TextInput, View} from 'react-native';

import Email from './res/email.svg';
import Password from './res/password.svg';
import {IInput, Input} from './Input';
import {styles} from './styles';

type Props = {
	email: string;
	password: string;
	setEmail: (email: string) => void;
	setPassword: (password: string) => void;
	emailRef: React.Ref<IInput>;
	passwordRef: React.Ref<IInput>;
	onSubmit: () => void;
	passwordInputRef: React.RefObject<TextInput>
}

export const Inputs: React.FC<Props> = (props) => {
	return (
		<View style={styles.root}>
			<Input
				blurOnSubmit={false}
				leftImage={Email}
				ref={props.emailRef}
				title='Email'
				value={props.email}
				onChangeText={props.setEmail}
				onSubmitEditing={() => props.passwordInputRef.current?.focus()}
			/>
			<Input
				password
				inputRef={props.passwordInputRef}
				leftImage={Password}
				ref={props.passwordRef}
				title='Password'
				value={props.password}
				onChangeText={props.setPassword}
				onSubmitEditing={props.onSubmit}
			/>
		</View>
	);
};
