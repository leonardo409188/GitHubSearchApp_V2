import styled, { css } from "styled-components/native";
import Icon from 'react-native-vector-icons/FontAwesome';

export const FavoriteView = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const ProfileText = styled.Text`
    ${({ theme }) => css`
        color: ${theme.colors.gray};
        font-size: ${theme.font.sizes.medium};
    `}
`

export const ViewIcon = styled.TouchableOpacity`
    ${({ theme }) => css`
        width: 40px;
        height: 40px;
        border-radius: 40px;
        align-items: center;
        justify-content: center;
        background-color: ${theme.colors.lightGray};
    `}
`

export const FavIcon = styled(Icon).attrs({
	name: 'heart',
})`
    ${({ theme }) => css`
        color: ${props => props.isFavorite ? theme.colors.red : theme.colors.white};
        font-size: ${theme.font.sizes.large};
    `}
   
`

export const RepositoriesList = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
})``

export const RepositoriesView = styled.View`
    margin-top: 20px;
    flex: 1;
`

export const Item = styled.TouchableOpacity`
    ${({ theme }) => css `
        flex-direction: row;
        padding: 10px;
        background-color: ${theme.colors.white};
        border-radius: 5px;
        align-items: center;
        margin-bottom: 10px;
    `}
`

export const ItemIcon = styled(Icon).attrs({
	name: 'folder',
})`
    ${({ theme }) => css`
        color:  ${theme.colors.lightBlue};
        font-size: ${theme.font.sizes.xxlarge};
        margin-right: 15px;
    `}
`

export const InfosView = styled.View``

export const RepoName = styled.Text`
    ${({ theme }) => css`
        color: ${theme.colors.black};
        font-size: ${theme.font.sizes.medium};
    `}
`
export const RepoDescription = styled.Text`
    ${({ theme }) => css`
        color: ${theme.colors.gray};
        font-size: ${theme.font.sizes.small};
    `}
`
