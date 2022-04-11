import {BaseContainer, HStack, PressBox, VStack} from "../components/Layout";
import {Animated, StatusBar, Text} from "react-native";
import {VarText} from "../components/Text";
import {HeartSplash, RightArrowIcon} from "../components/Icon";
import {useSpring, animated, config} from "@react-spring/native"
import {useCallback, useContext, useEffect, useRef, useState} from "react";
import {useFocusEffect} from "@react-navigation/native";
import {AppContext} from "../global_state/AppStateProvider";

const Welcome = ({navigation}) => {

	const [state, dispatch] = useContext(AppContext)
	const [present, setPresent] = useState(false)

	const welcomeStyle = useSpring({
		opacity: present? 1: 0,
		top: present? 0: 100,
		config: config.slow
	})

	const btn1 = useSpring({
		opacity: present? 1: 0,
		top: present? 50: 100,
		delay:750,
		config: config.slow
	})

	const btn2 = useSpring({
		opacity: present? 1: 0,
		top: present? 50: 100,
		delay:900,
		config: config.slow
	})

	const btn3 = useSpring({
		opacity: present? 1: 0,
		top: present? 50: 100,
		delay:1050,
		config: config.slow
	})
	//
	// useEffect(()=>{
	// 	setPresent(true)
	// })

	useFocusEffect(
		useCallback(() => {
			setPresent(true)
		}, [])
	);

	return(
		<BaseContainer justifyContent="center" alignItems="center">
			<StatusBar barStyle="dark-content"/>

				<animated.View style={[welcomeStyle, {
					alignItems: "center",
					justifyContent: "space-between",
					width:"100%",
					marginBottom: 8
				}]}>
					<VarText type="xxl" content="歡迎來到 MoodDiary" fontWeight={"bold"} color={state.appTheme.text}/>
				</animated.View>

				<animated.View style={[welcomeStyle, {
					alignItems: "center",
					justifyContent: "space-between",
					marginTop: 4,
					height:"40%",
					width:"100%",
				}]}>
					<VarText type="md" content="開始紀錄你的心情吧！" color={state.appTheme.text} marginLeft={6}/>
				</animated.View>

				<animated.View style={[btn1, {
					alignItems:"center",

				}]}>
					<PressBox onPress={()=> navigation.navigate("Signin")}

						backgroundColor={state.appTheme.top_background_darken} justify align borderRadius={100} borderWidth={2} height={40} width={180} borderColor={state.appTheme.text_light}>
						<VarText color={state.appTheme.text} type="lg" content="登入"/>
					</PressBox>
				</animated.View>

			<animated.View style={[btn2, {
					alignItems:"center",

				}]}>
					<PressBox onPress={()=> navigation.navigate("Signup")}

						backgroundColor={state.appTheme.top_background_darken} marginTop={10} justify align borderRadius={100} borderWidth={2} height={40} width={180} borderColor={state.appTheme.text_light}>
						<VarText color={state.appTheme.text} type="lg" content="註冊"/>
					</PressBox>

				</animated.View>

			<animated.View style={[btn3, {
					alignItems:"center",
					marginBottom: 32
				}]}>
					<PressBox onPress={()=> {
						navigation.navigate("TabContent")}}

						marginTop={24} marginLeft={12} justify align >
						<VarText color={state.appTheme.text_light} type="lg" content="直接使用"/>
						<RightArrowIcon color={state.appTheme.text_light} size={22}
						/>
					</PressBox>

				</animated.View>


		</BaseContainer>
	)
}

export default Welcome