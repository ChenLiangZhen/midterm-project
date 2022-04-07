import React, {useContext, useEffect} from 'react';
import AppStateProvider, {AppContext} from "./src/global_state/AppStateProvider";
import {ACTIONS} from "./src/global_state/actions";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Welcome from "./src/screens/Welcome";
import {NavigationContainer} from "@react-navigation/native";
import Signin from "./src/screens/Signin";
import Signup from "./src/screens/Signup";
import Today from "./src/screens/note/Today";
import MoodWriting from "./src/screens/note/MoodWriting";
import {SafeAreaProvider} from "react-native-safe-area-context/src/SafeAreaContext";
import {getNoteData, saveNoteData} from "./src/utility/asyncManager";
import {Home} from "./src/screens/Home";
import MoodSupport from "./src/screens/forum/MoodSupport";
import MoodGalaxy from "./src/screens/forum/MoodGalaxy";
import MyAccount from "./src/screens/me/MyAccount";
import {AntDesign, Feather, Ionicons, MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";
import {WIDTH} from "./src/utility/deviceUtility";

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const TEST_DATA = {
	note: [
		{
			id: "0",
			title: "心情好好～～",
			content: "從來沒想過會遇到這麼雞掰的一天．．．",
			createdAt: {
				year: 2022,
				month: 4,
				day: 4
			}
		},
		{
			id: "1",
			title: "今天超雞掰！！！",
			content: "心情怎麼可以這麼好 wow",
			createdAt: {
				year: 2022,
				month: 4,
				day: 5
			}
		},
		{
			id: "2",
			title: "好煩喔 bug 一大堆",
			content: "真的超級趕時間，感覺要爆炸了．．．",
			createdAt: {
				year: 2022,
				month: 4,
				day: 5
			}
		},
		{
			id: "3",
			title: "快餓扁了",
			content: "今天忙了一整天都沒有吃飯，好想休息喔",
			createdAt: {
				year: 2022,
				month: 4,
				day: 5
			}
		},
		{
			id: "4",
			title: "吉豚屋好好吃",
			content: "昨天一整天都沒吃飯，今天要來犒賞自己一下，去吃吉豚屋吧！！！",
			createdAt: {
				year: 2022,
				month: 4,
				day: 6
			}
		}
	]
}

export default function App() {

	return (

		<AppStateProvider>
			<SafeAreaProvider>
				<NavigationContainer>

					<StackNavigator/>

				</NavigationContainer>
			</SafeAreaProvider>
		</AppStateProvider>

	);
}

function StackNavigator() {

	const [state, dispatch] = useContext(AppContext)


	// APP Data initialization.

	useEffect(async () => {
		await saveNoteData(JSON.stringify(TEST_DATA))
		const data = await getNoteData()
		dispatch({type: ACTIONS.SET_USER_NOTE_DATA, payload: JSON.parse(data)})
	}, [])

	return (
		<Stack.Navigator initialRouteName="TabContent">
			<Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}}/>
			<Stack.Screen name="Today" component={Today} options={{headerShown: false}}/>
			<Stack.Screen name="MoodWriting" component={MoodWriting} options={{headerShown: false}}/>
			<Stack.Screen name="Signin" component={Signin} options={{headerShown: false}}/>
			<Stack.Screen name="Signup" component={Signup} options={{headerShown: false}}/>
			<Stack.Screen name="TabContent" component={TabNavigator} options={{headerShown: false}}/>
		</Stack.Navigator>
	)
}

function TabNavigator() {
	return (
		<Tab.Navigator
			initialRouteName="Home"
			screenOptions={({route}) => ({
				tabBarIcon: ({focused, color, size}) => {
					if (route.name === 'Home') {
						return (
							<Feather
								name={
									focused
										? 'home'
										: 'home'
								}
								size={26}
								color={color}
							/>
						);
					}
					if (route.name === 'MoodSupport') {
						return (
							<Feather
								name={focused ? 'coffee' : 'coffee'}
								size={28}
								color={color}
							/>
						);
					}
					if (route.name === 'MoodGalaxy') {
						return (
							<Ionicons
								name={focused ? 'planet' : 'planet-outline'}
								size={30}
								color={color}
							/>
						);
					}
					if (route.name === 'MyAccount') {
						return (
							<MaterialIcons
								name={focused ? 'face' : 'face'}
								size={28}
								color={color}
							/>
						);
					}
				},
				tabBarLabelStyle: {fontSize: 14,},
				tabBarStyle: {
					height: 52,
					width: WIDTH * 0.9,
					marginLeft: WIDTH * 0.05,
					borderTopWidth: 0,
					bottom: 30,
					elevation: 0,
					borderRadius: 64,
					paddingHorizontal: 8
				},
				tabBarItemStyle: {
					paddingVertical: 8,
					height: 48
				},
				tabBarShowLabel: false,
				tabBarInactiveTintColor: '#ddd',
				tabBarActiveTintColor: '#333333',
			})}
		>
			<Tab.Screen name="Home" component={Home} options={{headerShown: false}}/>
			<Tab.Screen name="MoodSupport" component={MoodSupport} options={{headerShown: false}}/>
			<Tab.Screen name="MoodGalaxy" component={MoodGalaxy} options={{tabBarBadge: 99, headerShown: false}}/>
			<Tab.Screen name="MyAccount" component={MyAccount} options={{headerShown: false}}/>
		</Tab.Navigator>
	)
}

