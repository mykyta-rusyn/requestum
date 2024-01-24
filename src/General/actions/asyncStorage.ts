import AsyncStorage from '@react-native-async-storage/async-storage';

import {User} from '../domain';

const	userKey = 'user';

export async function loadUser(): Promise<User | undefined> {
	const userData = await AsyncStorage.getItem(userKey);

	return userData ? JSON.parse(userData) : undefined;
}

export function saveUser(userData: User): Promise<void> {
	return AsyncStorage.setItem(userKey, JSON.stringify(userData));
}

export function removeUser(): Promise<void> {
	return AsyncStorage.removeItem(userKey);
}
