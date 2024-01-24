import {StyleSheet} from 'react-native';

import {Theme} from '@requestum/general';

export const styles = StyleSheet.create({
	root: {
		flex: 1,
		paddingTop: Theme.windowSize.height * 0.44,
		paddingBottom: Theme.windowSize.height * 0.26,
		paddingHorizontal: 35,
		gap: 54,
	},
	R: {
		position: 'absolute',
		top: 54,
		right: 14
	},
	titleContainer: {
		gap: 8,
		alignItems: 'center'
	},
	title: {
		fontFamily: Theme.fonts.regular,
		fontSize: 11,
		color: Theme.colors.lightGrey
	},
	userName: {
		fontFamily: Theme.fonts.semiBold,
		fontSize: 18,
		color: Theme.colors.white,
		marginBottom: 45
	},
	appContent: {
		textAlign: 'center',
		fontFamily: Theme.fonts.medium,
		fontSize: 16,
		color: Theme.colors.white
	}
});
