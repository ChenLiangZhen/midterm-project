import {BaseContainer, Container, HStack, PressBox, VStack} from "../components/Layout";
import {StatusBar, Text, TextInput, View} from "react-native";
import {VarText} from "../components/Text";
import {RightArrow} from "../components/IconButton";
import {useFocusEffect} from "@react-navigation/native";
import {useCallback, useState} from "react";
import {config,animated, useSpring} from "@react-spring/native";
import {Key, Mail} from "../components/Icon";

const Welcome = ({navigation}) => {

	const [present, setPresent] = useState(false)
	const [emailInput, setEmailInput] = useState("")
	const [passwordInput, setPasswordInput] = useState("")

	const signinCard = useSpring({
		opacity: present? 1: 0,
		right: present? 0: -400,
		config: config.slow
	})

	const signinTitle = useSpring({
		opacity: present? 1: 0,
		right: present? 0: -100,
		delay: 500,
		config: config.slow
	})

	const pressbox = useSpring({
		opacity: present? 1: 0,
		delay: 500,
		config: config.slow
	})

	useFocusEffect(
		useCallback(() => {
			setPresent(true)
		}, [])
	);

	return(
		<BaseContainer justifyContent="center" alignItems="center">
			<StatusBar barStyle="dark-content"/>

			<VStack marginBottom={32} width="100%" alignItems="flex-end">
				<animated.View style={[signinTitle, {
					width:"100%",
					justifyContent:"flex-start",
					paddingLeft:"10%",
					marginBottom: 36,
				}]}>
					<HStack >
						<VarText type="xl" content="登入 MoodLog" color="dimgray"/>
					</HStack>
				</animated.View>

				<animated.View style={[signinCard, {
					height: 100,
					width: "90%",
					backgroundColor: "#eee",
					borderWidth: 1,
					borderRightWidth: 0,
					borderColor: "gray",
					borderTopLeftRadius: 16,
					borderBottomLeftRadius: 16,
					paddingLeft: 14,
					justifyContent: "space-evenly"
				}]}>

					<HStack align>
						<Mail color="dimgray" size={20}/>
						<TextInput
							textContentType="emailAddress"
							placeholder="電子郵件"
							value={emailInput}
							onChangeText={(input)=> setEmailInput(input)}
							selectionColor="gray"
							style={{
								width: "100%",
								borderRadius: 8,
								// backgroundColor: "#ddd",
								padding: 10,
								fontSize: 16,
							}}
						/>
					</HStack>

					<View style={{
						height: 1,
						backgroundColor: "gray"
					}}/>

					<HStack align>
						<Key color="dimgray" size={20}/>
						<TextInput
							textContentType="password"
							secureTextEntry={true}
							placeholder="密碼"
							value={passwordInput}
							onChangeText={(input)=> setPasswordInput(input)}
							selectionColor="gray"
							style={{
								width: "100%",
								borderRadius: 8,
								// backgroundColor: "#ddd",
								padding: 10,
								fontSize: 16,
							}}
						/>
					</HStack>


				</animated.View>

				<animated.View style={pressbox}>
					<PressBox padding={4} width={100} align onPress={()=> navigation.navigate("Welcome")}>
						<VarText type="md" content="登入" color="dimgray" marginRight={4}/>
						<RightArrow color="dimgray" size={20}/>
					</PressBox>

					<PressBox padding={4} width={100} align onPress={()=> navigation.navigate("Welcome")}>
						<VarText type="md" content="登入" color="dimgray" marginRight={4}/>
						<RightArrow color="dimgray" size={20}/>
					</PressBox>
				</animated.View>

			</VStack>
		</BaseContainer>
	)
}

export default Welcome