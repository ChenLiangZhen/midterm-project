import {ImageBackground, KeyboardAvoidingView, Platform, Pressable, StatusBar, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {useContext, useEffect, useState} from "react";
import {AppContext} from "../global_state/AppStateProvider";
import {getUserSetting} from "../utility/asyncManager";

export function BaseContainer({children, onTouchStart, type, ...props}){

	let link
	const [state, dispatch] = useContext(AppContext)

	const [background, setBackground] = useState("")
	const [passwordInput, setPasswordInput] = useState("")
	const [emailInput, setEmailInput] = useState("")
	const [userData, setUserData] = useState("")

	const [authStatus, setAuthStatus] = useState("N/A")
	const [token, setToken] = useState({})

	useEffect( async ()=>{
		link = await getUserSetting()
		console.log(link)
		await setBackground(state.userSetting.background)
		await new Promise(resolve => setTimeout(resolve, 100));
	}, [])

	return(
		type === "tab"?
				<SafeAreaView style={{
					backgroundColor: state.appTheme.base_background,
					height: "100%",
					width: "100%",
					flex: 1,
				}} edges={['top', 'right', 'left']}>

					{state.appThemeSelected === "blackwhite"?
						<KeyboardAvoidingView
							behavior={Platform.OS === "ios" ? "padding": "height"}
							style={{
								flex: 1,
								...props}}>

							<StatusBar barStyle="default" backgroundColor={state.appTheme.base_background}/>


							{children}
						</KeyboardAvoidingView>:

					<ImageBackground source={state.userSetting.displayBackground? require("../resource/cookiemr.png") : {}}

					                 style={{
						                 flex: 1,
						                 justifyContent: "center",
					                 }}
					                 resizeMode={"cover"}><KeyboardAvoidingView
							behavior={Platform.OS === "ios" ? "padding": "height"}
							style={{
								flex: 1,
								...props}}><StatusBar barStyle="default" backgroundColor={state.appTheme.base_background}/>

							{/*{state.appThemeSelected === "dark"?*/}
							{/*	<StatusBar barStyle="light-content" backgroundColor={state.appTheme.base_background}/> :*/}
							{/*	<StatusBar barStyle="dark-content" backgroundColor={state.appTheme.base_background}/> }*/}

							{children}
						</KeyboardAvoidingView>
					</ImageBackground> }
				</SafeAreaView>

			:
			<SafeAreaView style={{
				backgroundColor: state.appTheme.base_background,

				height: "100%",
				width: "100%",
				flex: 1,

			}} edges={['top','right', 'bottom', 'left']} >

				{state.appThemeSelected === "blackwhite"?

					<KeyboardAvoidingView
						behavior={Platform.OS === "ios" ? "padding": "height"}
						style={{
							flex: 1,
							backgroundColor: "transparent",
							...props}}>

						<StatusBar barStyle="dark-content" backgroundColor={state.appTheme.base_background}/>


						{children}

					</KeyboardAvoidingView>
					: <ImageBackground source={state.userSetting.displayBackground? require("../resource/cookiemr.png") : {}}

					                   style={{
						                   flex: 1,
						                   justifyContent: "center",
					                   }}
					                   resizeMode={"cover"}>
						<KeyboardAvoidingView
							behavior={Platform.OS === "ios" ? "padding": "height"}
							style={{
								flex: 1,
								backgroundColor: "transparent",
								...props}}>

							<StatusBar barStyle="dark-content" backgroundColor={state.appTheme.base_background}/>


							{children}
						</KeyboardAvoidingView>
					</ImageBackground>}

			</SafeAreaView>
	)
}

export function HStack({children, ...props}){
	return(
		<View style={{
			flexDirection: "row",
			justifyContent: props.justify? "center" : undefined,
			alignItems: props.align? "center" : undefined,
			...props
		}}>
			{children}
		</View>
	)
}

export function VStack({children, ...props}){
	return(
		<View style={{
			flexDirection: "column",
			justifyContent: props.justify? "center" : undefined,
			alignItems: props.align? "center" : undefined,
			...props
		}}>
			{children}
		</View>
	)
}

export function Container({children, ...props}){
	return(
		<View style={{
			justifyContent: props.justify || props.center ? "center" : undefined,
			alignItems: props.align || props.center ? "center" : undefined,
			...props
		}}>
			{children}
		</View>
	)
}

export function PressBox({children, onPress, ...props}){
	return(
		<Pressable
			onPress={onPress}
			style={{
				flexDirection: "row",
				justifyContent: "center" ,
				alignItems: "center",
				...props
		}}>
			{children}
		</Pressable>
	)
}







