import {BaseContainer, Container, HStack} from "../../components/Layout";
import {FeatherPenIcon} from "../../components/IconButton";
import {AppState, FlatList, Pressable, TextInput, View} from "react-native";
import {useContext, useEffect, useState} from "react";
import {AppContext} from "../../global_state/AppStateProvider";
import {VarText} from "../../components/Text";
import {date} from "../../utility/dateManager";
import {WIDTH} from "../../utility/deviceUtility";
import {ACTIONS} from "../../global_state/actions";

const TEST_DATA = {
	note: [
		{
			id: 1,
			title: "今天超雞掰！！！",
			content: "從來沒想過會遇到這麼雞掰的一天．．．"
		},
		{
			id: 2,
			title: "今天超雞掰！！！",
			content: "Sometimes thinking about quitting my job..."

		},
		{
			id: 3,
			title: "今天超雞掰！！！",
			content: "Today I ran into Mary, what a small world !"
		},
		{
			id: 4,
			title: "今天超雞掰！！！",
			content: "Sometimes thinking about quitting my job..."

		},
		{
			id: 5,
			title: "今天超雞掰！！！",
			content: "Today I ran into Mary, what a small world !"
		}
	]
}

const NoteItem = ({title, content, mode, navigation}) => {
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
			navigation.navigate("MoodWriting", {title: title, content: content})
		}}>
			<VarText type="md" content={title} marginLeft={10} margin={6} color="dimgray" fontWeight="bold"/>
			<View style={{ backgroundColor:"lightgray", height:1 }}/>
			<VarText type="sm" content={content} marginLeft={10} margin={4} color="dimgray" lineHeight={20}/>

		</Pressable>
	)
}

const Today = ({navigation}) => {

	const [state, dispatch] = useContext(AppContext)

	useEffect(()=>{
		dispatch({type: ACTIONS.SET_USER_NOTE_DATA, payload: TEST_DATA})
		console.log(state.userNoteData.note)
	},[])

	const [searchData, setSearchData] = useState("")
	const [displayMode, setDisplayMode] = useState("sd")

	const renderNotes = ({item}) => ( <NoteItem title={item.title} content={item.content} navigation={navigation} mode={displayMode}/> )


	return(

		<BaseContainer>
			<HStack width="100%" justifyContent="space-between" padding={16} paddingHorizontal={22} align>
				<HStack align>
					<VarText type="xl" content={date.year + " - "} color="#ccc"/>
					<VarText type="xl" content={date.month + " - "} color="gray"/>
					<VarText type="xl" content={date.day} color="gray"/>
				</HStack>


				<FeatherPenIcon color="gray" size={24} onPress={()=>{
					dispatch({type: ACTIONS.SET_USER_NOTE_DATA, payload:{}})
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