import React from "react";
import {Text} from "react-native";

export function VarText({type, content, ...props}){

	let styleObj ={}

	switch(type){
		case "mc":
			Object.assign(styleObj, { fontSize: 13 ,	fontWeight: "bold"})
			break
		case "sm":
			Object.assign(styleObj, { fontSize: 14 ,	fontWeight: "bold"})
			break
		case "md":
			Object.assign(styleObj, { fontSize: 16 ,	fontWeight: "bold"})
			break
		case "lg":
			Object.assign(styleObj, { fontSize: 20 ,	fontWeight: "bold"})
			break
		case "xl":
			Object.assign(styleObj, { fontSize: 24 ,	fontWeight: "bold"})
			break
		case "xxl":
			Object.assign(styleObj, { fontSize: 30 ,	fontWeight: "bold"})
			break
	}


	return(
		<Text style={[styleObj, {...props}]}>
			{content}
		</Text>
	)
}
