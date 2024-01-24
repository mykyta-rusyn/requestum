import {NavigationProp} from '@react-navigation/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type MainStackParamList = {
	Home: undefined
};

export type HomeScreenProps = NativeStackScreenProps<MainStackParamList, 'Home'>;

export type MainNavigation = NavigationProp<MainStackParamList> & {
	push: <RouteName extends keyof MainStackParamList>(
		name: RouteName,
		params?: MainStackParamList[RouteName]
	) => void
};
