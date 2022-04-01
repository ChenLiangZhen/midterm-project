import {StatusBar, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

export function BaseContainer({children, type, ...props}){
	return(
		type === "tab"?
			<SafeAreaView style={{
				height: "100%",
				width: "100%",
			}}>
				<View style={{
					height: "100%",
					...props}}>
					{children}
				</View>
			</SafeAreaView>
			:
			<SafeAreaView style={{
				height: "100%",
				width: "100%",
			}}>
				<View style={{
					height: "100%",
					...props}}>
					{children}
				</View>
			</SafeAreaView>
	)
}

export function HStack({children, ...props}){
	return(
		<View style={{
			flexDirection: "row",
			justifyContent: props.justify? "center" : undefined,
			alignItems: props.align? "center" : undefined,
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
			justifyContent: props.justify? "center" : undefined,
			alignItems: props.align? "center" : undefined,
			...props
		}}>
			{children}
		</View>
	)
}







