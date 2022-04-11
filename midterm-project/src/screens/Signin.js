import {BaseContainer, Container, HStack, PressBox, VStack} from "../components/Layout";
import {StatusBar, Text, TextInput, View} from "react-native";
import {TextStandard, VarText} from "../components/Text";
import {RightArrowIcon} from "../components/IconButton";
import {useFocusEffect} from "@react-navigation/native";
import {useCallback, useContext, useState} from "react";
import {config,animated, useSpring} from "@react-spring/native";
import {Key, Mail} from "../components/Icon";
import MoodWriting from "./note/MoodWriting";
import {AppContext} from "../global_state/AppStateProvider";

const Signin = ({navigation}) => {

	const [state, dispatch] = useContext(AppContext)

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
		delay: 750,
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
						<VarText type="xl" content="登入 MoodDiary" color={state.appTheme.text_lighter} fontWeight={"bold"}/>
					</HStack>
				</animated.View>

				<animated.View style={[signinCard, {
					height: 100,
					width: "90%",
					backgroundColor: state.appTheme.top_background_darken,
					// borderWidth: 1,
					borderRightWidth: 0,
					// borderColor: "gray",
					borderTopLeftRadius: 16,
					borderBottomLeftRadius: 16,
					paddingLeft: 14,
					justifyContent: "space-evenly"
				}]}>

					<HStack align>
						<Mail color={state.appTheme.text_lighter} size={20}/>
						<TextInput
							autoCapitalize="none"
							textContentType="emailAddress"
							placeholder="電子郵件"
							placeholderTextColor={ state.appTheme.text_light}
							value={emailInput}
							onChangeText={(input)=> setEmailInput(input)}
							selectionColor= {state.appTheme.text_light}
							style={{
								width: "100%",
								borderRadius: 8,
								// backgroundColor: "#ddd",
								color: state.appTheme.text_lighter,
								padding: 10,
								fontSize: TextStandard.md,

							}}
						/>
					</HStack>

					<View style={{
						height: 1,
						backgroundColor: state.appTheme.text_light
					}}/>

					<HStack align>
						<Key color={state.appTheme.text_lighter} size={20}/>
						<TextInput
							autoCapitalize="none"
							textContentType="password"
							secureTextEntry={true}
							placeholder="密碼"
							placeholderTextColor={ state.appTheme.text_light}
							value={passwordInput}
							onChangeText={(input)=> setPasswordInput(input)}
							selectionColor= {state.appTheme.text_light}
							style={{
								width: "100%",
								borderRadius: 8,
								// backgroundColor: "#ddd",
								color: state.appTheme.text_lighter,
								padding: 10,
								fontSize: TextStandard.md,
							}}
						/>
					</HStack>


				</animated.View>

				<animated.View style={[pressbox, { marginTop: 24, marginRight: 16, alignItems: "flex-end"}]}>
					<PressBox justifyContent={"flex-end"} padding={4} width={200} align onPress={()=> {
						setPresent(false)
						navigation.navigate("Signup")
					}}>
						<VarText type="md" content="沒有帳號嗎？ 註冊" color={state.appTheme.text_light} marginRight={4}/>
						<RightArrowIcon color={state.appTheme.text_light} size={20}/>
					</PressBox>

					<PressBox justifyContent={"flex-end"} padding={4} width={200} align onPress={()=> {
						setPresent(false)
						navigation.navigate("Signup")
					}}>
						<VarText type="md" content="忘記密碼？" color={state.appTheme.text_light} marginRight={4}/>
						<RightArrowIcon color={state.appTheme.text_light} size={20}/>
					</PressBox>


					{/*登入程式碼*/}
					{/*登入程式碼*/}
					{/*登入程式碼*/}
					{/*登入程式碼*/}

					<PressBox justifyContent={"flex-end"} padding={4} width={100} align onPress={()=> {



					}}>
						<VarText type="md" content="登入" color={state.appTheme.selected_accent} fontWeight={"bold"} marginRight={4}/>
						<RightArrowIcon color={state.appTheme.selected_accent} size={20}/>
					</PressBox>
				</animated.View>

			</VStack>
		</BaseContainer>
	)
}

export default Signin

