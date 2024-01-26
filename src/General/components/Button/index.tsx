import React from 'react';
import {Shadow} from 'react-native-shadow-2';

import {colors} from '../../theme';

import styled from 'styled-components/native';

type Dark = {
	dark?: boolean
}

type Props = {
	disabled?: boolean;
	title: string;
	onPress: () => void
} & Dark

const ShadowView = styled(Shadow)`
	width: 100%
`;

const Opacity = styled.TouchableOpacity<Dark>`
	background-color: ${({dark, theme}) => (
		dark
			? theme.colors.dark
			: theme.colors.mahenta
	)};
	height: 50px;
	border-radius: 8px;
	justify-content: center;
	align-items: center;
`;

const Text = styled.Text`
	font-family: ${({theme}) => theme.fonts.bold};
	color: ${({theme}) =>theme.colors.white};
	font-size: 12px;
`;

export const Button: React.FC<Props> = (props) => {
	const Content = React.useCallback(({dark}: Dark) => (
		<Opacity
			activeOpacity={0.7}
			dark={dark}
			disabled={props.disabled}
			onPress={props.onPress}
		>
			<Text>{props.title}</Text>
		</Opacity>
	), [props.disabled, props.onPress, props.title]);

	if (props.dark) {
		return <Content dark />;
	} else {
		return (
			<ShadowView
				stretch
				distance={7}
				endColor={colors.mahenta0}
				startColor={colors.mahenta50}
			>
				<Content />
			</ShadowView>
		);
	}

};