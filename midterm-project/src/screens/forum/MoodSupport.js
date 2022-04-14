import {BaseContainer, HStack, VStack} from "../../components/Layout";
import {Pressable, StatusBar, Text} from "react-native";
import {HeartSplash} from "../../components/IconButton";
import React, {useCallback, useContext, useState} from "react";
import {AppContext} from "../../global_state/AppStateProvider";
import {config, useSpring, animated} from "@react-spring/native";
import {VarText} from "../../components/Text";
import {useFocusEffect} from "@react-navigation/native";

const MoodSupport = ({navigation}) => {

	const [state, dispatch] = useContext(AppContext)
	const [present, setPresent] = useState(false)

	const w1 = useSpring({
		position: "absolute",
		opacity: present? 1 : 0,
		bottom: present? 64: 0,
		delay: 100,
		config: config.molasses
	})

	const w2 = useSpring({
		position: "absolute",
		opacity: present? 1 : 0,
		bottom: present? 64: 0,
		delay: 250,

		config: config.molasses
	})

	const w3 = useSpring({
		position: "absolute",
		opacity: present? 1 : 0,
		bottom: present? 64: 0,
		delay: 400,
		config: config.molasses
	})

	const w4 = useSpring({
		position: "absolute",
		opacity: present? 1 : 0,
		bottom: present? 64: 0,
		delay: 550,
		config: config.molasses
	})

	const w5 = useSpring({
		position: "absolute",
		opacity: present? 1 : 0,
		bottom: present? 64: 0,
		delay: 700,
		config: config.molasses
	})

	const w6 = useSpring({
		position: "absolute",
		opacity: present? 1 : 0,
		bottom: present? 64: 0,
		delay: 850,
		config: config.molasses
	})

	useFocusEffect(
		useCallback(() => {
			setPresent(false)
			setPresent(true)
		}, [])
	);

	return(
		<BaseContainer type={"tab"} flex={1} justifyContent={ "center"} alignItems={"center"}>

			{state.appThemeSelected === "dark"?
				<StatusBar barStyle="light-content" backgroundColor={state.appTheme.base_background}/> :
				<StatusBar barStyle="dark-content" backgroundColor={state.appTheme.base_background}/> }

			<animated.View style={[w1, {left: 20, top: 64}]}>
				<VarText type={"md"} content={"相信自己就好了"} color={state.appTheme.text_lighter} opacity={0.5}/>
				<VarText type={"md"} content={"by: yiyi0828"} color={state.appTheme.text_lighter} opacity={0.5}/>
			</animated.View>

			<animated.View style={[w1, {left: 200, top: 64}]}>
				<VarText type={"md"} content={"加油，你可以的！"} color={state.appTheme.text_lighter} opacity={0.5}/>
				<VarText type={"md"} content={"by: yoo303"} color={state.appTheme.text_lighter} opacity={0.5}/>
			</animated.View>

			<animated.View style={[w2, {left: 110, top: 128}]}>
				<VarText type={"md"} content={"別難過"} color={state.appTheme.text_lighter} opacity={0.5}/>
				<VarText type={"md"} content={"by: 777joker"} color={state.appTheme.text_lighter} opacity={0.5}/>
			</animated.View>

			<animated.View style={[w2, {left: 290, top: 128}]}>
				<VarText type={"md"} content={"挺住！"} color={state.appTheme.text_lighter} opacity={0.5}/>
				<VarText type={"md"} content={"by: yoo303"} color={state.appTheme.text_lighter} opacity={0.5}/>
			</animated.View>

			<animated.View style={[w3, {left: 20, top: 220}]}>
				<VarText type={"md"} content={"你最行了對吧？"} color={state.appTheme.text_lighter}opacity={0.5}/>
				<VarText type={"md"} content={"by: kevin0123"} color={state.appTheme.text_lighter}opacity={0.5}/>
			</animated.View>

			<animated.View style={[w3, {left: 200, top: 220}]}>
				<VarText type={"md"} content={"相信自己不然去吃大便～"} color={state.appTheme.text_lighter}opacity={0.5}/>
				<VarText type={"md"} content={"by: yoo303"} color={state.appTheme.text_lighter}opacity={0.5}/>
			</animated.View>

			<animated.View style={[w4, {left: 110, top: 384}]}>
				<VarText type={"md"} content={"加油，你可以的！"} color={state.appTheme.text_lighter}opacity={0.5}/>
				<VarText type={"md"} content={"by: yiyi0828"} color={state.appTheme.text_lighter}opacity={0.5}/>
			</animated.View>

			<animated.View style={[w4, {left: 290, top: 384}]}>
				<VarText type={"md"} content={"加油，你可以的！"} color={state.appTheme.text_lighter}opacity={0.5}/>
				<VarText type={"md"} content={"by: yoo303"} color={state.appTheme.text_lighter}opacity={0.5}/>
			</animated.View>

			<animated.View style={[w5, {left: 20, top: 512}]}>
				<VarText type={"md"} content={"挺你到底"} color={state.appTheme.text_lighter}opacity={0.5}/>
				<VarText type={"md"} content={"by: yushin0828"} color={state.appTheme.text_lighter}opacity={0.5}/>
			</animated.View>

			<animated.View style={[w5, {left: 200, top: 512}]}>
				<VarText type={"md"} content={"加油，你可以的！"} color={state.appTheme.text_lighter}opacity={0.5}/>
				<VarText type={"md"} content={"by: lightee"} color={state.appTheme.text_lighter}opacity={0.5}/>
			</animated.View>

			<animated.View style={[w6, {left: 110, top: 640}]}>
				<VarText type={"md"} content={"ＯＫㄉ"} color={state.appTheme.text_lighter}opacity={0.5}/>
				<VarText type={"md"} content={"by: chi shan yu"} color={state.appTheme.text_lighter}opacity={0.5}/>
			</animated.View>

			<animated.View style={[w6, {left: 290, top: 640}]}>
				<VarText type={"md"} content={"沒事沒事～～～"} color={state.appTheme.text_lighter}opacity={0.5}/>
				<VarText type={"md"} content={"by: yui23"} color={state.appTheme.text_lighter}opacity={0.5}/>
			</animated.View>


			<Pressable
				onPress={()=>{}}
				style={{
					paddingVertical:12,
					paddingHorizontal:13,
					marginTop:20,
					width: "90%",
					backgroundColor:state.appTheme.top_background_weak,
					borderWidth:1,
					borderRadius:10,
					borderColor:state.appTheme.top_background,
				}}
			>
				<VStack>
					<Text style={{fontSize:18,color:state.appTheme.text_light,lineHeight:30}}>「各種挫敗都是你成長的滋養。也許在當下你痛苦不堪，但你要記住，任何發生的事情都能夠為我們帶來成長與茁壯，有時換個角度想，生活自然就美好了起來。」</Text>
				</VStack>
				<HStack marginTop={20} align justifyContent={"flex-end"}>
					<Text style={{fontSize:16,color:state.appTheme.tab_active,}}>木子貍</Text>
				</HStack>
			</Pressable>
		</BaseContainer>
	)
}

export default MoodSupport