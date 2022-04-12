import {BaseContainer, HStack} from "../components/Layout";
import {LeftArrowIcon, RightArrowIcon} from "../components/IconButton";
import {SettingItem} from "../components/DefinedLayout";
import {VarText} from "../components/Text";
import {useContext} from "react";
import {AppContext} from "../global_state/AppStateProvider";

const ChooseTheme = ({navigation}) => {

	const [state, dispatch] = useContext(AppContext)

	return(
		<BaseContainer>
			<HStack align height={64} marginLeft={32} width={"100%"}>
				<LeftArrowIcon color={state.appTheme.text_lighter} size={30} onPress={()=> navigation.goBack()}/>
			</HStack>

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

		</BaseContainer>
	)
}

export default ChooseTheme