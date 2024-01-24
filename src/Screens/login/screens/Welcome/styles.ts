import {StyleSheet} from 'react-native';

import {Theme} from '@requestum/general';

export const styles = StyleSheet.create({
	root: {
		flex: 1,
		justifyContent: 'space-between',
		paddingTop: Theme.windowSize.height * 0.26,
		paddingBottom: Theme.windowSize.height * 0.09,
		paddingHorizontal: 35,
		alignItems: 'center'
	},
	buttons: {
		gap: 15,
		width: '100%'
	}
});
