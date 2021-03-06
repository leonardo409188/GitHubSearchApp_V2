import React, { useState, useEffect, useCallback } from 'react';
import { Header, List } from '../../components';
import { getUsers } from '../../service/functions';
import { BackgroundContainer, ContentContainer } from '../../styles/common';
import {
	FormView,
	InputUser,
	SearchButton,
	IconButton,
	ActivityIndicator,
	WithoutUserContainer,
	WithoutUserIcon,
	WithoutUserTitle,
	UsersContainer,
	UsersTitle,
	UsersList,
} from './styles';

interface UsersType {
	login: string,
	avatar_url: string
}

const Home = ({ navigation }) => {
	const [disabled, setDisabled] = useState<boolean>(true);
	const [inputUser, setInputUser] = useState<string>('');
	const [users, setUser] = useState<UsersType[] | null>(null);
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		inputUser === '' ? setDisabled(true) : setDisabled(false)
	}, [inputUser])

	const user = async () => {
		try {
			setLoading(true);
			const response = await getUsers(inputUser);
			
			setUser(response);
			setInputUser('');
			setLoading(false);

		} catch (error) {
			setLoading(false);
		}
	}

	const renderUsers = useCallback(({ item }) =>
		<List
			data={item}
			type={'home'}
			onPressList={() => navigation.navigate('Repositories', { user: item.login, picture: item.avatar_url })}
		/>, []
	);

	const keyExtractor = useCallback(item => item.login, []);

	return (
		<BackgroundContainer>
			<Header />
			<ContentContainer>
				<FormView>
					<InputUser
						value={inputUser}
						onChangeText={(value: string) => setInputUser(value)}
					/>
					<SearchButton
						onPress={() => user()}
						disabled={disabled}>
						{ loading ? <ActivityIndicator /> : <IconButton /> }
					</SearchButton>
				</FormView>

				{users === null &&
					<WithoutUserContainer>
						<WithoutUserIcon />
						<WithoutUserTitle> {`Está meio vazio por aqui${'\n'}Busque por um usuário.`} </WithoutUserTitle>
					</WithoutUserContainer>
				}

				{users !== null && users.length > 0 &&
					<UsersContainer>
						<UsersTitle> {'Usuários encontrados'} </UsersTitle>
						<UsersList
							data={users}
							renderItem={renderUsers}
							keyExtractor={keyExtractor}
						/>
					</UsersContainer>
				}

				{users !== null && users.length === 0 &&
					<UsersContainer>
						<UsersTitle> {'Nenhum usuário encontrado'} </UsersTitle>
					</UsersContainer>
				}

			</ContentContainer>
		</BackgroundContainer>
	)
}

export default Home;
