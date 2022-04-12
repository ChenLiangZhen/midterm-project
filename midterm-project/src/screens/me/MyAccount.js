import {useContext, useEffect, useState} from "react";
import {TextStandard, VarText} from "../../components/Text";
import {RightArrowIcon} from "../../components/IconButton";
import {Platform, Pressable, ScrollView} from "react-native";
import {BaseContainer, HStack, PressBox, VStack} from "../../components/Layout";
import {AppContext} from "../../global_state/AppStateProvider";
import {SettingItem} from "../../components/DefinedLayout";
import {WIDTH} from "../../utility/deviceUtility";
import {Build, Color, Data, User} from "../../components/Icon";
import SegmentedControlTab from "react-native-segmented-control-tab"


const MyAccount = ({navigation}) => {

	const [state, dispatch] = useContext(AppContext)
	const [cloudControlIndex, setCloudControlIndex] = useState(1)
	const [floatTabControlIndex, setFloatTabControlIndex] = useState(0)
	const [backgroundControlIndex, setBackgroundControlIndex] = useState(1)
	const [accessibilityControlIndex, setAccessibilityControlIndex] = useState(0)

	useEffect(()=>{
		console.log(cloudControlIndex)
	}, [cloudControlIndex])

	return (
		<BaseContainer flex={1} type={"tab"}>
			<HStack
				height={96}
				padding={12}
				margin={16}
				backgroundColor={state.appTheme.top_background_weak}
				borderRadius={16}
				justifyContent="space-between"
				borderWidth={3}
				borderColor={state.appTheme.border}
				shadowColor={"gray"}
				shadowRadius={6}
				shadowOpacity={.2}
				shadowOffset={{
					width: 0,
					height: 2,
				}}

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

				<VStack width={WIDTH - 140} paddingVertical={8} alignItems="flex-end" justifyContent="center"
				        paddingRight={12}>
					<VarText type="mc" content={state.userSignedIn ? "" : "目前為離線模式"} marginBottom={4} color={state.appTheme.text_light}
					         lineHeight={28}/>

					{/* 登入邏輯 */}
					{/* 登入邏輯 */}
					{/* 登入邏輯 */}
					{/* 登入邏輯 */}

					<PressBox padding={8} backgroundColor= "transparent" borderRadius={12}
					          width={96} borderColor={state.appTheme.selected_accent} borderWidth={2}
					          onPress={() => {
									 navigation.navigate("Signin")




					          }}>
						<VarText type="md" content={state.userSignedIn ? "" : "登入"} fontWeight={"bold"}
						         color={state.appTheme.selected_accent} />
					</PressBox>
				</VStack>
			</HStack>



			<ScrollView style={{

			}}
				showsVerticalScrollIndicator={false}
			>


				<HStack width="100%" justifyContent="flex-start" paddingHorizontal={24} height={42} align>
					<Data color={state.appTheme.text} size={22}/>
					<VarText type="md" fontWeight="bold" color={state.appTheme.text} letterSpacing={.5} marginLeft={8}>資料管理</VarText>
				</HStack>

				<VStack shadowColor={"gray"}
				        shadowRadius={6}
				        shadowOpacity={.2}
				        shadowOffset={{
					        width: 0,
					        height: 2,
				        }}>

					<SettingItem position="top">
						<VarText type="sm"color={state.appTheme.text_lighter} letterSpacing={.5}>帳號管理</VarText>
						<RightArrowIcon size={14}/>
					</SettingItem>

					{/*<View style={{ height: 1, width: "auto", marginHorizontal: 24, backgroundColor:"lightgray"}}/>*/}

					{/*<View style={{ height: 1, width: "auto", marginHorizontal: 24, backgroundColor:"lightgray"}}/>*/}

					<SettingItem position="middle">
						<VarText type="sm"  color={state.appTheme.text_lighter} letterSpacing={.5}>訊息公告</VarText>
						<RightArrowIcon size={14}/>

					</SettingItem>

					{/*<View style={{ height: 1, width: "auto", marginHorizontal: 24, backgroundColor:"lightgray"}}/>*/}


					<SettingItem position="bottom">
						<VarText type="sm" color={state.appTheme.text_lighter} letterSpacing={.5}>雲端備份</VarText>

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
								values={["關閉", "開啟"]}
								selectedIndex={cloudControlIndex}
								onTabPress={(index)=>setCloudControlIndex(index)}
							/>
						</HStack>

						{/*<SegmentedControl*/}
						{/*	style={{*/}
						{/*		height: 32,*/}
						{/*		width: 200,*/}
						{/*	}}*/}
						{/*	values={['關閉', '開啟']}*/}
						{/*	selectedIndex={cloudControlIndex}*/}
						{/*	onValueChange={(selected) => {*/}
						{/*		setCloudControlIndex(selected);*/}
						{/*	}}*/}
						{/*/>*/}

					</SettingItem>
				</VStack>



				<HStack width="100%" justifyContent="flex-start" paddingHorizontal={24} height={42} align>
					<Color  color={state.appTheme.text} size={22}/>
					<VarText fontWeight="bold"type="md" color={state.appTheme.text} letterSpacing={.5} marginLeft={8}>個人化</VarText>
				</HStack>

				<VStack shadowColor={"gray"}
				        shadowRadius={6}
				        shadowOpacity={.2}
				        shadowOffset={{
					        width: 0,
					        height: 2,
				        }}>

					<SettingItem position="top" onPress={()=> navigation.navigate("ChooseTheme")}>
						<VarText type="sm" color={state.appTheme.text_lighter} letterSpacing={.5}>色彩主題</VarText>
						<RightArrowIcon size={14}/>
					</SettingItem>

					{/*<View style={{ height: 1, width: "auto", marginHorizontal: 24, backgroundColor:"lightgray"}}/>*/}


					<SettingItem position="middle" >
						<VarText type="sm" color={state.appTheme.text_lighter} letterSpacing={.5}>背景</VarText>
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
								values={["關閉", "開啟"]}
								selectedIndex={backgroundControlIndex}
								onTabPress={(index)=>setBackgroundControlIndex(index)}
							/>
						</HStack>
					</SettingItem>

					<SettingItem position="middle">
						<VarText type="sm" color={state.appTheme.text_lighter} letterSpacing={.5}>導覽列浮空</VarText>
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
								values={["關閉", "開啟"]}
								selectedIndex={floatTabControlIndex}
								onTabPress={(index)=>setFloatTabControlIndex(index)}
							/>
						</HStack>

					</SettingItem>


					{/*<View style={{ height: 1, width: "auto", marginHorizontal: 24, backgroundColor:"lightgray"}}/>*/}


					<SettingItem position="bottom">
						<VarText type="sm" color={state.appTheme.text_lighter} letterSpacing={.5}>輔助使用</VarText>
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
								values={["關閉", "開啟"]}
								selectedIndex={accessibilityControlIndex}
								onTabPress={(index)=>setAccessibilityControlIndex(index)}
							/>
						</HStack>

					</SettingItem>
				</VStack>



				{/*版本與問題回報*/}

				<HStack width="100%" justifyContent="flex-start" paddingHorizontal={24} height={42} align>
					<Build color={state.appTheme.text} size={22}/>
					<VarText type="md" fontWeight="bold" color={state.appTheme.text} letterSpacing={.5} marginLeft={8}>版本</VarText>
				</HStack>

				<VStack shadowColor={"gray"}
				        shadowRadius={6}
				        shadowOpacity={.2}
				        shadowOffset={{
					        width: 0,
					        height: 2,
				        }}
				        elevation={8}
				>

					<SettingItem position="top">
						<VarText type="sm"  color={state.appTheme.text_lighter} letterSpacing={.5}>回報問題</VarText>
						<RightArrowIcon size={14}/>
					</SettingItem>

					{/*<View style={{ height: 1, width: "auto", marginHorizontal: 24, backgroundColor:"lightgray"}}/>*/}

					<SettingItem position="middle">
						<VarText type="sm" color={state.appTheme.text_lighter} letterSpacing={.5}>聯絡我們</VarText>
						<RightArrowIcon size={14}/>

					</SettingItem>

					<SettingItem position="bottom">
						<VarText type="sm"  color={state.appTheme.text_lighter} letterSpacing={.5}>版本</VarText>
						<VarText type="sm" letterSpacing={.5} color={state.appTheme.text_light}>alpha 1.0.12 / build 4</VarText>
					</SettingItem>
				</VStack>

			</ScrollView>







		</BaseContainer>
	)
}

export default MyAccount