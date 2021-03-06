import React, {useContext, useEffect, useState} from "react";
import {TextStandard, VarText} from "../../components/Text";
import {RightArrowIcon} from "../../components/IconButton";
import {Platform, Pressable, ScrollView, StatusBar, View} from "react-native";
import {BaseContainer, HStack, PressBox, VStack} from "../../components/Layout";
import {AppContext} from "../../global_state/AppStateProvider";
import {LoadingOverlay, SettingItem} from "../../components/DefinedLayout";
import {HEIGHT, WIDTH} from "../../utility/deviceUtility";
import {Build, Color, Data, User} from "../../components/Icon";
import SegmentedControlTab from "react-native-segmented-control-tab"
import {ACTIONS} from "../../global_state/actions";
import {clearAllData, saveUserSetting} from "../../utility/asyncManager";


const MyAccount = ({navigation}) => {

	const [state, dispatch] = useContext(AppContext)
	const [cloudControlIndex, setCloudControlIndex] = useState(1)
	const [floatTabControlIndex, setFloatTabControlIndex] = useState(0)
	const [backgroundControlIndex, setBackgroundControlIndex] = useState(1)
	const [accessibilityControlIndex, setAccessibilityControlIndex] = useState(0)

	const [showConfirmReset, setShowConfirmReset] = useState(false)

	const [isAsync, setIsAsync] = useState(false)


	useEffect(()=>{
		console.log(cloudControlIndex)
	}, [cloudControlIndex])

	return (



		<BaseContainer flex={1} type={state.userSetting.tabBarDisplayFloat ? "tab" : "tab"}>
			{state.appThemeSelected === "dark"?
				<StatusBar barStyle="light-content" backgroundColor={state.appTheme.base_background}/> :
				<StatusBar barStyle="dark-content" backgroundColor={state.appTheme.base_background}/> }
			{isAsync? <LoadingOverlay/>
				: <></>}

			{showConfirmReset?
				<Pressable style={{
					position: "absolute",
					height: HEIGHT,
					width: WIDTH,
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: state.appTheme.top_background_lighter,
					opacity: 1,
					zIndex: 1000,
					paddingBottom: 100,
				}}

				>

					<VarText type={"lg"} content={"???????????????"} fontWeight={"bold"}/>
					<VarText type={"md"} content={"??????????????????"} fontWeight={"bold"}/>
					<HStack width={WIDTH} height={128} align justify>
						<PressBox  height={40} width={100} backgroundColor={state.appTheme.selected_accent} onPress={ async ()=>{
							setIsAsync(true)
							clearAllData()
								.then(res=> {setIsAsync(false)
									navigation.navigate("Welcome")
								})


							navigation.navigate("Splash")
						}} marginRight={12} borderRadius={24}>
							<VarText type={"md"} content={"??????"} fontWeight={"bold"} color={"white"}/>

						</PressBox>
						<PressBox height={40} width={100} backgroundColor={state.appTheme.selected_accent} onPress={()=> setShowConfirmReset(false)} marginLeft={12} borderRadius={24}>
							<VarText type={"md"} content={"??????"} fontWeight={"bold"} color={"white"}/>

						</PressBox>
					</HStack>
				</Pressable> : <></>
			}

			{isAsync? <LoadingOverlay/>
				: <></>}

			<HStack
				height={96}
				padding={12}
				margin={16}
				backgroundColor={state.appTheme.top_background_weak}
				borderRadius={16}
				justifyContent="space-between"
				borderWidth={3}
				borderColor={state.appTheme.border}

			>
				<Pressable style={{
					height: 70,
					width: 70,
					borderRadius: 100,
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: state.appTheme.top_background_darken
				}}>
					<User size={32} color={state.appTheme.text_light}/>
				</Pressable>

				{state.userSignedIn?  <VStack width={WIDTH - 140} paddingVertical={8} alignItems="flex-end" justifyContent="center" paddingRight={12}>
					<VarText type={"xl"} content={state.userSetting.userName} fontWeight={"bold"} color={state.appTheme.tab_active}/>
					<VarText type={"sm"} content={state.userSetting.userEmail} color={state.appTheme.tab_active}/>
				</VStack>

					: <VStack width={WIDTH - 140} paddingVertical={8} alignItems="flex-end" justifyContent="center"
				                                     paddingRight={12}>
					<VarText type="mc" content={state.userSignedIn ? "" : "?????????????????????"} marginBottom={4} color={state.appTheme.text_light}
					         lineHeight={28}/>

					{/* ???????????? */}
					{/* ???????????? */}
					{/* ???????????? */}
					{/* ???????????? */}

					<PressBox padding={8} backgroundColor= "transparent" borderRadius={12}
					          width={96} borderColor={state.appTheme.selected_accent} borderWidth={2}
					          onPress={() => {
						          navigation.navigate("Signin")




					          }}>
						<VarText type="md" content={state.userSignedIn ? "" : "??????"} fontWeight={"bold"}
						         color={state.appTheme.selected_accent} />
					</PressBox>
				</VStack>}

			</HStack>
			<ScrollView style={{}}
				showsVerticalScrollIndicator={false}
			>


				<HStack width="100%" justifyContent="flex-start" paddingHorizontal={24} height={42} align>
					<Data color={state.appTheme.text} size={22}/>
					<VarText type="md" fontWeight="bold" color={state.appTheme.text} letterSpacing={.5} marginLeft={8}>????????????</VarText>
				</HStack>

				<VStack>

					<SettingItem position="top">
						<VarText type="sm"color={state.appTheme.text} letterSpacing={.5}>????????????</VarText>
						<RightArrowIcon size={14} color={state.appTheme.text}/>
					</SettingItem>

					{/*<View style={{ height: 1, width: "auto", marginHorizontal: 24, backgroundColor:"lightgray"}}/>*/}

					{/*<View style={{ height: 1, width: "auto", marginHorizontal: 24, backgroundColor:"lightgray"}}/>*/}

					<SettingItem position="middle">
						<VarText type="sm"  color={state.appTheme.text} letterSpacing={.5}>????????????</VarText>
						<RightArrowIcon size={14} color={state.appTheme.text}/>

					</SettingItem>

					{/*<View style={{ height: 1, width: "auto", marginHorizontal: 24, backgroundColor:"lightgray"}}/>*/}


					<SettingItem position="bottom">
						<VarText type="sm" color={state.appTheme.text} letterSpacing={.5}>????????????</VarText>

						<HStack width={144}>
							<SegmentedControlTab
								tabStyle={{
									height:28,
									width: 100,
									borderWidth: 0,
									borderColor: state.appTheme.text_light,
									backgroundColor: state.appTheme.top_background_darken,
								}}
								activeTabStyle={{
									height:28,
									width: 100,
									backgroundColor: state.appTheme.selected_accent_light,
								}}
								tabTextStyle={{
									color: state.appTheme.text_lighter,
									borderColor: state.appTheme.text_light,
									fontSize: Platform.OS === "ios"? TextStandard.sm : TextStandard.mc
								}}
								activeTabTextStyle={{
									color: state.appTheme.top_background_lighter,
									fontWeight: "bold",
									fontSize: Platform.OS === "ios"? TextStandard.sm : TextStandard.mc
								}}
								values={["??????", "??????"]}
								selectedIndex={cloudControlIndex}
								onTabPress={(index)=>setCloudControlIndex(index)}
							/>
						</HStack>

						{/*<SegmentedControl*/}
						{/*	style={{*/}
						{/*		height: 32,*/}
						{/*		width: 200,*/}
						{/*	}}*/}
						{/*	values={['??????', '??????']}*/}
						{/*	selectedIndex={cloudControlIndex}*/}
						{/*	onValueChange={(selected) => {*/}
						{/*		setCloudControlIndex(selected);*/}
						{/*	}}*/}
						{/*/>*/}

					</SettingItem>
				</VStack>



				<HStack width="100%" justifyContent="flex-start" paddingHorizontal={24} height={42} align>
					<Color  color={state.appTheme.text} size={22}/>
					<VarText fontWeight="bold"type="md" color={state.appTheme.text} letterSpacing={.5} marginLeft={8}>?????????</VarText>
				</HStack>

				<VStack>

					<SettingItem position="top" onPress={()=> navigation.navigate("ChooseTheme")}>
						<VarText type="sm" color={state.appTheme.text} letterSpacing={.5}>????????????*</VarText>
						<RightArrowIcon size={14} color={state.appTheme.text}/>
					</SettingItem>

					{/*<View style={{ height: 1, width: "auto", marginHorizontal: 24, backgroundColor:"lightgray"}}/>*/}

					{state.appThemeSelected === "warm_brown"?

						<SettingItem position="middle" >
						<VarText type="sm" color={state.appTheme.text} letterSpacing={.5}>??????*</VarText>
						<HStack width={144}>
						<SegmentedControlTab
						tabStyle={{
						height:28,
						width: 100,
						borderWidth: 0,
						borderColor: state.appTheme.text_light,
						backgroundColor: state.appTheme.top_background_darken,
					}}
						activeTabStyle={{
						height:28,
						width: 100,
						backgroundColor: state.appTheme.selected_accent_light,

					}}
						tabTextStyle={{
						color: state.appTheme.text_lighter,
						borderColor: state.appTheme.text_light,
						fontSize: Platform.OS === "ios"? TextStandard.sm : TextStandard.mc
					}}
						activeTabTextStyle={{
						color: state.appTheme.top_background_lighter,
						fontWeight: "bold",
						fontSize: Platform.OS === "ios"? TextStandard.sm : TextStandard.mc
					}}
						values={["??????", "??????"]}
						selectedIndex={state.userSetting.displayBackground? 1: 0}

						onTabPress={ async (index)=> {

						console.log(state.userSetting)
						const userSetting = state.userSetting

						if(index === 0) userSetting.displayBackground = false
						if(index === 1) userSetting.displayBackground = true

						console.log(userSetting)
						dispatch({type: ACTIONS.SET_USER_SETTING, payload: userSetting})
						await saveUserSetting(JSON.stringify(userSetting))
					}}
						/>
						</HStack>
						</SettingItem>

						: <></>}


					{state.appThemeSelected === "blackwhite"?
						<SettingItem position="middle">
							<VarText type="sm" color={state.appTheme.text} letterSpacing={.5}>???????????????</VarText>
							<HStack width={144}>
								<SegmentedControlTab
									tabStyle={{
										height:28,
										width: 100,
										borderWidth: 0,
										borderColor: state.appTheme.text_light,
										backgroundColor: state.appTheme.top_background_darken,
									}}
									activeTabStyle={{
										height:28,
										width: 100,
										backgroundColor: state.appTheme.selected_accent_light,

									}}
									tabTextStyle={{
										color: state.appTheme.text_lighter,
										borderColor: state.appTheme.text_light,
										fontSize: Platform.OS === "ios"? TextStandard.sm : TextStandard.mc
									}}
									activeTabTextStyle={{
										color: state.appTheme.top_background_lighter,
										fontWeight: "bold",
										fontSize: Platform.OS === "ios"? TextStandard.sm : TextStandard.mc
									}}
									values={["??????", "??????"]}
									selectedIndex={state.userSetting.tabBarDisplayFloat ? 1: 0}
									onTabPress={ async (index)=> {

										console.log(state.userSetting)
										const userSetting = state.userSetting

										if(index === 0) userSetting.tabBarDisplayFloat = false
										if(index === 1) userSetting.tabBarDisplayFloat = true

										console.log(userSetting)
										dispatch({type: ACTIONS.SET_USER_SETTING, payload: userSetting})
										await saveUserSetting(JSON.stringify(userSetting))}}
								/>
							</HStack>

						</SettingItem>
						: <></>}



					{/*<View style={{ height: 1, width: "auto", marginHorizontal: 24, backgroundColor:"lightgray"}}/>*/}


					<SettingItem position="bottom">
						<VarText type="sm" color={state.appTheme.text} letterSpacing={.5}>????????????</VarText>
						<HStack width={144}>
							<SegmentedControlTab
								tabStyle={{
									height:28,
									width: 100,
									borderWidth: 0,
									borderColor: state.appTheme.text_light,
									backgroundColor: state.appTheme.top_background_darken,
								}}
								activeTabStyle={{
									height:28,
									width: 100,
									backgroundColor: state.appTheme.selected_accent_light,

								}}
								tabTextStyle={{
									color: state.appTheme.text_lighter,
									borderColor: state.appTheme.text_light,
									fontSize: Platform.OS === "ios"? TextStandard.sm : TextStandard.mc
								}}
								activeTabTextStyle={{
									color: state.appTheme.top_background_lighter,
									fontWeight: "bold",
									fontSize: Platform.OS === "ios"? TextStandard.sm : TextStandard.mc
								}}
								values={["??????", "??????"]}
								selectedIndex={state.userSetting.accessibility? 1: 0}
								onTabPress={ async (index)=> {

									console.log(state.userSetting)
									const userSetting = state.userSetting

									if(index === 0) userSetting.accessibility = false
									if(index === 1) userSetting.accessibility = true

									console.log(userSetting)
									dispatch({type: ACTIONS.SET_USER_SETTING, payload: userSetting})
									await saveUserSetting(JSON.stringify(userSetting))}}
							/>
						</HStack>

					</SettingItem>

					<HStack width={"100%"} justifyContent={"flex-end"}>
						<VarText type="mc" content={"* : ?????????????????? App ??????????????????"} marginRight={24} marginBottom={12} color={state.appTheme.text_light}/>
					</HStack>

				</VStack>



				{/*?????????????????????*/}

				<HStack width="100%" justifyContent="flex-start" paddingHorizontal={24} height={42} align>
					<Build color={state.appTheme.text} size={22}/>
					<VarText type="md" fontWeight="bold" color={state.appTheme.text} letterSpacing={.5} marginLeft={8}>??????</VarText>
				</HStack>

				<VStack>
					<SettingItem position="top">
						<VarText type="sm"  color={state.appTheme.text} letterSpacing={.5}>????????????</VarText>
						<RightArrowIcon size={14} color={state.appTheme.text}/>
					</SettingItem>

					{/*<View style={{ height: 1, width: "auto", marginHorizontal: 24, backgroundColor:"lightgray"}}/>*/}

					<SettingItem position="middle">
						<VarText type="sm" color={state.appTheme.text} letterSpacing={.5}>????????????</VarText>
						<RightArrowIcon size={14} color={state.appTheme.text}/>

					</SettingItem>

					<SettingItem position="middle" onPress={()=> setShowConfirmReset(true)}>
						<VarText type="sm" color={state.appTheme.text} letterSpacing={.5}>??????????????????</VarText>

					</SettingItem>

					<SettingItem position="bottom" marginBottom={state.userSetting.tabBarDisplayFloat? 48 : 24}>
						<VarText type="sm" color={state.appTheme.text} letterSpacing={.5}>??????</VarText>
						<VarText type="sm" letterSpacing={.5} color={state.appTheme.text_light}>alpha 1.0.12 / build 4</VarText>
					</SettingItem>

				</VStack>

			</ScrollView>

		</BaseContainer>
	)
}

export default MyAccount