// const Testtt = ({navigation}) => {
//
// 	const [passwordInput, setPasswordInput] = useState("")
// 	const [emailInput, setEmailInput] = useState("")
// 	const [userData, setUserData] = useState("")
//
// 	const [authStatus, setAuthStatus] = useState("N/A")
// 	const [token, setToken] = useState({})
//
// 	return(
// 		<BaseContainer>
//
// 			<TextInput
// 				style={{
// 					marginTop: 12,
// 					paddingHorizontal: 24,
// 					paddingVertical: 8,
// 					backgroundColor: "lightgray",
// 					width: "100%",
// 					fontSize: 20
// 				}}
// 				value={emailInput}
// 				onChangeText={(emailInput)=> setEmailInput(emailInput)}
// 			/>
//
// 			<TextInput
// 				style={{
// 					marginTop: 12,
// 					paddingHorizontal: 24,
// 					paddingVertical: 8,
// 					backgroundColor: "lightgray",
// 					width: "100%",
// 					fontSize: 20
// 				}}
// 				value={passwordInput}
// 				onChangeText={(passwordInput)=> setPasswordInput(passwordInput)}
// 			/>
//
// 			<HStack width="100%" justifyContent="space-evenly" marginVertical={16}>
// 				<PressBox height={48} width={100} backgroundColor="lightgray"
// 				          onPress={()=> {
// 					          signManager.post("/api/signin", {
// 						          "email": emailInput,
// 						          "password": passwordInput
// 					          })
// 						          .then(
// 							          async res=> {
// 								          print4("resolved", "MoodWriting", "Signin", res)
// 								          await saveToken(JSON.stringify(res.data.token))
// 								          setAuthStatus("已登入")
// 								          setToken(res.data.token)
// 							          }, rej=>{
// 								          print4("rejected", "MoodWriting", "Signin", rej)
// 								          setAuthStatus("登入失敗")
// 							          })
// 				          }}>
// 					<VarText type="md" content="登入"/>
// 				</PressBox>
// 				<PressBox height={48} width={100} backgroundColor="lightgray"
// 				          onPress={()=>{
// 					          signManager.post("/api/signup", {
// 						          "email": emailInput,
// 						          "password": passwordInput
// 					          })
// 						          .then(
// 							          async res=> {
// 								          print4("resolved", "MoodWriting", "Signup", JSON.stringify(res.data.token))
// 								          await saveToken(JSON.stringify(res.data.token))
// 								          setAuthStatus("註冊成功")
// 								          setToken(res.data.token)
// 							          }, rej=>{
// 								          print4("rejected", "MoodWriting", "Signup", rej.message)
// 								          setAuthStatus("註冊失敗")
// 							          })
// 				          }}>
// 					<VarText type="md" content="註冊"/>
// 				</PressBox>
// 			</HStack>
//
// 			<VarText type="md" content={authStatus}/>
// 			<VarText type="md" content={JSON.stringify(token)}/>
//
// 			<TextInput
// 				style={{
// 					marginTop: 12,
// 					paddingHorizontal: 24,
// 					paddingVertical: 8,
// 					backgroundColor: "lightgray",
// 					width: "100%",
// 					fontSize: 20
// 				}}
// 				value={userData}
// 				onChangeText={(userData)=> setUserData(userData)}
// 			/>
// 			<HStack width="100%" justifyContent="space-evenly" marginVertical={16}>
// 				<PressBox height={48} width={100} backgroundColor="lightgray"
// 				          onPress={ async ()=> {
//
// 					          requestManager("get", "/api", {})
// 						          .then(
// 							          async res => {
// 								          print4("resolved", "MoodWriting", "UpdateData", res)
// 							          }, rej=>{
// 								          print4("rejected", "MoodWriting", "UpdateData", rej.message)
// 							          })
// 				          }}>
// 					<VarText type="md" content="登入"/>
// 				</PressBox>
// 			</HStack>
//
// 			{/*<FlatList */}
// 			{/*	data={} */}
// 			{/*	renderItem={}*/}
// 			{/*	keyExtractor={}*/}
// 			{/*	/>*/}
//
// 		</BaseContainer>
// 	)
// }
//
// export default MoodWriting