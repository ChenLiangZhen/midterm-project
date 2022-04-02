import {Feather} from "@expo/vector-icons";
import {Pressable} from "react-native";

export function RightArrow({color, size, onPress, navigation}){
	return(
		<Pressable style={{
			height: size +8,
			width: size +8,
		}}
			onPress={onPress}
		>
			<Feather name="chevron-right" color={color} size={size}/>
		</Pressable>
	)
}