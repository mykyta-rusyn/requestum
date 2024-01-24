import {StyleSheet} from 'react-native';

import {Theme} from '@requestum/general';

export const styles = StyleSheet.create({
	root: {
		gap: 16
	},
	inputRoot: {
		width: '100%',
		borderRadius: 8,
		flexDirection: 'row',
		alignItems: 'stretch',
		justifyContent: 'center',
		gap: 10,
		paddingVertical: 10,
		paddingHorizontal: 16,
		borderWidth: 1,
		height: 50
	},
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
	title: {
		fontFamily: Theme.fonts.regular,
		position: 'absolute',
		top: 7.5,
		fontSize: 12,
	},
	selectedTitle: {
		top: 0,
		fontSize: 10
	},
	icon: {
		height: 24,
		width: 24,
	}
});

export const selectedTitle = StyleSheet.flatten([
	styles.title,
	styles.selectedTitle
]);
