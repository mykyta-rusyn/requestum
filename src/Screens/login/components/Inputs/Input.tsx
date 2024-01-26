import React from 'react';
import {TextInput, TextInputProps, TouchableOpacity, View} from 'react-native';
import Animated, {
	cancelAnimation,
	FadeIn,
	FadeOut,
	interpolate,
	interpolateColor,
	useAnimatedReaction,
	useAnimatedStyle,
	useSharedValue,
	withRepeat,
	withSequence,
	withTiming
} from 'react-native-reanimated';
import {SvgProps} from 'react-native-svg';

import PasswordShow from './res/password-show.svg';
import {selectedTitle, styles} from './styles';

import {Theme} from '@requestum/general';

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
const AnimatedOpacity = Animated.createAnimatedComponent(TouchableOpacity);

export const Input = React.forwardRef<IInput, Props>((props, ref) => {
	const focused = useSharedValue(0);
	const translateX = useSharedValue(0);
	const [isPassword, setIsPassword] = React.useState(!!props.password);
	const [isFocused, setIsFocused] = React.useState(false);

	const rootStyle = useAnimatedStyle(() => ({
		borderColor: interpolateColor(
			focused.value,
			[0, 1],
			[Theme.colors.dark, Theme.colors.mahenta],
		),
		transform: [{translateX: translateX.value}]
	}));

	const titleStyle = useAnimatedStyle(() => {
		if (props.value!.length > 0) {
			return selectedTitle;
		}

		return {
			color: interpolateColor(
				focused.value,
				[0, 1],
				[Theme.colors.lightGrey, Theme.colors.white],
			),
			fontSize: interpolate(
				focused.value,
				[0, 1],
				[12, 10]
			),
			top: interpolate(
				focused.value,
				[0, 1],
				[7.5, 0]
			)
		};
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

	useAnimatedReaction(
		() => Number(isFocused),
		(isFocused) => {
			focused.value = withTiming(isFocused);
		}
	);
	
	React.useImperativeHandle(ref, () => ({
		errorAnimation() {
			cancelAnimation(translateX);
			props.onChangeText?.('');
			setIsFocused(false);
			translateX.value = withSequence(
				withTiming(-shakeOffset, {duration: shakeTime / 2}),
				withRepeat(withTiming(shakeOffset, {duration: shakeTime}), 5, true),
				withTiming(0, {duration: shakeTime / 2})
			);

		},
	}));

	return (
		<Animated.View
			style={[styles.inputRoot, rootStyle]}
		>
			<Animated.View
				entering={FadeIn}
				exiting={FadeOut}
				key={`input_left_${isFocused}`}
			>
				<props.leftImage
					fill={isFocused ? Theme.colors.mahenta : Theme.colors.lightGrey}
					style={styles.icon}
				/>
			</Animated.View>

			<View style={Theme.styles.flex1}>
				<Animated.Text style={[styles.title, titleStyle]}>
					{props.title}
				</Animated.Text>

				<TextInput
					{...props}
					cursorColor={Theme.colors.mahenta}
					ref={props.inputRef}
					secureTextEntry={isPassword}
					style={styles.input}
					onBlur={onBlur}
					onFocus={onFocus}
				/>
			</View>

			{props.password !== undefined ? (
				<AnimatedOpacity
					activeOpacity={0.7}
					entering={FadeIn}
					exiting={FadeOut}
					key={`input_password_${isPassword}`}
					onPress={togglePassword}
				>
					<PasswordShow
						fill={isPassword ? Theme.colors.mahenta : Theme.colors.lightGrey}
						style={styles.icon}
					/>
				</AnimatedOpacity>
			) : null}
		</Animated.View>
	);
});
