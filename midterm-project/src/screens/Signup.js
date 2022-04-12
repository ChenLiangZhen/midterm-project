import {BaseContainer, Container, HStack, PressBox, VStack} from "../components/Layout";
import {StatusBar, Text, TextInput, View} from "react-native";
import {TextStandard, VarText} from "../components/Text";
import {RightArrowIcon, User} from "../components/Icon";
import {useFocusEffect} from "@react-navigation/native";
import {useCallback, useContext, useEffect, useState} from "react";
import {config,animated, useSpring} from "@react-spring/native";
import {Key, Mail} from "../components/Icon";
import MoodWriting from "./note/MoodWriting";
import {AppContext} from "../global_state/AppStateProvider";
import {print4} from "../utility/colorConsole";
import {saveToken} from "../utility/asyncManager";
import {signManager} from "../../api/axiosManager";
import {HEIGHT, WIDTH} from "../utility/deviceUtility";
import {ACTIONS} from "../global_state/actions";
import {LoadingOverlay} from "../components/DefinedLayout";
import {LeftArrowIcon, NoteHappyIcon} from "../components/IconButton";

const Signup = ({navigation}) => {

	const [state, dispatch] = useContext(AppContext)

	const [present, setPresent] = useState(false)

	const [isAsync, setIsAsync] = useState(false)

	const [showStatusView, setShowStatusView] = useState(false)
	const [statusCode, setStatusCode] = useState("")
	const [nicknameInput, setNicknameInput] = useState("")
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

	const statusView= useSpring({
		opacity: showStatusView ? 1: 0,
		delay: 0,
		bottom: showStatusView ? 100: 50,
		config: config.default,
		onRest: async()=>{
			await new Promise(resolve => setTimeout(resolve, 1250));
			setShowStatusView(false)
		}
	})

	useFocusEffect(
		useCallback(() => {
			setPresent(true)
		}, [])
	);
	//
	// useEffect(()=>{
	// 	setShowStatusView(true)
	// }, [statusCode])

	return(
		<BaseContainer justifyContent="space-between" alignItems="center">

			{isAsync? <LoadingOverlay/>
			: <></>}


			<animated.View style={[statusView, {
				position: "absolute",
				width: WIDTH,
				alignItems: "center"

			}]}>
				<VarText type="md" content={statusCode} color={state.appTheme.selected_accent} fontWeight={"bold"}/>
			</animated.View>

			<HStack align height={64} marginLeft={32} width={"100%"}>
				<LeftArrowIcon color={state.appTheme.text_lighter} size={30} onPress={()=> navigation.goBack()}/>
			</HStack>

			<Container align height={HEIGHT * 0.65} width="100%" alignItems="flex-end">
				<VStack  width="100%" alignItems="flex-end">
					<animated.View style={[signinTitle, {
						width:"100%",
						justifyContent:"flex-start",
						paddingLeft:"10%",
						marginBottom: 36,
					}]}>
						<HStack >
							<VarText type="xl" content="註冊 MoodDiary" color={state.appTheme.text_lighter} fontWeight={"bold"}/>
						</HStack>
					</animated.View>

					<animated.View style={[signinCard, {
						height: 150,
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
							<User color={state.appTheme.text_lighter} size={22}/>
							<TextInput
								autoCapitalize="none"
								textContentType="nickname"
								placeholder="顯示名稱"
								placeholderTextColor={ state.appTheme.text_light}
								value={nicknameInput}
								onChangeText={(input)=> setNicknameInput(input)}
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

							navigation.navigate("Signin")
						}}>
							<VarText type="md" content="返回登入" color={state.appTheme.text_light} marginRight={4}/>
							<RightArrowIcon color={state.appTheme.text_light} size={20}/>
						</PressBox>

						{/*註冊程式碼*/}
						{/*註冊程式碼*/}
						{/*註冊程式碼*/}
						{/*註冊程式碼*/}

						<PressBox justifyContent={"flex-end"}  padding={4} width={100} align onPress={()=>{

							setStatusCode("")

							if(nicknameInput === "" || emailInput === "" || passwordInput=== ""){

								setStatusCode("請填寫所有欄位")
								setShowStatusView(true)
								return
							}

							if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput)){

								setStatusCode("Email 格式錯誤")
								setShowStatusView(true)
								return
							}

							if(passwordInput.length <6){

								setStatusCode("密碼長度不得少於 6 字元")
								setShowStatusView(true)
								return
							}

							else {
								setIsAsync(true)
								signManager.post("/api/signup", {
									"email": emailInput,
									"password": passwordInput
								})
									.then(
										async res=> {
											setIsAsync(false)

											print4("resolved", "MoodWriting", "Signup", JSON.stringify(res.data.token))
											await saveToken(JSON.stringify(res.data.token))
											// dispatch({type: ACTIONS.})

										}, rej=>{
											setIsAsync(false)

											print4("rejected", "MoodWriting", "Signup", rej)

											if(rej.message === "Request failed with status code 422"){
												setStatusCode("此 Email 已經被註冊")
												setShowStatusView(true)
												return

											} else {
												setStatusCode("未知錯誤")
												setShowStatusView(true)
												return
											}
										})
							}
						}}>
							<VarText fontWeight={"bold"} type="md" content="註冊" color={state.appTheme.selected_accent} marginRight={4}/>
							<RightArrowIcon  color={state.appTheme.selected_accent} size={20}/>
						</PressBox>
					</animated.View>

				</VStack>

			</Container>

		</BaseContainer>
	)
}

export default Signup

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