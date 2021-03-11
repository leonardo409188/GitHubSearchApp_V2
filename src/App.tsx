import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getData } from './utils/functions';

import { ThemeProvider } from "styled-components/native";
import theme from './styles/theme';

// Pages
import Home from './pages/home';
import Repositories from './pages/repositories';
import Favorites from './pages/favorites';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();



function Tabs() {
	const [favoritesCount, setFavoritesCount] = useState(0);

	useEffect(() => {
		getCount();
	},[])

	const getCount = async () => {
		const favorites = await getData('favorites');
		setFavoritesCount(favorites.length);
	}
	

	return (
		<Tab.Navigator screenOptions={({ route }) => ({
			tabBarIcon: ({ color, size }) => {
				var iconName;

				if (route.name === 'Home') {
					iconName = 'search';
				} else if (route.name === 'Settings') {
					iconName = 'heart';
				}

				// You can return any component that you like here!
				return <Icon name={iconName} size={size} color={color} />;
			},
		})}

			tabBarOptions={{
				showLabel: false,
				activeTintColor: "#000",
				inactiveTintColor: "#CFCFD6",
				style: { backgroundColor: '#F5F5F5' }
			}}>
			<Tab.Screen name="Home" component={Home} />
			<Tab.Screen name="Settings" options={{ tabBarBadge: favoritesCount }} component={Favorites} />
		</Tab.Navigator>
	)
}

export default function App() {
	return (
		<NavigationContainer>
			 <ThemeProvider theme={theme}>
				<Stack.Navigator
					initialRouteName="Tabs"
					screenOptions={{
						cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
					}}>
					<Stack.Screen options={{ headerShown: false }} name="Tabs" component={Tabs} />
					<Stack.Screen options={{ headerShown: false }} name="Repositories" component={Repositories} />
				</Stack.Navigator>
			</ThemeProvider>
		</NavigationContainer>

	);
}
