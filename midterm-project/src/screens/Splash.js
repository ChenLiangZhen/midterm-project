// import React, {useCallback, useContext, useEffect, useState} from 'react';
// import { Text, View } from 'react-native';
// import Entypo from '@expo/vector-icons/Entypo';
// import * as SplashScreen from 'expo-splash-screen';
// import * as Font from 'expo-font';
// import {getNoteData, getThemeSelected, getUserSetting, saveNoteData} from "../utility/asyncManager";
// import {ACTIONS} from "../global_state/actions";
// import {AppContext} from "../global_state/AppStateProvider";
//
// export default function Splash() {
//
// 	const [appIsReady, setAppIsReady] = useState(false);
// 	const [state, dispatch] = useContext(AppContext)
//
// 	useEffect( () => {
//
// 		async function init(){
// 			// await saveNoteData(JSON.stringify(TEST_DATA))
// 			const data = await getNoteData()
// 			const userSetting = await getUserSetting()
// 			const themeSeleted = await getThemeSelected()
// 			dispatch({type: ACTIONS.SET_APP_THEME_SELECTED, payload: themeSeleted})
// 			dispatch({type: ACTIONS.SET_APP_THEME, payload: themeSeleted})
// 			dispatch({type: ACTIONS.SET_USER_NOTE_DATA, payload: JSON.parse(data)})
// 			dispatch({type: ACTIONS.SET_USER_SETTING, payload: JSON.parse(userSetting)})
// 			// theme.colors.background = state.appTheme.base_background
// 		}
//
// 		async function prepare() {
// 			try {
//
// 				// Keep the splash screen visible while we fetch resources
// 				await SplashScreen.preventAutoHideAsync(
//
// 				);
// 				// Pre-load fonts, make any API calls you need to do here
// 				await Font.loadAsync(Entypo.font);
//
// 				// Artificially delay for two seconds to simulate a slow loading
// 				// experience. Please remove this if you copy and paste the code!
// 				await new Promise(resolve => setTimeout(resolve, 2000));
//
// 			} catch (e) {
// 				console.warn(e);
// 			} finally {
// 				// Tell the application to render
// 				setAppIsReady(true);
// 			}
// 		}
//
// 		prepare();
// 	}, []);
//
// 	const onLayoutRootView = useCallback(async () => {
// 		if (appIsReady) {
// 			// This tells the splash screen to hide immediately! If we call this after
// 			// `setAppIsReady`, then we may see a blank screen while the app is
// 			// loading its initial state and rendering its first pixels. So instead,
// 			// we hide the splash screen once we know the root view has already
// 			// performed layout.
// 			await SplashScreen.hideAsync();
// 		}
// 	}, [appIsReady]);
//
// 	if (!appIsReady) {
// 		return null;
// 	}
//
// 	return (
// 		<View
// 			style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
// 			onLayout={onLayoutRootView}>
// 			<Text>SplashScreen Demo! 👋</Text>
// 			<Entypo name="rocket" size={30} />
// 		</View>
// 	);
// }

import React, {useCallback, useContext, useEffect, useState} from 'react';
import {Image, StatusBar, Text, View} from 'react-native';
import {config, animated, useSpring} from "@react-spring/native";
import {AppContext} from "../global_state/AppStateProvider";

export default function Splash({navigation}) {

	const [logoAnimControl, setLogoAnimControl] = useState(false)
	const [state, dispatch] = useContext(AppContext)


	useEffect(()=>{

		async function startAnim(){
			setLogoAnimControl(true)
		}
		startAnim()
	}, [])

	const logoAnim = useSpring({
		opacity: logoAnimControl? 1:0,
		bottom: logoAnimControl? 24: -40,
		delay: 500,
		config: config.molasses
	})

	const logoTextAnim = useSpring({
		opacity: logoAnimControl? 1:0,
		bottom: logoAnimControl? 24: -40,
		delay: 700,
		config: config.molasses,
		onRest: ()=>{
			navigation.navigate("Welcome")
		}
	})

	return (
		<View
			style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			{state.appThemeSelected === "dark"?
				<StatusBar barStyle="light-content" backgroundColor={state.appTheme.base_background}/> :
				<StatusBar barStyle="dark-content" backgroundColor={state.appTheme.base_background}/> }
			<animated.View style={[logoAnim, {  alignItems: 'center', justifyContent: 'center' }]}>
				<Image
					resizeMode="contain"
					style={{
					height: 108,
					width: 108,
				}} source={require("../resource/logo.png")}/>
			</animated.View>

			<animated.View style={[logoTextAnim, {  alignItems: 'center', justifyContent: 'center' }]}>
				<Image
					resizeMode="contain"
					style={{
					height: 64,
					width: 108,
				}} source={require("../resource/DailySoup.png")}/>
			</animated.View>
		</View>
	);
}