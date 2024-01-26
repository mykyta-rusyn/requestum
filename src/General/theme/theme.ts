import {Dimensions} from 'react-native';

import {colors} from './colors';
import {fonts} from './fonts';

import {DefaultTheme} from 'styled-components';

const {height, width} = Dimensions.get('window');

export const windowSize = {
	height,
	width
};

export const theme: DefaultTheme = {
	windowHeight: width,
	windowWidth: height,
	colors,
	fonts
};
