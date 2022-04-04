import {BaseContainer, HStack, PressBox} from "../../components/Layout";
import {FlatList, TextInput} from "react-native";
import {useState} from "react";
import {VarText} from "../../components/Text";
import axiosManager, {requestManager, signManager} from "../../../api/axiosManager";
import {print4} from "../../utility/colorConsole";
import {getToken, saveToken} from "../../utility/asyncManager";

const MoodWriting = ({navigation}) => {



	const [passwordInput, setPasswordInput] = useState("")
	const [emailInput, setEmailInput] = useState("")
	const [userData, setUserData] = useState("")

	const [authStatus, setAuthStatus] = useState("N/A")
	const [token, setToken] = useState({})

	return(
		<BaseContainer>

			<TextInput
				style={{
					marginTop: 12,
					paddingHorizontal: 24,
					paddingVertical: 8,
					backgroundColor: "lightgray",
					width: "100%",
					fontSize: 20
				}}
				value={emailInput}
				onChangeText={(emailInput)=> setEmailInput(emailInput)}
			/>

			<TextInput
				style={{
					marginTop: 12,
					paddingHorizontal: 24,
					paddingVertical: 8,
					backgroundColor: "lightgray",
					width: "100%",
					fontSize: 20
				}}
				value={passwordInput}
				onChangeText={(passwordInput)=> setPasswordInput(passwordInput)}
			/>

			<HStack width="100%" justifyContent="space-evenly" marginVertical={16}>
				<PressBox height={48} width={100} backgroundColor="lightgray"
					onPress={()=> {
						signManager.post("/api/signin", {
							"email": emailInput,
							"password": passwordInput
						})
							.then(
								async res=> {
									print4("resolved", "MoodWriting", "Signin", res)
									await saveToken(JSON.stringify(res.data.token))
									setAuthStatus("已登入")
									setToken(res.data.token)
								}, rej=>{
									print4("rejected", "MoodWriting", "Signin", rej)
									setAuthStatus("登入失敗")
							})
					}}>
					<VarText type="md" content="登入"/>
				</PressBox>
				<PressBox height={48} width={100} backgroundColor="lightgray"
					onPress={()=>{
						signManager.post("/api/signup", {
							"email": emailInput,
							"password": passwordInput
						})
							.then(
								async res=> {
									print4("resolved", "MoodWriting", "Signup", JSON.stringify(res.data.token))
									await saveToken(JSON.stringify(res.data.token))
									setAuthStatus("註冊成功")
									setToken(res.data.token)
								}, rej=>{
									print4("rejected", "MoodWriting", "Signup", rej.message)
									setAuthStatus("註冊失敗")
								})
					}}>
				<VarText type="md" content="註冊"/>
				</PressBox>
			</HStack>

			<VarText type="md" content={authStatus}/>
			<VarText type="md" content={JSON.stringify(token)}/>

			<TextInput
				style={{
					marginTop: 12,
					paddingHorizontal: 24,
					paddingVertical: 8,
					backgroundColor: "lightgray",
					width: "100%",
					fontSize: 20
				}}
				value={userData}
				onChangeText={(userData)=> setUserData(userData)}
			/>
			<HStack width="100%" justifyContent="space-evenly" marginVertical={16}>
				<PressBox height={48} width={100} backgroundColor="lightgray"
				          onPress={ async ()=> {

					          requestManager("get", "/api", {})
						          .then(
							          async res => {
								          print4("resolved", "MoodWriting", "UpdateData", res)
							          }, rej=>{
								          print4("rejected", "MoodWriting", "UpdateData", rej.message)
							          })
				          }}>
					<VarText type="md" content="登入"/>
				</PressBox>
			</HStack>

			{/*<FlatList */}
			{/*	data={} */}
			{/*	renderItem={}*/}
			{/*	keyExtractor={}*/}
			{/*	/>*/}

		</BaseContainer>
	)
}

export default MoodWriting