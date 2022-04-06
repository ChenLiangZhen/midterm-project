import {HStack} from "./Layout";
import {LeftArrowIcon, NoteOption} from "./IconButton";
import {useState} from "react";
import { config, animated, useSpring } from "@react-spring/native";
import {HEIGHT, WIDTH} from "../utility/deviceUtility";

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