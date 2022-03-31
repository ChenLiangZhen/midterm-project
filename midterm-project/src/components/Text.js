import React from "react";
import {Text} from "react-native";

export function VarText({type, content, ...props}){

	let styleObj ={}

	switch(type){
		case "sm":
			Object.assign(styleObj, { fontSize: 24 ,	fontWeight: "bold"})
			break
	}


	return(
		<Text style={[styleObj, {...props}]}>
			{content}
		</Text>
	)
}
