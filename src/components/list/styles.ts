import styled, { css } from "styled-components/native";
import ListIcon from 'react-native-vector-icons/FontAwesome';

export const Item = styled.TouchableOpacity`
    ${({ theme }) => css`
        flex-direction: row;
        padding: 10px 0px 10px 10px;
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

export const IconView = styled.TouchableOpacity`
    padding: 10px;
`

interface IconProps {
    type: string;
}

export const Icon = styled(ListIcon).attrs(props => ({
    name: props.type === 'favorite' ? 'trash' : 'chevron-right',
}))`
    ${({ theme }) => css`
        color: ${props => props.type === 'favorite' ? theme.colors.red : theme.colors.gray};
        
        ${props => props.type === 'favorite' && css`
            font-size: ${theme.font.sizes.xlarge};
        `}
    `}
    
`
