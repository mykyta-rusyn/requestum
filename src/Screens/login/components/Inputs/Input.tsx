import React from 'react';
import {Animated, TextInput, TextInputProps, TouchableOpacity} from 'react-native';
import {SvgProps} from 'react-native-svg';

import PasswordShow from './res/password-show.svg';
import {styles} from './styles';

import {Theme} from '@requestum/general';
import styled from 'styled-components/native';

export interface IInput {
	errorAnimation: () => void
}

type Props = {
	password?: boolean;
	title: string;
	value: string;
	leftImage: React.FC<SvgProps>;
	inputRef?: React.RefObject<TextInput>
} & TextInputProps

const shakeOffset = 15;
const shakeTime = 50;

const RootView = styled(Animated.View)`
	width: 100%;
	border-radius: 8px;
	flex-direction: row;
	align-items: stretch;
	justify-content: center;
	gap: 10px;
	padding: 10px 16px 10px 16px;
	border-width: 1px;
	height: 50px;
`;

const ContentView = styled.View`
	flex: 1;
`;

const Title = styled(Animated.Text)`
	font-family: ${({theme}) => theme.fonts.regular};
	position: absolute;
`;

export const Input = React.forwardRef<IInput, Props>((props, ref) => {
	const focused = React.useMemo(() => new Animated.Value(0), []);
	const translateX = React.useMemo(() => new Animated.Value(0), []);
	const [isPassword, setIsPassword] = React.useState(!!props.password);
	const [isFocused, setIsFocused] = React.useState(false);
	const borderColor = focused.interpolate({
		inputRange: [0, 1],
		outputRange: [Theme.colors.dark, Theme.colors.mahenta],
		extrapolate: 'clamp'
	});
	const transform = [{translateX}];
	const color = focused.interpolate({
		inputRange: [0, 1],
		outputRange: [Theme.colors.lightGrey, Theme.colors.white],
		extrapolate: 'clamp'
	});
	const fontSize = focused.interpolate({
		inputRange: [0, 1],
		outputRange: [12, 10],
		extrapolate: 'clamp'
	});
	const top = focused.interpolate({
		inputRange: [0, 1],
		outputRange: [7.5, 0],
		extrapolate: 'clamp'
	});

	const onFocus = React.useCallback(() => {
		if (props.value.length === 0) {
			setIsFocused(true);
		}
	}, [props.value.length]);

	const onBlur = React.useCallback(() => {
		if (props.value.length === 0) {
			setIsFocused(false);
		}
	}, [props.value.length]);

	const togglePassword = React.useCallback(() => (
		setIsPassword((prev) => !prev)
	), []);

	React.useEffect(() => {
		Animated.timing(focused, {
			toValue: Number(isFocused),
			useNativeDriver: false,
			duration: 300
		}).start();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isFocused]);

	React.useImperativeHandle(ref, () => ({
		errorAnimation() {
			translateX.stopAnimation();
			props.onChangeText?.('');
			setIsFocused(false);
			Animated.sequence([
				Animated.timing(
					translateX,
					{
						toValue: -shakeOffset,
						duration: shakeTime / 2,
						useNativeDriver: false
					}
				),
				Animated.loop(Animated.timing(
					translateX,
					{
						toValue: shakeOffset,
						duration: shakeTime,
						useNativeDriver: false
					}
				), {iterations: 5}
				),
				Animated.timing(
					translateX,
					{
						toValue: 0,
						duration: shakeTime / 2,
						useNativeDriver: false
					}
				)
			]).start();

		},
	}));

	return (
		<RootView style={{borderColor, transform}}>
			<props.leftImage
				fill={isFocused ? Theme.colors.mahenta : Theme.colors.lightGrey}
				height={24}
				key={`input_left_${isFocused}`}
				width={24}
			/>

			<ContentView>
				<Title style={{color, fontSize, top}}>
					{props.title}
				</Title>

				{/* we can`t use styled-components here, cause we need ref for TextInput */}
				<TextInput
					{...props}
					cursorColor={Theme.colors.mahenta}
					ref={props.inputRef}
					secureTextEntry={isPassword}
					style={styles.input}
					onBlur={onBlur}
					onFocus={onFocus}
				/>
			</ContentView>

			{props.password !== undefined ? (
				<TouchableOpacity
					activeOpacity={0.7}
					key={`input_password_${isPassword}`}
					onPress={togglePassword}
				>
					<PasswordShow
						fill={isPassword ? Theme.colors.mahenta : Theme.colors.lightGrey}
						height={24}
						width={24}
					/>
				</TouchableOpacity>
			) : null}
		</RootView>
	);
});
