import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type LoginStackParamList = {
	Welcome: undefined;
	Login: {
		flow: 'login' | 'signup'
	}
};

export type WelcomeScreenProps = NativeStackScreenProps<LoginStackParamList, 'Welcome'>;
export type LoginScreenProps = NativeStackScreenProps<LoginStackParamList, 'Login'>;
