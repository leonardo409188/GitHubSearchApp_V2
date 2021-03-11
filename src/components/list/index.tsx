import React, { memo } from 'react';
import {
	Item,
	ProfileView,
	UserImage,
	UserName,
	Icon,
	IconView
} from './styles';

interface Props {
    data: any,
    type: string,
    onPressList?: () => void,
    onPressIcon?: () => void
}

export const List = memo(({ data, type, onPressList, onPressIcon }: Props) => {
    return (
        <Item onPress={onPressList}>
            <ProfileView>
                <UserImage source={{ uri: data.avatar_url }} />
                <UserName> {data.login} </UserName>
            </ProfileView>
            <IconView onPress={onPressIcon}>
                <Icon type={type} />
            </IconView>
        </Item>
    )
})
