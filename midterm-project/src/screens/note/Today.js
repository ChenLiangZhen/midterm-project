import {BaseContainer, Container, HStack, PressBox, VStack} from "../../components/Layout";
import {
	GridIcon,
	NoteAngryIcon,
	NoteHappyIcon,
	NoteSadIcon,
	NoteSosoIcon,
	Plus,
	StackIcon
} from "../../components/IconButton";
import {FlatList, Pressable, Vibration, View} from "react-native";
import {createRef, useCallback, useContext, useState} from "react";
import {AppContext} from "../../global_state/AppStateProvider";
import {VarText} from "../../components/Text";
import {WIDTH} from "../../utility/deviceUtility";
import {ACTIONS} from "../../global_state/actions";
import {useFocusEffect} from "@react-navigation/native";
import ActionSheet, {SheetManager} from "react-native-actions-sheet";
import {animated, config, useTransition} from "@react-spring/native";

const NoteMood = ({moodDisplay}) => {
	switch (moodDisplay){
		case 1:
			return <NoteHappyIcon size={70} active={true}/>
		case 2:
			return <NoteSosoIcon size={70} active={true}/>
		case 3:
			return <NoteSadIcon size={70} active={true}/>
		case 4:
			return <NoteAngryIcon size={70} active={true}/>
	}
}

const NoteItem = ({id, title, content, gridMode, createdAt, noteMood, navigation}) => {

	const [state, dispatch] = useContext(AppContext)
	const [selectedStyle, setSelectedStyle] = useState(false)

	const transitions = useTransition(true, {
		from: { left: 100, opacity: 0 },
		enter: { left: 0, opacity: 1 },
		leave: { opacity: 0 },
		// reverse: show,
		delay: 50,
		config: config.stiff,
		// onRest: () => set(!show),
	})

	return transitions(

		(styles, item) => item &&

			<animated.View style={styles}>
				<Pressable style={ selectedStyle?
					(!gridMode)? {
					overflow: "hidden",
					height: (!gridMode)? 100 : 150,
					width: (!gridMode) ? (WIDTH - 32) : (WIDTH - 52) /2,
					margin: 8,
					backgroundColor: state.appTheme.top_background_darken,
					borderRadius: 10,
					borderBottomLeftRadius: 50,
					borderTopLeftRadius: 50,
					borderColor: "#ddd",
					borderWidth: 2,
					justifyContent: "space-between"
					} :{

						overflow: "hidden",
						height: (!gridMode)? 100 : 150,
						width: (!gridMode) ? (WIDTH - 32) : (WIDTH - 52) /2,
						margin: 8,
						backgroundColor: state.appTheme.top_background_darken,
						borderRadius: 10,
						borderColor: "#ddd",
						borderWidth: 2,
						justifyContent: "space-between"
					} :

					(!gridMode)? {
							overflow: "hidden",
							height: (!gridMode)? 100 : 150,
							width: (!gridMode) ? (WIDTH - 32) : (WIDTH - 52) /2,
							margin: 8,
							backgroundColor: state.appTheme.top_background_lighter_opaque50,
							borderRadius: 10,
							borderBottomLeftRadius: 50,
							borderTopLeftRadius: 50,
							borderColor: state.appTheme.top_background_darken,
							borderWidth: 2,
							justifyContent: "space-between"
						}:

					{
					overflow: "hidden",
					height: (!gridMode)? 100 : 150,
					width: (!gridMode) ? (WIDTH - 32) : (WIDTH - 52) /2,
					margin: 8,
					backgroundColor: state.appTheme.top_background_lighter_opaque50,
					borderRadius: 10,

					borderColor: state.appTheme.top_background_darken,
					borderWidth: 2,
					justifyContent: "space-between"

				}} onPress={()=>{
					console.log(noteMood)
					navigation.navigate("MoodWriting", {id : id ,title: title, content: content, createdAt: createdAt, noteMood: noteMood})

				}} onLongPress={()=>{
					console.log("LONGGGG!!!")
					Vibration.vibrate(75)
					setSelectedStyle(true)
					SheetManager.show("today" , {targetId: id});
				}}
				>

					<HStack>
						{(!gridMode)?
							<Container align justify height={100} width={80}>
								<NoteMood moodDisplay={noteMood}/>
							</Container>
							: <></>}

						<Container flex={1}>
							<VStack>
								<VarText type="md" content={title} marginLeft={10} margin={6} color="dimgray" fontWeight="bold"/>

								<View style={{ backgroundColor:"lightgray", height:1 }}/>
							</VStack>

							<VStack height={84} justifyContent="flex-start">
								<VarText type="sm" content={content} marginLeft={10} margin={4} color="dimgray" lineHeight={20}/>

							</VStack>

							<VStack width="100%" justifyContent="flex-end">
								<View style={{ backgroundColor:"lightgray", height:1 }}/>

								<HStack justifyContent="flex-end">
									<VarText type="sm" content={"" + createdAt.year + "．" + createdAt.month + "．" + createdAt.day} marginLeft={10} margin={4} color="#b8b8b8" lineHeight={20}/>
								</HStack>
							</VStack>
						</Container>
					</HStack>
				</Pressable>
			</animated.View>
	)
}

