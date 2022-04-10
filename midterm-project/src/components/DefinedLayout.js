import {HStack} from "./Layout";
import {LeftArrowIcon, NoteOption} from "./IconButton";
import {useState} from "react";
import { config, animated, useSpring } from "@react-spring/native";
import {HEIGHT, WIDTH} from "../utility/deviceUtility";
import {Pressable} from "react-native";

export function NoteHeader({navigation, onPressOption, onPressBack}){

	const [showNoteOption, setShowNoteOption] = useState(false)
	const noteOptionAnimation = useSpring({
		opacity: showNoteOption? 1: 0,
		top: showNoteOption? 0: 0,
		config: config.default
	})

	return(
		<HStack align justifyContent="space-between" paddingVertical={4} paddingHorizontal={18}>
			<LeftArrowIcon color="gray" size={30} onPress={onPressBack}/>
			<NoteOption color="gray" size={28} onPress={onPressOption}/>

			{ showNoteOption?
				<animated.View style={[noteOptionAnimation, {
					backgroundColor: "gray",
					position: "absolute",
					width: WIDTH,
					height: HEIGHT / 5,
					zIndex: 10,
				}]}>

				</animated.View> : <></>}


		</HStack>
	)
}

export function SettingItem({position, children, ...props}){

	let styleObject = {}

	switch(position){
		case "top":
			styleObject= {
				borderTopColor: "#ddd",
				borderTopRightRadius:16,
				borderTopLeftRadius:16,
				borderBottomWidth: 0}
			break;
		case "middle":
			styleObject= { borderBottomWidth: 0}
			break;

		case "bottom":
			styleObject= { borderBottomRightRadius:16,
				borderBottomLeftRadius:16,
				borderBottomColor: "#ddd",
				marginBottom: 16}
			break;

	}



	return(
		<Pressable style={[{
			height: 50,
			width:"auto" ,
			marginHorizontal:16,
			padding:12,
			paddingHorizontal: 16,
			backgroundColor:"#f6f6f6",
			flexDirection: "row",
			borderWidth: 1,
			borderColor: "#bbb",
			borderLeftColor: "#ddd",
			borderRightColor: "#ddd",
			justifyContent: "space-between",
			alignItems: "center"
		}, styleObject, {...props}]}>
			{children}
		</Pressable>
	)
}