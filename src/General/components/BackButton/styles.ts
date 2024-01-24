import {StyleSheet} from 'react-native';

import {windowSize} from '../../theme';

export const styles = StyleSheet.create({
	image: {
		position: 'absolute',
		top: windowSize.height * 0.09,
		left: 24,
		height: 24,
		width: 24
	}
});