const Today = ({navigation}) => {


	const actionSheetRef = createRef()

	const [state, dispatch] = useContext(AppContext)
	const [refresh, setRefresh] = useState(0)
	const [displayGrid, setDisplayGrid] = useState(false)



	let ax = 0

	useFocusEffect(
		useCallback(() => {
			setRefresh(prev => prev +1)
			ax++
			console.log(ax)
		}, [])
	);

	const [searchData, setSearchData] = useState("")

	const [actionSheetDeleteTarget, setActionSheetDeleteTarget] = useState("")

	const renderNotes = ({item}) => ( <NoteItem id={item.id} title={item.title} content={item.content} navigation={navigation} gridMode={displayGrid} createdAt={item.createdAt} noteMood={item.noteMood}/> )

	return(

		<BaseContainer flex={1}>

			<ActionSheet
				ref={actionSheetRef}
				id="today"
				overlayColor="transparent"
				elevation={0}
				onBeforeShow={(target)=>{
					setActionSheetDeleteTarget(target.targetId)
					console.log(target.targetId)
				}}
				containerStyle={{
					height: 160,
					alignItems: "center",
					backgroundColor: "transparent"
				}}
			>
				<View>
					<PressBox width= {WIDTH * 0.825} height={48} backgroundColor="#eaeaea" borderColor="#ccc" borderWidth={3} zIndex={100} marginBottom={12} borderRadius={100}
					          onPress={()=> {

						          //以刪除的note的id 進行搜尋index
						          const userNoteDataCopy = state.userNoteData
						          const target = userNoteDataCopy.note.findIndex(note => note.id === actionSheetDeleteTarget)

						          //將此筆資料從該index刪除
						          userNoteDataCopy.note.splice(target, 1)

						          //將改變後的代理資料儲存至全域變數
						          dispatch({type: ACTIONS.SET_USER_NOTE_DATA, payload: userNoteDataCopy})
						          actionSheetRef.current?.hide()
					          }}
					><VarText type={"sm"} content="DELETE" fontWeight={ "bold"} color="#666" letterSpacing={1}/></PressBox>
					<PressBox width= {WIDTH * 0.825} height={48} backgroundColor="#eaeaea" borderColor="#ccc" borderWidth={3} zIndex={100} marginBottom={12} borderRadius={100}
					          onPress={()=> {

						          //以刪除的note的id 進行搜尋index
						          const userNoteDataCopy = state.userNoteData
						          const target = userNoteDataCopy.note.findIndex(note => note.id === actionSheetDeleteTarget)

						          const duplicatedNote = {
										 title:  userNoteDataCopy.note[target].title,
										 content:  userNoteDataCopy.note[target].content,
										 id: ""   + new Date().getFullYear() + "_" + (new Date().getMonth() +1) +"_" + new Date().getDate() +"_" + new Date().getHours() +"_" + new Date().getMinutes() +"_" + new Date().getSeconds() + "_" + new Date().getMilliseconds(),
							          createdAt: userNoteDataCopy.note[target].createdAt,
							          noteMood: userNoteDataCopy.note[target].noteMood
						          }

						          //將此筆資料從該index刪除
						          userNoteDataCopy.note.splice(target, 0, duplicatedNote)

						          console.log(userNoteDataCopy)

						          //將改變後的代理資料儲存至全域變數
						          dispatch({type: ACTIONS.SET_USER_NOTE_DATA, payload: userNoteDataCopy})
						          actionSheetRef.current?.hide()
					          }}
					><VarText type={"sm"} content="DUPLICATE" fontWeight={ "bold"} color="#666" letterSpacing={1}/></PressBox>
				</View>
			</ActionSheet>

			<HStack width="100%" justifyContent="space-between" padding={16} paddingHorizontal={22} align>
				<HStack align>
					<VarText type="xl" content={ " - "} color="#ccc"/>
					<VarText type="xl" content={" - "} color="gray"/>
					<VarText type="xl" content={"-"} color="gray"/>
					</HStack>


				<HStack width={200} align justifyContent="flex-end">
					{displayGrid?
						<GridIcon color={state.appTheme.text_light} size={24}
						          onPress={() => setDisplayGrid(false)}
						/> :

						<StackIcon color={state.appTheme.text_light} size={24}
						           onPress={()=> setDisplayGrid(true)}
						/>}
					<Plus marginLeft={12} color= {state.appTheme.selected_accent} size={26} onPress={ async ()=>{

						const userNoteDataCopy = state.userNoteData

						const newNote = {
							id: ""   + new Date().getFullYear() + "_" + (new Date().getMonth() +1) +"_" + new Date().getDate() +"_" + new Date().getHours() +"_" + new Date().getMinutes() +"_" + new Date().getSeconds() + "_" + new Date().getMilliseconds(),
							content: "" ,
							title: "",
							createdAt: {
								year: new Date().getFullYear() ,
								month: (new Date().getMonth() +1),
								day: new Date().getDate()
							},
							noteMood: 1
						}

						console.log(state.userNoteData)
						console.log(userNoteDataCopy)
						userNoteDataCopy.note.push(newNote)

						dispatch({type: ACTIONS.SET_USER_NOTE_DATA, payload: userNoteDataCopy})

						await new Promise(r => setTimeout(r, 500));

						navigation.navigate("MoodWriting", { id: newNote.id, title: newNote.title, content: newNote.content, createdAt: newNote.createdAt, noteMood: newNote.noteMood})

					}}/>
				</HStack>


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

			<Container flex={1}>
				{!displayGrid ?
					<FlatList
						key={"_"}
						contentContainerStyle={{
							marginHorizontal: 10,
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