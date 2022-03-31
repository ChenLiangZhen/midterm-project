import {View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

export function BaseContainer({children, type, ...props}){
	return(
		type === "tab"?
			<SafeAreaView style={{
				height: "100%",
				width: "100%",
				...props
			}}>
				{children}
			</SafeAreaView>
			:
			<SafeAreaView>

			</SafeAreaView>
	)
}

export function HStack({children, ...props}){
	return(
		<View style={{
			flexDirection: "row",
			...props
		}}>
			{children}
		</View>
	)
}

export function VStack({children, ...props}){
	return(
		<View style={{
			flexDirection: "column",
			...props
		}}>
			{children}
		</View>
	)
}







