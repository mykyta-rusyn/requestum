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
});
