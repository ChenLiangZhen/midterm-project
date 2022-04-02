import {Feather} from "@expo/vector-icons";
import {View} from "react-native";

export function Key({color, size, ...props}){
	return(
		<View style={{
			justifyContent: "center",
			alignItems: "center",
			height: size +2,
			width: size +2,
		}}
		>
			<Feather name="key" color={color} size={size}/>
		</View>
	)
}

export function Mail({color, size, ...props}){
	return(
		<View style={{
			justifyContent: "center",
			alignItems: "center",
			height: size +2,
			width: size +2,
		}}
		>
			<Feather name="mail" color={color} size={size}/>
		</View>
	)
}