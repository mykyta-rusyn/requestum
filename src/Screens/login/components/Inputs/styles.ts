import {StyleSheet} from 'react-native';

import {Theme} from '@requestum/general';

export const styles = StyleSheet.create({
	input: {
		position: 'absolute',
		left: 0,
		right: 0,
		flex: 1,
		padding: 0,
		paddingTop: 8,
		color: Theme.colors.white,
		fontSize: 12,
		fontFamily: Theme.fonts.bold,
	},
});
