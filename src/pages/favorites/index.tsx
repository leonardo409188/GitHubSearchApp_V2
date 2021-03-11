import React, { useEffect, useState, useCallback } from 'react';
import { getData, handleStorage } from '../../utils/functions';
import { Header, List } from '../../components';
import { BackgroundContainer, ContentContainer } from '../../styles/common';
import { Title, UsersList } from './styles';

interface FavoritesType {
	login: string,
	avatar_url: string
}

interface RemoveFunctionType {
	user: string,
	picture: string,
	type: boolean
}

const Favorites = ({ navigation }) => {
	const [favorites, setFavorites] = useState<FavoritesType[]>([]);

	useEffect(() => {
		const allFavorites = navigation.addListener('focus', () => {
			getFavorites();
		});

		return allFavorites;
	}, [navigation]);

	const getFavorites = async () => {
		const fav = await getData('favorites');

		if (fav) {
			setFavorites([...fav]);
		}
	}

	const removeFavorite = async ({user, picture , type }: RemoveFunctionType): Promise<void> => {
		await handleStorage(user, picture, type);
		const updatedFavorites = favorites.filter(el => el.login !== user);
		setFavorites(updatedFavorites);
	}

	const renderFavorites = ({ item }) => (
		<List 
			data={item} 
			type={'favorite'} 
			onPressIcon={() => removeFavorite({ user: item.login, picture: item.avatar_url, type: true })}
			onPressList={() => navigation.navigate('Repositories', { user: item.login, picture: item.avatar_url })} 
		/>
	);

	const keyExtractor = useCallback(item => item.login, []);

	return (
		<BackgroundContainer>
			<Header />
			<ContentContainer>
				<Title>{'Meus Favoritos'}</Title>
				<UsersList
					data={favorites}
					renderItem={renderFavorites}
					keyExtractor={keyExtractor}
				/>
			</ContentContainer>
		</BackgroundContainer>
	);
}

export default Favorites;
