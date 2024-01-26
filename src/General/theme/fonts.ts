import {FontSource, loadAsync} from 'expo-font';
import {Fonts, FontsValue} from 'styled-components/native';

export const fonts: Fonts = {
	bold: 'Montserrat-Bold',
	medium: 'Montserrat-Medium',
	regular: 'Montserrat-Regular',
	semiBold: 'Montserrat-SemiBold'
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
