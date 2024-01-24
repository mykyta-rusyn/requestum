import {FontSource, loadAsync} from 'expo-font';

export type FontsValue = 'Montserrat-Bold' | 'Montserrat-Medium' | 'Montserrat-Regular' | 'Montserrat-SemiBold';
export type FontKey = 'bold' | 'medium' | 'regular' | 'semiBold';
export type Fonts = Record<FontKey, FontsValue>;
export type FontStyle = Record<FontKey, {fontFamily: FontsValue;}>;

export const fonts: Fonts = {
	bold: 'Montserrat-Bold',
	medium: 'Montserrat-Medium',
	regular: 'Montserrat-Regular',
	semiBold: 'Montserrat-SemiBold'
};

export const fontStyle: FontStyle = {
	bold: {
		fontFamily: 'Montserrat-Bold'
	},
	medium: {
		fontFamily: 'Montserrat-Medium'
	},
	regular: {
		fontFamily: 'Montserrat-Regular'
	},
	semiBold: {
		fontFamily: 'Montserrat-SemiBold'
	}
};

const fontsToLoad: Record<FontsValue, FontSource> = {
	'Montserrat-Bold': require('../../../assets/fonts/Montserrat-Bold.ttf'),
	'Montserrat-Medium': require('../../../assets/fonts/Montserrat-Medium.ttf'),
	'Montserrat-Regular': require('../../../assets/fonts/Montserrat-Regular.ttf'),
	'Montserrat-SemiBold': require('../../../assets/fonts/Montserrat-SemiBold.ttf'),
};

export async function loadFonts(): Promise<void> {
	return await loadAsync(fontsToLoad);
}
