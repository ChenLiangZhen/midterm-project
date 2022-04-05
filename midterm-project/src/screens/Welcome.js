import {BaseContainer, VStack} from "../components/Layout";
import {Animated, StatusBar, Text} from "react-native";
import {VarText} from "../components/Text";
import {HeartSplash, RightArrowIcon} from "../components/IconButton";
import {useSpring, animated, config} from "@react-spring/native"
import {useCallback, useEffect, useRef, useState} from "react";
import {useFocusEffect} from "@react-navigation/native";

const Welcome = ({navigation}) => {

	const [present, setPresent] = useState(false)

	const welcomeStyle = useSpring({
		opacity: present? 1: 0,
		top: present? 0: 100,
		config: config.slow
	})

	const arrow = useSpring({
		opacity: present? 1: 0,
		top: present? 50: 100,
		delay:1000,
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
					<VarText type="xxl" content="歡迎"/>
				</animated.View>

				<animated.View style={[welcomeStyle, {
					alignItems: "center",
					justifyContent: "space-between",
					height:"40%",
					width:"100%",
				}]}>
					<VarText type="md" content="生活由此開始"/>
				</animated.View>

			  <HeartSplash/>

				<animated.View style={[arrow, {
					alignItems:"center",
					marginBottom: 64,

				}]}>
					<RightArrowIcon color="black" size={32} onPress={()=> {
						navigation.navigate("Signin")
					}}
						/>
				</animated.View>


		</BaseContainer>
	)
}

export default Welcome