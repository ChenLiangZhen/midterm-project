import React from "react";
import {Text} from "react-native";

export function VarText({type, content, children, ...props}){

	let styleObj ={}

	switch(type){
		case "mc":
			Object.assign(styleObj, { fontSize: 13})
			break
		case "sm":
			Object.assign(styleObj, { fontSize: 14})
			break
		case "md":
			Object.assign(styleObj, { fontSize: 16})
			break
		case "lg":
			Object.assign(styleObj, { fontSize: 20})
			break
		case "xl":
			Object.assign(styleObj, { fontSize: 24})
			break
		case "xxl":
			Object.assign(styleObj, { fontSize: 30})
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
