import {Component, useContext} from "react";
import {VarText} from "../../components/Text";
import {RightArrowIcon} from "../../components/IconButton";
import {Pressable} from "react-native";
import {BaseContainer, HStack, VStack} from "../../components/Layout";
import {AppContext} from "../../global_state/AppStateProvider";
import {SettingItem} from "../../components/DefinedLayout";

function MainButton(props: { type: string, text: string, width: number, height: number }) {
	return null;
}

const MyAccount = ({navigation}) =>{

	const [state, dispatch] = useContext(AppContext)

	return(
		<BaseContainer>
			<HStack
				height={108}
				padding={12}
				margin={16}
				backgroundColor= "#f6f6f6"
				borderRadius={16}
				justifyContent="space-between"
				borderWidth={1}
				borderColor="lightgray"
			>
				<Pressable style={{
					height: 84,
					width: 84 ,
					borderRadius: 100,
					justifyContent: "center",
					alignItems: "center",
				}}>
					{/*<UserIcon size={90} color="#666"/>*/}
				</Pressable>

				<VStack width="35%" paddingVertical={8} alignItems="flex-start" justifyContent="center">
					<VarText type="mc" color="#555" lineHeight={28}>尚未登入... QQ</VarText>
					<VarText type="mc" color="#bbb">目前為訪客模式</VarText>
				</VStack>

				<VStack width="27%" paddingVertical={8} justifyContent="center">
					<MainButton text="登入" type="nano" width={80} height={30} />
				</VStack>

			</HStack>


			{/*訂單功能*/}

			<SettingItem position="top" >
				<VarText type="sm" fontWeight="bold" color="#444" letterSpacing={.5}>帳號管理</VarText>
				<RightArrowIcon size={14}/>
			</SettingItem>

			{/*<View style={{ height: 1, width: "auto", marginHorizontal: 24, backgroundColor:"lightgray"}}/>*/}


			<SettingItem position="middle" >
				<VarText type="sm" fontWeight="bold" color="#444" letterSpacing={.5}>退訂 / 退款</VarText>
				<RightArrowIcon size={14}/>

			</SettingItem>

			{/*<View style={{ height: 1, width: "auto", marginHorizontal: 24, backgroundColor:"lightgray"}}/>*/}

			<SettingItem position="middle" >
				<VarText type="sm" fontWeight="bold" color="#444" letterSpacing={.5}>訊息公告</VarText>
				<RightArrowIcon size={14}/>

			</SettingItem>

			{/*<View style={{ height: 1, width: "auto", marginHorizontal: 24, backgroundColor:"lightgray"}}/>*/}

			<SettingItem position="middle" >
				<VarText type="sm" fontWeight="bold" color="#444" letterSpacing={.5}>優惠折抵</VarText>
				<RightArrowIcon size={14}/>

			</SettingItem>

			{/*<View style={{ height: 1, width: "auto", marginHorizontal: 24, backgroundColor:"lightgray"}}/>*/}



			<SettingItem position="bottom" >
				<VarText type="sm" fontWeight="bold" color="#444" letterSpacing={.5}>客服中心</VarText>
				<RightArrowIcon size={14}/>

			</SettingItem>


			{/*介面與功能設定*/}


			<SettingItem position="top" >
				<VarText type="sm" fontWeight="bold" color="#444" letterSpacing={.5}>深色主題</VarText>
				<RightArrowIcon size={14}/>
			</SettingItem>

			{/*<View style={{ height: 1, width: "auto", marginHorizontal: 24, backgroundColor:"lightgray"}}/>*/}


			<SettingItem position="middle" >
				<VarText type="sm" fontWeight="bold" color="#444" letterSpacing={.5}>通知</VarText>
				<RightArrowIcon size={14}/>

			</SettingItem>

			{/*<View style={{ height: 1, width: "auto", marginHorizontal: 24, backgroundColor:"lightgray"}}/>*/}


			<SettingItem position="bottom" >
				<VarText type="sm" fontWeight="bold" color="#444" letterSpacing={.5}>輔助使用</VarText>
				<RightArrowIcon size={14}/>

			</SettingItem>

			{/*版本與問題回報*/}

			<SettingItem position="top" >
				<VarText type="sm" fontWeight="bold" color="#444" letterSpacing={.5}>回報問題</VarText>
				<RightArrowIcon size={14}/>
			</SettingItem>

			{/*<View style={{ height: 1, width: "auto", marginHorizontal: 24, backgroundColor:"lightgray"}}/>*/}


			<SettingItem position="bottom" >
				<VarText type="sm" fontWeight="bold" color="#444" letterSpacing={.5}>版本</VarText>
				<VarText type="sm" letterSpacing={.5} color="gray">alpha 1.0.12 / build 4</VarText>
			</SettingItem>


		</BaseContainer>
	)
}

export default MyAccount