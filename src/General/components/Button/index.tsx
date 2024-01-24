import React from 'react';
import {StyleSheet, Text, TouchableOpacity, ViewStyle} from 'react-native';
import {Shadow} from 'react-native-shadow-2';

import {colors} from '../../theme';

import {styles} from './styles';

type Props = {
	dark?: boolean;
	disabled?: boolean;
	title: string;
	onPress: () => void
}

export const Button: React.FC<Props> = (props) => {
	const rootStyle = React.useMemo<ViewStyle>(() => {
		return props.dark
			? StyleSheet.flatten([styles.root, styles.rootDark])
			: styles.root;
	}, [props.dark]);

	const Content = React.useMemo(() => (
		<TouchableOpacity
			activeOpacity={0.7}
			disabled={props.disabled}
			style={rootStyle}
			onPress={props.onPress}
		>
			<Text style={styles.text}>{props.title}</Text>
		</TouchableOpacity>
	), [props.disabled, props.onPress, props.title, rootStyle]);

	if (props.dark) {
		return Content;
	} else {
		return (
			<Shadow
				stretch
				distance={7}
				endColor={colors.mahenta0}
				startColor={colors.mahenta50}
				style={styles.shadow}
			>
				{Content}
			</Shadow>
		);
	}

};