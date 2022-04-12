import {BaseContainer, Container, HStack, VStack} from "../../components/Layout";
import {Keyboard, Pressable, TextInput} from "react-native";
import {useContext, useEffect, useState} from "react";
import {VarText} from "../../components/Text";
import {NoteHeader} from "../../components/DefinedLayout";
import {animated, config, useSpring} from "@react-spring/native";
import {HEIGHT, WIDTH} from "../../utility/deviceUtility";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {AppContext} from "../../global_state/AppStateProvider";
import {ACTIONS} from "../../global_state/actions";
import {saveNoteData} from "../../utility/asyncManager";
import {NoteAngryIcon, NoteHappyIcon, NoteSadIcon, NoteSosoIcon} from "../../components/IconButton";

const MoodWriting = ({navigation, route}) => {

	const { id, title, content, createdAt } = route.params

	const [state, dispatch] = useContext(AppContext)

	const [noteTitle, setNoteTitle] = useState(title)
	const [noteContent, setNoteContent] = useState(content)
	const [showNoteOption, setShowNoteOption] = useState(false)

	const [activeMoodIcon, setActiveMoodIcon] = useState(1)

	const safeInset = useSafeAreaInsets()

	const noteOptionAnimation = useSpring({
		opacity: showNoteOption? 1: 0,
		top: showNoteOption? 0: 0,
		left: showNoteOption? WIDTH / 3: WIDTH,
		config: config.default
	})

	const optionItemAnimation = useSpring({
		opacity: showNoteOption? 1: 0,
		left: showNoteOption? 0: 75,
		delay: 300,
		config: config.slow
	})

	useEffect(()=>{

		console.log("reviewing ID = " + id)

		//慘痛教訓：千萬不要在其他地方亂宣告變數，並且謹記使用 const 宣告物件，
		//        才不會出現詭異的參照問題。

		//先從全域變數複製一份資料，作為儲存全域變數時所用的代理變數
		const userNoteDataCopy = state.userNoteData

		//定義此note的儲存代理資料
		const dataOfThisNote = {
			id: id,
			title: noteTitle,
			content: noteContent,
			createdAt: {
				year: createdAt.year,
				month: createdAt.month,
				day: createdAt.day
			}
		}

		console.log("This note: " + dataOfThisNote)

		//以當前作用的note，尋找其在代理儲存資料中的index
		const target = userNoteDataCopy.note.findIndex(note => note.id === id)
		console.log(dataOfThisNote)

		//將此筆資料儲存至該代理資料的[index]的位置
		userNoteDataCopy.note[target] = dataOfThisNote
		//
		console.log("targetINdex: "+target)

		//將改變後的代理資料儲存至全域變數
		dispatch({type: ACTIONS.SET_USER_NOTE_DATA, payload: userNoteDataCopy})

	}, [noteContent, noteTitle])

	return(
		<BaseContainer>
			<Pressable flex={1} onPress={()=> {
				Keyboard.dismiss()
				setShowNoteOption(false)
			}}>
				<NoteHeader navigation={navigation}
				            onPressOption={()=> {
					setShowNoteOption(true)}}

				            onPressBack={async ()=>{
									await saveNoteData(JSON.stringify(state.userNoteData))
					            console.log("userNoteData Saved")
					            navigation.goBack()
				            }}

				/>

				<animated.View style={[noteOptionAnimation, {
					padding: 24,
					backgroundColor: state.appTheme.top_background_darken,
					borderLeftWidth: 4,
					borderColor: state.appTheme.top_background_weak,
					position: "absolute",
					width: WIDTH,
					height: HEIGHT - safeInset.bottom - safeInset.top,
					zIndex: 10,
				}]}>
					<animated.View style={[optionItemAnimation, {
						justifyContent:"space-between",
						height:"100%"
					}]}>
							<VStack>
								<HStack marginBottom={4}>
									<VarText type="sm" content="njinjoin"/>
								</HStack>
							</VStack>

							<VStack>
								<HStack marginBottom={8}>
									<VarText type="md" content="字數統計：" color="dimgray" letterSpacing={1}/>
									<VarText type="md" content= {noteContent.length} color="gray" letterSpacing={1}/>
								</HStack>

								<HStack marginBottom={8}>
									<VarText type="md" content="閱讀時間：" color="dimgray" letterSpacing={1}/>
									<VarText type="md" content= { Math.round(noteContent.length * 0.085) + " 秒"} color="gray" letterSpacing={1}/>
								</HStack>
							</VStack>
					</animated.View>

				</animated.View>

				<Container>
					<TextInput
						style={{
							marginTop: 12,
							paddingHorizontal: 24,
							paddingVertical: 8,
							width: "100%",
							fontSize: 24,
							fontWeight: "bold",
							color: "dimgray"
						}}

						autoCapitalize="none"
						selectionColor="gray"
						placeholder="title"
						// placeholderTextColor
						value={noteTitle}
						onChangeText={(noteTitle)=> setNoteTitle(noteTitle)}
					/>
					<VStack marginTop={12} paddingTop={20} paddingBottom={10} justifyContent={"space-between"} height={150} borderWidth={2} borderRadius={16} borderColor={state.appTheme.top_background_darken_opaque50} backgroundColor={state.appTheme.top_background_lighter_opaque50} marginHorizontal={20} >
						<VarText type="md" content ={ state.userSetting.userName + "今天的心情是..."} marginLeft={28} fontWeight={"bold"} color={state.appTheme.text_lighter}/>
						<HStack align width={"100%"} justifyContent={"space-evenly"} paddingHorizontal={18}>
							<NoteHappyIcon size={80} active={activeMoodIcon === 1} onPress={()=>{ setActiveMoodIcon(1)}}/>
							<NoteSosoIcon size={80} active={activeMoodIcon === 2} onPress={()=>{ setActiveMoodIcon(2)}}/>
							<NoteSadIcon size={80} active={activeMoodIcon === 3} onPress={()=>{ setActiveMoodIcon(3)}}/>
							<NoteAngryIcon size={80} active={activeMoodIcon === 4} onPress={()=>{ setActiveMoodIcon(4)}}/>
						</HStack>
					</VStack>
				</Container>

				<Container flex={1} marginTop={16} marginBottom={16} paddingTop={20} paddingBottom={10} justifyContent={"space-between"} height={150} borderWidth={2} borderRadius={16} borderColor={state.appTheme.top_background_darken_opaque50} backgroundColor={state.appTheme.top_background_lighter_opaque50} marginHorizontal={20} >
					<TextInput
						style={{
							paddingHorizontal: 24,
							paddingVertical: 8,
							width: "100%",
							fontSize: 18,
							color: "gray"
						}}

						multiline={true }
						autoCapitalize="none"
						selectionColor="gray"
						placeholder="description"
						value={noteContent}
						onChangeText={async(noteContent)=> {
							setNoteContent(noteContent)

						}}
					/>
				</Container>

			</Pressable>
		</BaseContainer>
	)
}

export default MoodWriting