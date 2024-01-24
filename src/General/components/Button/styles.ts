import {StyleSheet} from 'react-native';

import {colors, fonts} from '../../theme';

export const styles = StyleSheet.create({
	shadow: {
		width: '100%',
	},
	root: {
		backgroundColor: colors.mahenta,
		shadowColor: colors.mahenta50,
		height: 50,
		borderRadius: 8,
		justifyContent: 'center',
		alignItems: 'center',
	},
	rootDark: {
		backgroundColor: colors.dark
	},
	text: {
		fontFamily: fonts.bold,
		color: colors.white,
		fontSize: 12
	}
});
