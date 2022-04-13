import {BaseContainer, HStack} from "../components/Layout";
import {LeftArrowIcon, RightArrowIcon} from "../components/IconButton";
import {SettingItem} from "../components/DefinedLayout";
import {VarText} from "../components/Text";
import {useContext} from "react";
import {AppContext} from "../global_state/AppStateProvider";
import {Check, Data} from "../components/Icon";
import {ACTIONS} from "../global_state/actions";
import {saveThemeSelected} from "../utility/asyncManager";

const ChooseTheme = ({navigation}) => {

	const [state, dispatch] = useContext(AppContext)

	return (
		<BaseContainer>

			<HStack align height={64} marginLeft={16} width={"100%"}>
				<LeftArrowIcon color={state.appTheme.text_lighter} size={30} onPress={() => navigation.goBack()}/>
			</HStack>

			<HStack width="100%" justifyContent="flex-start" paddingHorizontal={24} height={42} align>
				<VarText type="md" fontWeight="bold" color={state.appTheme.text} letterSpacing={.5}
				         marginLeft={8}>主題</VarText>
			</HStack>

			<SettingItem position="top" onPress={async () => {

				dispatch({type: ACTIONS.SET_APP_THEME_SELECTED, payload: "warm_brown"})
				dispatch({type: ACTIONS.SET_APP_THEME, payload: "warm_brown"})
				await saveThemeSelected("warm_brown")
			}}>
				<VarText type="sm" color={state.appTheme.text_lighter} letterSpacing={.5}>亮色</VarText>
				{state.appThemeSelected === "warm_brown" ? <Check size={14} color={state.appTheme.text}/> : <></>}


			</SettingItem>

			{/*<View style={{ height: 1, width: "auto", marginHorizontal: 24, backgroundColor:"lightgray"}}/>*/}

			<SettingItem position="middle" onPress={async () => {

				dispatch({type: ACTIONS.SET_APP_THEME_SELECTED, payload: "dark"})
				dispatch({type: ACTIONS.SET_APP_THEME, payload: "dark"})
				await saveThemeSelected("dark")

			}}>
				<VarText type="sm" color={state.appTheme.text_lighter} letterSpacing={.5}>暗色</VarText>
				{state.appThemeSelected === "dark" ? <Check size={14} color={state.appTheme.text}/> : <></>}


			</SettingItem>

			<SettingItem position="bottom" onPress={async () => {

				dispatch({type: ACTIONS.SET_APP_THEME_SELECTED, payload: "blackwhite"})
				dispatch({type: ACTIONS.SET_APP_THEME, payload: "blackwhite"})
				await saveThemeSelected("blackwhite")

			}}>
				<VarText type="sm" color={state.appTheme.text_lighter} letterSpacing={.5}>黑白</VarText>
				{state.appThemeSelected === "blackwhite" ? <Check size={14} color={state.appTheme.text}/> : <></>}


			</SettingItem>

			{state.appThemeSelected === "blackwhite" ? <HStack width="100%" justifyContent="flex-start" paddingHorizontal={24} height={42} align>
					<VarText type="md" fontWeight="bold" color={state.appTheme.text} letterSpacing={.5}
					         marginLeft={8}>本主題無背景</VarText>
				</HStack> :

			<HStack width="100%" justifyContent="flex-start" paddingHorizontal={24} height={42} align>
				<VarText type="md" fontWeight="bold" color={state.appTheme.text} letterSpacing={.5}
				         marginLeft={8}>背景</VarText>
			</HStack> }


			{state.appThemeSelected === "blackwhite" ? <></> :

           <>
				<SettingItem position="top" onPress={async () => {

					dispatch({type: ACTIONS.SET_APP_BACKGROUND_SELECTED, payload: "../resource/cookiemr.png"})
					await saveThemeSelected("../resource/cookiemr.png")
				}}>
					<VarText type="sm" color={state.appTheme.text_lighter} letterSpacing={.5}>小餅乾</VarText>
					{state.appThemeSelected === "warm_brown" ? <Check size={14} color={state.appTheme.text}/> : <></>}


				</SettingItem>

			{/*<View style={{ height: 1, width: "auto", marginHorizontal: 24, backgroundColor:"lightgray"}}/>*/}

				<SettingItem position="middle" onPress={async ()=>{

					dispatch({type: ACTIONS.SET_APP_BACKGROUND_SELECTED, payload: "../resource/bigcookie.png"})
					await saveThemeSelected("../resource/bigcookie.png")

			}}>
				<VarText type="sm"  color={state.appTheme.text_lighter} letterSpacing={.5}>大餅乾</VarText>
			{state.appThemeSelected === "dark"? <Check size={14} color={state.appTheme.text}/>: <></>}


				</SettingItem>

				<SettingItem position="bottom" onPress={async()=>{

					dispatch({type: ACTIONS.SET_APP_BACKGROUND_SELECTED, payload: "../resource/line.png"})
					await saveThemeSelected("../resource/line.png")
			}}>
				<VarText type="sm"  color={state.appTheme.text_lighter} letterSpacing={.5}>線條</VarText>
			{state.appThemeSelected === "blackwhite"? <Check size={14} color={state.appTheme.text}/>: <></>}


				</SettingItem>
           </>
			}


		</BaseContainer>
	)
}

export default ChooseTheme