import AsyncStorage from '@react-native-community/async-storage';

export const storeData = async (key: string, value: string): Promise<any> => {
	try {
		await AsyncStorage.setItem(key, value);
	} catch (e) {
		console.log(e);
	}
}

export const getData = async (key: string): Promise<any> => {
	try {
		const value = await AsyncStorage.getItem(key)
		if (value !== null) {
			return JSON.parse(value);
		}
	} catch (e) {
		console.log(e);
	}
}

export const handleStorage = async (user: string, picture: string, type: boolean): Promise<boolean> => {
	const users = await getData('favorites');

	if (!type) {  
		const newUser = mountUser(user, picture);
		let userUpdated: object;

		if (users) {
			userUpdated = [...users, newUser];
		} else {
			userUpdated = [newUser];
		}

		await storeData('favorites', JSON.stringify(userUpdated));

		return true;
	} else { 
		const removedUser = users.filter((el) => el.login !== user);
		await storeData('favorites', JSON.stringify(removedUser));

		return false;
	}
}

const mountUser = (user: string, picture: string): object => {
	return {
			'login': user,
			'avatar_url': picture
		}
}
