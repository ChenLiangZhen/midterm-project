import {HStack} from "./Layout";
import {LeftArrowIcon, NoteOption} from "./IconButton";
import {useContext, useState} from "react";
import { config, animated, useSpring } from "@react-spring/native";
import {HEIGHT, WIDTH} from "../utility/deviceUtility";
import {Pressable, View} from "react-native";
import {AppContext} from "../global_state/AppStateProvider";
import HeartAnim from "./HeartAnim";

export function NoteHeader({navigation, onPressOption, onPressDisplayMode, onPressBack}){

	const [state, dispatch] = useContext(AppContext)

	const [showNoteOption, setShowNoteOption] = useState(false)
	// const noteOptionAnimation = useSpring({
	// 	backgroundColor: "red",
	// 	opacity: showNoteOption? 1: 0,
	// 	top: showNoteOption? 0: 0,
	// 	config: config.default
	// })

	return(
		<HStack align justifyContent="space-between" paddingVertical={4} paddingHorizontal={18}>
			<LeftArrowIcon color={state.appTheme.text_lighter} size={30} onPress={onPressBack}/>
			<NoteOption color={state.appTheme.text_lighter} size={28} onPress={onPressOption}/>

			{/*{ showNoteOption?*/}
			{/*	<animated.View style={[noteOptionAnimation, {*/}
			{/*		backgroundColor: state.appTheme.top_background_darken,*/}
			{/*		position: "absolute",*/}
			{/*		width: WIDTH,*/}
			{/*		height: HEIGHT / 5,*/}
			{/*		zIndex: 10,*/}
			{/*	}]}>*/}

			{/*	</animated.View> : <></>}*/}

		</HStack>
	)
}

export function SignHeader({navigation, onPressOption, onPressDisplayMode, onPressBack}){

	const [state, dispatch] = useContext(AppContext)

	const [showNoteOption, setShowNoteOption] = useState(false)
	// const noteOptionAnimation = useSpring({
	// 	backgroundColor: "red",
	// 	opacity: showNoteOption? 1: 0,
	// 	top: showNoteOption? 0: 0,
	// 	config: config.default
	// })

	return(
		<HStack align justifyContent="space-between" paddingVertical={4} paddingHorizontal={18}>
			<LeftArrowIcon color="gray" size={30} onPress={onPressBack}/>
			<NoteOption color="gray" size={28} onPress={onPressOption}/>

			{/*{ showNoteOption?*/}
			{/*	<animated.View style={[noteOptionAnimation, {*/}
			{/*		backgroundColor: state.appTheme.top_background_darken,*/}
			{/*		position: "absolute",*/}
			{/*		width: WIDTH,*/}
			{/*		height: HEIGHT / 5,*/}
			{/*		zIndex: 10,*/}
			{/*	}]}>*/}

			{/*	</animated.View> : <></>}*/}

		</HStack>
	)
}

export function SettingItem({position, onPress, children, ...props}){

	const [state, dispatch] = useContext(AppContext)

	let styleObject = {}

	switch(position){
		case "top":
			styleObject= {
				borderTopColor: state.appTheme.border,
				borderTopRightRadius:16,
				borderTopLeftRadius:16,
				borderBottomWidth: 0}
			break;
		case "middle":
			styleObject= {
				borderBottomWidth: 0,
				borderColor : state.appTheme.border_weak
			}
			break;

		case "bottom":
			styleObject= {
				borderBottomRightRadius:16,
				borderBottomLeftRadius:16,
				borderBottomColor: state.appTheme.border,
				borderTopColor: state.appTheme.border_weak,
				marginBottom: 16}
			break;

	}



	return(
		<Pressable
			onPress={onPress}
			style={[{
			height: 50,
			width:"auto" ,
			marginHorizontal:16,
			padding:12,
			paddingHorizontal: 16,
			backgroundColor:state.appTheme.top_background_weak,
			flexDirection: "row",
			borderTopWidth: 2,
			borderColor: state.appTheme.border,
			borderLeftColor: state.appTheme.border,
			borderRightColor: state.appTheme.border,
			justifyContent: "space-between",
			alignItems: "center"
		}, styleObject, {...props}]}>
			{children}
		</Pressable>
	)
}

export function LoadingOverlay(){

	const [state, dispatch]= useContext(AppContext)

	return(
		<View style={{
			position: "absolute",
			height: HEIGHT,
			width: WIDTH,
			justifyContent: "center",
			alignItems: "center",
			backgroundColor: state.appTheme.top_background_lighter,
			opacity: 0.65,
			zIndex: 1000
		}}>
			<HeartAnim opacity={1} size={200}/>
		</View>
	)
}