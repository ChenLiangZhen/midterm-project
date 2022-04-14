import {BaseContainer, Container, HStack, VStack} from "../../components/Layout";
import {Keyboard, Pressable, ScrollView, StatusBar, Text, TextInput} from "react-native";
import React, {useContext, useEffect, useState} from "react";
import {VarText} from "../../components/Text";
import {NoteHeader} from "../../components/DefinedLayout";
import {animated, config, useSpring} from "@react-spring/native";
import {HEIGHT, WIDTH} from "../../utility/deviceUtility";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {AppContext} from "../../global_state/AppStateProvider";
import {ACTIONS} from "../../global_state/actions";
import {HeartSplash, NoteAngryIcon, NoteHappyIcon, NoteSadIcon, NoteSosoIcon} from "../../components/IconButton";
import {AntDesign, Feather} from "@expo/vector-icons";

const MoodGalaxy = ({navigation}) => {

	const [state, dispatch] = useContext(AppContext)

	const [activeMoodIcon, setActiveMoodIcon] = useState(1)

	const [press1,setPress1] = useState(false)
	const [press2,setPress2] = useState(false)
	const [press3,setPress3] = useState(false)
	const [press4,setPress4] = useState(false)
	const [press5,setPress5] = useState(false)

	return(
		<BaseContainer type={"tab"} alignItems="center">

			{state.appThemeSelected === "dark"?
				<StatusBar barStyle="light-content" backgroundColor={state.appTheme.base_background}/> :
				<StatusBar barStyle="dark-content" backgroundColor={state.appTheme.base_background}/> }

			<HStack marginTop={16} height={42} width={"80%"} backgroundColor={state.appTheme.tab_background} borderRadius={18} justifyContent="space-around" align>
				<Feather style={{marginLeft:2,}} name="search" size={20} color={state.appTheme.text_lighter}/>
				<Text style={{marginRight:4,color:state.appTheme.tab_inactive ,fontSize:16}}>搜尋日記</Text>
				<HStack width={180}/>
			</HStack>

			<HStack align width={WIDTH * 0.95}justifyContent={"center"} paddingHorizontal={16} marginTop={8}>
				<NoteHappyIcon size={80} active={activeMoodIcon === 1} onPress={()=>{ setActiveMoodIcon(1)}}/>
				<NoteSosoIcon size={80} active={activeMoodIcon === 2} onPress={()=>{ setActiveMoodIcon(2)}}/>
				<NoteSadIcon size={80} active={activeMoodIcon === 3} onPress={()=>{ setActiveMoodIcon(3)}}/>
				<NoteAngryIcon size={80} active={activeMoodIcon === 4} onPress={()=>{ setActiveMoodIcon(4)}}/>
			</HStack>

			<ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{
				alignItems: "center",
				width: WIDTH*0.9,
			}}>
				{/*one box*/}

				<Pressable
					onPress={()=>{}}
					style={{
						paddingVertical:12,
						paddingHorizontal:13,
						marginTop:20,
						width: "90%",
						backgroundColor:state.appTheme.top_background_weak,
						borderWidth:1,
						borderRadius:10,
						borderColor:state.appTheme.top_background,
					}}
				>
					<VStack>
						<Text style={{fontSize:18,color:state.appTheme.text_light,fontWeight:"bold",marginBottom:8,}}>這是別人日記的標題</Text>
						<Text style={{fontSize:16,color:state.appTheme.text_light,lineHeight:22}}>在洛杉磯，從黎明時分到落日餘暉籠罩大地，女演員暨品牌大使莉莉-蘿絲‧戴普 (Lily-Rose Depp) 展現年輕人獨有......</Text>
					</VStack>
					<HStack width={"100%"} marginTop={20} justifyContent={"space-between"} align>
						<Text style={{fontSize:14,color:state.appTheme.tab_active,}}>木子貍</Text>
						<HStack align>
							<Text style={{fontSize:14,color:state.appTheme.tab_active, marginRight:12,}}>2022/04/06</Text>
							<HeartSplash/>
						</HStack>
					</HStack>

				</Pressable><Pressable
				onPress={()=>{}}
				style={{
					paddingVertical:12,
					paddingHorizontal:13,
					marginTop:20,
					width: "90%",
					backgroundColor:state.appTheme.top_background_weak,
					borderWidth:1,
					borderRadius:10,
					borderColor:state.appTheme.top_background,
				}}
			>
				<VStack>
					<Text style={{fontSize:18,color:state.appTheme.text_light,fontWeight:"bold",marginBottom:8,}}>這是別人日記的標題</Text>
					<Text style={{fontSize:16,color:state.appTheme.text_light,lineHeight:22}}>在洛杉磯，從黎明時分到落日餘暉籠罩大地，女演員暨品牌大使莉莉-蘿絲‧戴普 (Lily-Rose Depp) 展現年輕人獨有......</Text>
				</VStack>
				<HStack width={"100%"} marginTop={20} justifyContent={"space-between"} align>
					<Text style={{fontSize:14,color:state.appTheme.tab_active,}}>木子貍</Text>
					<HStack align>
						<Text style={{fontSize:14,color:state.appTheme.tab_active, marginRight:12,}}>2022/04/06</Text>
						<HeartSplash/>
					</HStack>
				</HStack>

			</Pressable><Pressable
				onPress={()=>{}}
				style={{
					paddingVertical:12,
					paddingHorizontal:13,
					marginTop:20,
					width: "90%",
					backgroundColor:state.appTheme.top_background_weak,
					borderWidth:1,
					borderRadius:10,
					borderColor:state.appTheme.top_background,
				}}
			>
				<VStack>
					<Text style={{fontSize:18,color:state.appTheme.text_light,fontWeight:"bold",marginBottom:8,}}>這是別人日記的標題</Text>
					<Text style={{fontSize:16,color:state.appTheme.text_light,lineHeight:22}}>在洛杉磯，從黎明時分到落日餘暉籠罩大地，女演員暨品牌大使莉莉-蘿絲‧戴普 (Lily-Rose Depp) 展現年輕人獨有......</Text>
				</VStack>
				<HStack width={"100%"} marginTop={20} justifyContent={"space-between"} align>
					<Text style={{fontSize:14,color:state.appTheme.tab_active,}}>木子貍</Text>
					<HStack align>
						<Text style={{fontSize:14,color:state.appTheme.tab_active, marginRight:12,}}>2022/04/06</Text>
						<HeartSplash/>
					</HStack>
				</HStack>

			</Pressable><Pressable
				onPress={()=>{}}
				style={{
					paddingVertical:12,
					paddingHorizontal:13,
					marginTop:20,
					width: "90%",
					backgroundColor:state.appTheme.top_background_weak,
					borderWidth:1,
					borderRadius:10,
					borderColor:state.appTheme.top_background,
				}}
			>
				<VStack>
					<Text style={{fontSize:18,color:state.appTheme.text_light,fontWeight:"bold",marginBottom:8,}}>這是別人日記的標題</Text>
					<Text style={{fontSize:16,color:state.appTheme.text_light,lineHeight:22}}>在洛杉磯，從黎明時分到落日餘暉籠罩大地，女演員暨品牌大使莉莉-蘿絲‧戴普 (Lily-Rose Depp) 展現年輕人獨有......</Text>
				</VStack>
				<HStack width={"100%"} marginTop={20} justifyContent={"space-between"} align>
					<Text style={{fontSize:14,color:state.appTheme.tab_active,}}>木子貍</Text>
					<HStack align>
						<Text style={{fontSize:14,color:state.appTheme.tab_active, marginRight:12,}}>2022/04/06</Text>
						<HeartSplash/>
					</HStack>
				</HStack>

			</Pressable><Pressable
				onPress={()=>{}}
				style={{
					paddingVertical:12,
					paddingHorizontal:13,
					marginTop:20,
					marginBottom:20,
					width: "90%",
					backgroundColor:state.appTheme.top_background_weak,
					borderWidth:1,
					borderRadius:10,
					borderColor:state.appTheme.top_background,
				}}
			>
				<VStack>
					<Text style={{fontSize:18,color:state.appTheme.text_light,fontWeight:"bold",marginBottom:8,}}>這是別人日記的標題</Text>
					<Text style={{fontSize:16,color:state.appTheme.text_light,lineHeight:22}}>在洛杉磯，從黎明時分到落日餘暉籠罩大地，女演員暨品牌大使莉莉-蘿絲‧戴普 (Lily-Rose Depp) 展現年輕人獨有......</Text>
				</VStack>
				<HStack width={"100%"} marginTop={20} justifyContent={"space-between"} align>
					<Text style={{fontSize:14,color:state.appTheme.tab_active,}}>木子貍</Text>
					<HStack align>
						<Text style={{fontSize:14,color:state.appTheme.tab_active, marginRight:12,}}>2022/04/06</Text>
						<HeartSplash/>
					</HStack>
				</HStack>

			</Pressable>
			</ScrollView>
		</BaseContainer>
	)
}

export default MoodGalaxy