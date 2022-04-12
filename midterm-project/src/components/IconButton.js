import {Feather, FontAwesome, MaterialCommunityIcons} from "@expo/vector-icons";
import {Image, Pressable} from "react-native";
import {config, animated, useSpring} from "@react-spring/native";
import {useState} from "react";

export function RightArrowIcon({color, size, onPress, ...props}){
	return(
		<Pressable style={{
			justifyContent: "center",
			alignItems: "center",
			height: size +8,
			width: size +8,
			...props
		}}
			onPress={onPress}
		>
			<Feather name="chevron-right" color={color} size={size}/>
		</Pressable>
	)
}

export function LeftArrowIcon({color, size, onPress, ...props}){
	return(
		<Pressable style={{
			justifyContent: "center",
			alignItems: "center",
			height: size +8,
			width: size +8,
			...props
		}}
			onPress={onPress}
		>
			<Feather name="chevron-left" color={color} size={size}/>
		</Pressable>
	)
}

export function FeatherPenIcon({color, size, onPress, ...props}){
	return(
		<Pressable style={{
			justifyContent: "center",
			alignItems: "center",
			height: size +4,
			width: size +4,
			...props
		}}
			onPress={onPress}
		>
			<Feather name="feather" color={color} size={size}/>
		</Pressable>
	)
}

export function SearchIcon({color, size, onPress, ...props}){
	return(
		<Pressable style={{
			justifyContent: "center",
			alignItems: "center",
			height: size +4,
			width: size +4,
			...props
		}}
			onPress={onPress}
		>
			<Feather name="search" color={color} size={size}/>
		</Pressable>
	)
}

export function NoteOption({color, size, onPress, ...props}){
	return(
		<Pressable style={{
			justifyContent: "center",
			alignItems: "center",
			height: size +4,
			width: size +4,
			...props
		}}
			onPress={onPress}
		>
			<Feather name="more-horizontal" color={color} size={size}/>
		</Pressable>
	)
}

export function GridIcon({color, size, onPress, ...props}){
	return(
		<Pressable style={{
			justifyContent: "center",
			alignItems: "center",
			height: size +4,
			width: size +4,
			...props
		}}
			onPress={onPress}
		>
			<MaterialCommunityIcons name="view-grid-outline" color={color} size={size}/>
		</Pressable>
	)
}

export function StackIcon({color, size, onPress, ...props}){
	return(
		<Pressable style={{
			justifyContent: "center",
			alignItems: "center",
			height: size +4,
			width: size +4,
			...props
		}}
			onPress={onPress}
		>
			<MaterialCommunityIcons name="view-agenda-outline" color={color} size={size}/>
		</Pressable>
	)
}

export function Plus({color, size, onPress, ...props}){
	return(
		<Pressable style={{
			justifyContent: "center",
			alignItems: "center",
			height: size +4,
			width: size +4,
			...props
		}}
			onPress={onPress}
		>
			<Feather name="plus" color={color} size={size}/>
		</Pressable>
	)
}

export function NoteHappyIcon({size, onPress, active, ...props}){
	return(
		<Pressable style={
			active?
			{
				justifyContent: "center",
				alignItems: "center",
				height: size +4,
				width: size +4,
				...props
			}: {
				justifyContent: "center",
				alignItems: "center",
				height: size +4,
				width: size +4,
				opacity: 0.25,
				...props
			}}
			onPress={onPress}
		>
			<Image style={{ width: size, height: size }} source={require("../resource/emoji_smile.png")}/>
		</Pressable>
	)
}

export function NoteSosoIcon({size, onPress, active, ...props}){
	return(
		<Pressable style={
			active?
				{
					justifyContent: "center",
					alignItems: "center",
					height: size +4,
					width: size +4,
					...props
				}: {
					justifyContent: "center",
					alignItems: "center",
					height: size +4,
					width: size +4,
					opacity: 0.25,
					...props
				}}
		           onPress={onPress}
		>
			<Image style={{ width: size, height: size }} source={require("../resource/emoji_neutral.png")}/>
		</Pressable>
	)
}

export function NoteSadIcon({size, onPress, active, ...props}){
	return(
		<Pressable style={
			active?
				{
					justifyContent: "center",
					alignItems: "center",
					height: size +4,
					width: size +4,
					...props
				}: {
					justifyContent: "center",
					alignItems: "center",
					height: size +4,
					width: size +4,
					opacity: 0.25,
					...props
				}}
		           onPress={onPress}
		>
			<Image style={{ width: size, height: size }} source={require("../resource/emoji_sad.png")}/>
		</Pressable>
	)
}

export function NoteAngryIcon({size, onPress, active, ...props}){
	return(
		<Pressable style={
			active?
				{
					justifyContent: "center",
					alignItems: "center",
					height: size +4,
					width: size +4,
					...props
				}: {
					justifyContent: "center",
					alignItems: "center",
					height: size +4,
					width: size +4,
					opacity: 0.25,
					...props
				}}
		           onPress={onPress}
		>
			<Image style={{ width: size, height: size }} source={require("../resource/emoji_angry.png")}/>
		</Pressable>
	)
}

export function HeartSplash(){

	const [present, setPresent] = useState(false)

	const heart1 = useSpring({
		opacity: present? 0:1,
		bottom: present? 24: 0,
		left: present? 30: 0,
		config: config.default
	})

	const heart2 = useSpring({
		opacity: present? 0:1,
		bottom: present? 24: 0,
		right: present? 30: 0,
		config: config.default
	})

	const heart3 = useSpring({
		opacity: present? 0:1,
		bottom: present? 24: 0,
		config: config.default
	})

	return(
		<Pressable style={{
			justifyContent: "center",
			alignItems: "center",
			height:32,
			width: 32,
		}}
			onPress={()=> setPresent(true)}
		>

			{present?
				<>
					<animated.View style={[heart1, {
					position: "absolute"
					}]}>
					<FontAwesome name="heart" color="red" size={20}/>
					</animated.View>

					<animated.View style={[heart2, {
						position: "absolute"
					}]}>
						<FontAwesome name="heart" color="red" size={18}/>
					</animated.View>

					<animated.View style={[heart3, {
					position: "absolute"
					}]}>
					<FontAwesome name="heart" color="red" size={14}/>
					</animated.View>

				</> : <></>
			}

			{present?
				<FontAwesome name="heart" color="red" size={32}/>
				:	<FontAwesome name="heart-o" color="red" size={32}/>

			}

		</Pressable>
	)
}