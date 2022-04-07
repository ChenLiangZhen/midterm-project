import {KeyboardAvoidingView, Platform, Pressable, StatusBar, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

export function BaseContainer({children, onTouchStart, type, ...props}){
	return(
		type === "tab"?
			<SafeAreaView style={{
				height: "100%",
				width: "100%",
				flex: 1,
			}} edges={['top','right', 'bottom', 'left']}>
				<KeyboardAvoidingView
					behavior={Platform.OS === "ios" ? "padding": "height"}
					style={{
						flex: 1,
					...props}}>

					<StatusBar barStyle="dark-content" backgroundColor="white"/>

					{children}
				</KeyboardAvoidingView>
			</SafeAreaView>
			:
			<SafeAreaView style={{
				height: "100%",
				width: "100%",
				flex: 1,

			}} edges={['top','right', 'bottom', 'left']} >
				<KeyboardAvoidingView
					behavior={Platform.OS === "ios" ? "padding": "height"}
					style={{
						flex: 1,

						...props}}>

					<StatusBar barStyle="dark-content" backgroundColor="white"/>


					{children}
				</KeyboardAvoidingView>
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

export function Container({children, ...props}){
	return(
		<View style={{
			justifyContent: props.justify || props.center ? "center" : undefined,
			alignItems: props.align || props.center ? "center" : undefined,
			...props
		}}>
			{children}
		</View>
	)
}

export function PressBox({children, onPress, ...props}){
	return(
		<Pressable
			onPress={onPress}
			style={{
				flexDirection: "row",
				justifyContent: "center" ,
				alignItems: "center",
				...props
		}}>
			{children}
		</Pressable>
	)
}







