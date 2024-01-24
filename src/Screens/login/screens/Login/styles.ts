import {StyleSheet} from 'react-native';

import {Theme} from '@requestum/general';

export const styles = StyleSheet.create({
	root: {
		flex: 1,
		paddingHorizontal: 35,
		paddingTop: Theme.windowSize.height * 0.44,
		justifyContent: 'space-between',
		paddingBottom: 69
	},
	userImage: {
		width: 60,
		height: 60,
		position: 'absolute',
		right: 75,
		top: Theme.windowSize.height * 0.27
	},
	toggleFlow: {
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		gap: 8
	},
	toggleFlowTitle: {
		color: Theme.colors.white,
		fontSize: 11,
		fontFamily: Theme.fonts.regular,
		textShadowColor: Theme.colors.mahenta,
		textShadowRadius: 10,
	},
	forgotText: {
		alignItems: 'flex-end',
	},
	header: {
		marginBottom: 8,
		gap: 8,
		alignItems: 'center'
	},
	title: {
		fontFamily: Theme.fonts.semiBold,
		fontSize: 18,
		color: Theme.colors.white
	},
	description: {
		fontFamily: Theme.fonts.regular,
		fontSize: 11,
		color: Theme.colors.lightGrey
	},
	controls: {
		gap: 16
	}
});
