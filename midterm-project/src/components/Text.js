import React, {useContext} from "react";
import {Text} from "react-native";
import {Platform} from "react-native";
import {AppContext} from "../global_state/AppStateProvider";

const smaller = -2
const accessibilityShift = 2

export const TextStandard = {

	mc: 14,
	sm: 15,
	md: 16,
	lg: 18,
	xl: 22,
	xxl: 26
}

export function VarText({type, content, children, ...props}){

	let styleObj ={}
	const [state, dispatch] = useContext(AppContext)

	switch(type){
		case "mc":
			Object.assign(styleObj, state.userSetting.accessibility? { fontSize: 16 } : Platform.OS === "ios"? { fontSize: 14} : { fontSize: 14 + smaller})
			break
		case "sm":
			Object.assign(styleObj, state.userSetting.accessibility? { fontSize: 17 } : Platform.OS === "ios"? { fontSize: 15}: { fontSize: 15 + smaller})
			break
		case "md":
			Object.assign(styleObj, state.userSetting.accessibility? { fontSize: 21 } : Platform.OS === "ios"? { fontSize: 16}: { fontSize: 16+ smaller})
			break
		case "lg":
			Object.assign(styleObj, state.userSetting.accessibility? { fontSize: 22 } : Platform.OS === "ios"? { fontSize: 18}: { fontSize: 20+ smaller -1 })
			break
		case "xl":
			Object.assign(styleObj, state.userSetting.accessibility? { fontSize: 26 } : Platform.OS === "ios"? { fontSize: 22}: { fontSize: 24+ smaller -1})
			break
		case "xxl":
			Object.assign(styleObj, state.userSetting.accessibility? { fontSize: 30 } : Platform.OS === "ios"? { fontSize: 26}: { fontSize: 30+ smaller -1})
			break
	}


	return(
		<Text style={[styleObj, {
			fontWeight: props.bold? "bold":"normal",
			...props
		}
		]}>
			{content}
			{children}
		</Text>
	)
}
