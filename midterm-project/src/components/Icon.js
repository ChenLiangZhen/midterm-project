import {AntDesign, Feather, Ionicons} from "@expo/vector-icons";
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

export function User({color, size, ...props}){
	return(
		<View style={{
			justifyContent: "center",
			alignItems: "center",
			height: size +2,
			width: size +2,
		}}
		>
			<AntDesign name="user" color={color} size={size}/>
		</View>
	)
}

export function Build({color, size, ...props}){
	return(
		<View style={{
			justifyContent: "center",
			alignItems: "center",
			height: size +2,
			width: size +2,
		}}
		>
			<Ionicons name="build-outline" color={color} size={size}/>
		</View>
	)
}

export function Color({color, size, ...props}){
	return(
		<View style={{
			justifyContent: "center",
			alignItems: "center",
			height: size +2,
			width: size +2,
		}}
		>
			<Ionicons name="color-filter" color={color} size={size}/>
		</View>
	)
}

export function Data({color, size, ...props}){
	return(
		<View style={{
			justifyContent: "center",
			alignItems: "center",
			height: size +2,
			width: size +2,
		}}
		>
			<Ionicons name="document-text-outline" color={color} size={size}/>
		</View>
	)
}
