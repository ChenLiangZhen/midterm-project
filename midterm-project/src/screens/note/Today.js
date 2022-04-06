import {BaseContainer, Container, HStack, PressBox} from "../../components/Layout";
import {FeatherPenIcon} from "../../components/IconButton";
import {AppState, FlatList, Pressable, Text, TextInput, View} from "react-native";
import {useCallback, useContext, useEffect, useState} from "react";
import {AppContext} from "../../global_state/AppStateProvider";
import {VarText} from "../../components/Text";
import {date} from "../../utility/dateManager";
import {WIDTH} from "../../utility/deviceUtility";
import {ACTIONS} from "../../global_state/actions";
import {useFocusEffect} from "@react-navigation/native";
import {getNoteData} from "../../utility/asyncManager";
import ActionSheet, { SheetManager } from "react-native-actions-sheet";

const NoteItem = ({id, title, content, mode, navigation}) => {
	return (
		<Pressable style={{
			overflow: "hidden",
			height: 108,
			width: mode === "single"? (WIDTH - 32) : (WIDTH - 52) /2,
			margin: 8,
			backgroundColor: "#ececec",
			borderRadius: 10,
			borderColor: "#ddd",
			borderWidth: 2,
		}} onPress={()=>{
			navigation.navigate("MoodWriting", {id : id ,title: title, content: content })
		}} onLongPress={()=>{
			console.log("LONGGGG!!!")
			SheetManager.show("helloworld_sheet" , {target: id});
		}}
		>
			<VarText type="md" content={title} marginLeft={10} margin={6} color="dimgray" fontWeight="bold"/>
			<View style={{ backgroundColor:"lightgray", height:1 }}/>
			<VarText type="sm" content={content} marginLeft={10} margin={4} color="dimgray" lineHeight={20}/>

		</Pressable>
	)
}

const Today = ({navigation}) => {

	const [state, dispatch] = useContext(AppContext)

	useFocusEffect(
		useCallback(() => {
		}, [])
	);

	const [searchData, setSearchData] = useState("")
	const [displayMode, setDisplayMode] = useState("sd")

	const [actionSheetDeleteTarget, setActionSheetDeleteTarget] = useState("")

	const renderNotes = ({item}) => ( <NoteItem id={item.id} title={item.title} content={item.content} navigation={navigation} mode={displayMode}/> )


	return(

		<BaseContainer>

			<ActionSheet
				id="helloworld_sheet"
				overlayColor="transparent"
				elevation={16}
				onBeforeShow={(target)=>{
					setActionSheetDeleteTarget(target.target)
					console.log(target.target)
				}}
				containerStyle={{
					height: 160,
					backgroundColor: "gray"
				}}
			>
				<Container flex={1}>
					<PressBox width="100%" height={48} backgroundColor="white"
						onPress={()=> {

							const userNoteDataCopy = state.userNoteData

							//將此筆資料儲存至該代理資料的[index]的位置
							userNoteDataCopy.note.splice(actionSheetDeleteTarget, 1)

							//將改變後的代理資料儲存至全域變數
							dispatch({type: ACTIONS.SET_USER_NOTE_DATA, payload: userNoteDataCopy})
						}}
					><VarText type={"sm"} content="DELETE"/></PressBox>
				</Container>
			</ActionSheet>

			<HStack width="100%" justifyContent="space-between" padding={16} paddingHorizontal={22} align>
				<HStack align>
					<VarText type="xl" content={date.year + " - "} color="#ccc"/>
					<VarText type="xl" content={date.month + " - "} color="gray"/>
					<VarText type="xl" content={date.day} color="gray"/>
					</HStack>


				<FeatherPenIcon color="gray" size={24} onPress={()=>{

					const userNoteDataCopy = state.userNoteData

					const newNote = {
						id: ""   +new Date().getFullYear() + "_" + (new Date().getMonth() +1) +"_" + new Date().getDate() +"_" + new Date().getHours() +"_" + new Date().getMinutes() +"_" + new Date().getSeconds() + "_" + new Date().getMilliseconds(),
						content: "" ,
						title: ""
					}

					console.log(state.userNoteData)
					console.log(userNoteDataCopy)
					userNoteDataCopy.note.push(newNote)

					navigation.navigate("MoodWriting", { id: newNote.id, title: newNote.title, content: newNote.content})
				}}/>

			</HStack>
			{/*<HStack width="100%" justifyContent="space-between" paddingHorizontal={16} marginBottom={8} align>*/}
			{/*	<TextInput*/}
			{/*		style={{*/}
			{/*			paddingHorizontal: 24,*/}
			{/*			paddingVertical: 8,*/}
			{/*			borderRadius: 32,*/}
			{/*			borderWidth: 2,*/}
			{/*			borderColor: "#ddd",*/}
			{/*			backgroundColor: "#ececec",*/}
			{/*			marginRight: 16,*/}
			{/*			flex: 1,*/}
			{/*			fontSize: 16*/}
			{/*		}}*/}
			{/*		value={searchData}*/}
			{/*		onChangeText={(searchData)=> setSearchData(searchData)}*/}
			{/*	/>*/}
			{/*</HStack>*/}

			<Container>
				{displayMode === "single"?
					<FlatList
						key={"_"}
						contentContainerStyle={{
							marginHorizontal: 10,
							height: "80%",
							justifyContent: "flex-start",
						}}

						ScrollIndicator={false}
						data={state.userNoteData.note}
						numColumns={1}
						renderItem={renderNotes}
						keyExtractor={item => "_" + item.id}
					/> :
					<FlatList
						key={"#"}
						contentContainerStyle={{
							marginHorizontal: 10,
							height: "80%",
							justifyContent: "flex-start",
						}}

						ScrollIndicator={false}
						data={state.userNoteData.note}
						numColumns={2}
						renderItem={renderNotes}
						keyExtractor={item => "#" + item.id}
					/>
				}

			</Container>

		</BaseContainer>
	)
}

export default Today