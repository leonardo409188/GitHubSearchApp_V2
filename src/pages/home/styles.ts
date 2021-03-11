import styled, { css } from "styled-components/native";
import Icon from 'react-native-vector-icons/FontAwesome';

export const FormView = styled.View`
    flex-direction: row;
    justify-content: center;
`

export const InputUser = styled.TextInput.attrs({
	placeholder: 'Buscar usuário',
})`
    ${({ theme }) => css`
        height: 50px;
        padding: 10px;
        border-color: ${theme.colors.gray};
        border-width: .8px;
        border-radius: 8px;
        flex: 3;
    `}
`

export const SearchButton = styled.TouchableOpacity`
    ${({ theme }) => css`
        flex: 1;
        height: 50px;
        background-color: ${props => props.disabled ? theme.colors.gray : theme.colors.blue};
        border-radius: 8px;
        margin-left: 5px;
        align-items: center;
        justify-content: center;
    `}
`

export const IconButton = styled(Icon).attrs({
	name: 'search',
})`
    ${({ theme }) => css`
        color: ${theme.colors.white};
        font-size: ${theme.font.sizes.large};
    `}
  
`

export const ActivityIndicator = styled.ActivityIndicator.attrs(props => ({
    color: props.theme.colors.white,
}))``

export const WithoutUserContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`

export const WithoutUserIcon = styled.Image.attrs({
    source: require('../../assets/images/withoutUser.png'),
    resizeMode: 'contain'
})`
    height: 180px;
    margin-bottom: 10px;
`

export const WithoutUserTitle = styled.Text`
    ${({ theme }) => css`
        color: ${theme.colors.gray};
        font-size: ${theme.font.sizes.medium};
        text-align: center;
    `}
`

export const UsersList = styled.FlatList``

export const UsersContainer = styled.View`
    padding: 30px 0px;
`

export const UsersTitle = styled.Text`
    ${({ theme }) => css `
        color: ${theme.colors.gray};
        font-size: ${theme.font.sizes.medium};
        margin-bottom: 15px;
    `}  
`

export const Item = styled.TouchableOpacity`
    ${({ theme }) => css`
        flex: 1;
        flex-direction: row;
        padding: 10px;
        background-color: ${theme.colors.white};
        border-radius: 5px;
        align-items: center;
        justify-content: space-between;
    `}
   
`

export const ProfileView = styled.View`
    flex-direction: row;
    align-items: center;
`

export const UserImage = styled.Image`
    height: 60px;
    width: 60px;
    border-radius: 8px;
`

export const UserName = styled.Text`
    ${({ theme }) => css`
        color: ${theme.colors.gray};
        font-size: ${theme.font.sizes.medium};
        margin-left: 20px;
    `}
`

export const ItemIcon = styled(Icon).attrs({
	name: 'chevron-right',
})`
    color:  ${({ theme }) => theme.colors.gray};
`  
