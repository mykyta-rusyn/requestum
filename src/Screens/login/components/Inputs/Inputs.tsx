import React from 'react';
import {TextInput} from 'react-native';

import Email from './res/email.svg';
import Password from './res/password.svg';
import {IInput, Input} from './Input';

import styled from 'styled-components/native';

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

const View = styled.View`
	gap: 16px;
`;

export const Inputs: React.FC<Props> = (props) => {
	return (
		<View>
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
