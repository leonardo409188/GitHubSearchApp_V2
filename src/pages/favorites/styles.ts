import styled, { css } from "styled-components/native";

export const Title = styled.Text`
    ${({theme}) => css`
        color: ${theme.colors.gray};
        font-size: ${theme.font.sizes.medium};
        margin-bottom: 15px;
    `}
   
`
export const UsersList = styled.FlatList``
