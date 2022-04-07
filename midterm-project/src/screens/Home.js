import {FlatList, Pressable} from "react-native";
import {BaseContainer, Container, HStack, PressBox} from "../components/Layout";
import {LeftArrowIcon, RightArrowIcon} from "../components/IconButton";
import {useEffect, useState} from "react";
import {VarText} from "../components/Text";
import {genCalendarObj} from "calendar-generator";
import {animated, config, useTransition} from "@react-spring/native";
import {WIDTH} from "../utility/deviceUtility";

function RenderItemDay({year, day, month, navigateDirection, navigation}) {

	const transitions = useTransition(true,

		navigateDirection === "right"? {
		from: { left: 100, opacity: 0 },
		enter: { left: 0, opacity: 1 },
		leave: { opacity: 0 },

		delay: (day < 40 && day > 0)? day * 5 : 0 ,
		config: config.stiff,

	}: {

		from: { right: 100, opacity: 0 },
		enter: { right: 0, opacity: 1 },
		leave: { opacity: 0 },
		// reverse: show,
		delay: (day < 40 && day > 0)? day * 5 : 0 ,
		config: config.stiff,
		// onRest: () => set(!show),
		}
	)

	return transitions(

		(styles, item) => item &&
			<animated.View style={styles}>
			<Pressable
				onPress={() => {
					navigation.navigate("MoodWriting", {
						id: "test",
						title: "title",
						content: "content",
						createdAt: {year: "wef", month: "svs", day: "saddsf"}
					})
				}}

				style={
					day === (new Date().getDate()) && month === (new Date().getMonth() + 1) && year === (new Date().getFullYear())? {
							margin: 8,
							width: Math.round(WIDTH * 0.85 / 7) -15,
							height: 30,
							justifyContent: "center",
							alignItems: "center",
							borderRadius: 100,
							borderColor: "black",
							borderWidth: 1
						}:
						day > 0 ? {
						padding: 10,
						width: Math.round(WIDTH * 0.85 / 7) + 1,
						height: 46,
						justifyContent: "center",
						alignItems: "center",
					} : {
						margin: 16,
						width: Math.round(WIDTH * 0.85 / 7) -31,
						height: 14,
						justifyContent: "center",
						alignItems: "center",
						backgroundColor: "whitesmoke",
							borderRadius:20,
					}
			}

			>{day === (new Date().getDate()) && month === (new Date().getMonth() + 1) && year === (new Date().getFullYear())?
				<VarText type="md" content={day > 0 ? day : "-"} fontWeight="bold"/> :
				<VarText type="md" content={day > 0 ? day : "-"} color={day > 0 ? "dimgray" : "transparent"}/>
			}
			</Pressable>
		</animated.View>
	)
}

export const Home = ({navigation}) => {

	const [calYear, setCalYear] = useState(new Date().getFullYear())
	const [calMonth, setCalMonth] = useState(new Date().getMonth() + 1)
	const [calDay, setCalDay] = useState(new Date().getDate())
	const [calMonthData, setCalMonthData] = useState()

	const [navigateMonth, setNavigateMonth] = useState(true)
	const [navigateDirection, setNavigateDirection] = useState("right")

	const [dateData, setDateData] = useState([])
	const [isDataReady, setIsDataReady] = useState(false)

	const [date, setDate] = useState(new Date(1598051730000));
	const [mode, setMode] = useState('date');
	const [show, setShow] = useState(false);

	const onChange = (event, selectedDate) => {
		const currentDate = selectedDate;
		setShow(false);
		setDate(currentDate);
	};

	const showMode = (currentMode) => {
		setShow(true);
		setMode(currentMode);
	};

	const showDatepicker = () => {
		showMode('date');
	};

	const showTimepicker = () => {
		showMode('time');
	};

	function WeekDay({day}){
		return(
			<Pressable
				onPress={() => {
					navigation.navigate("Today")
				}}
				style={{
					width: Math.round(WIDTH * 0.85 / 7) + 1,
					height: 40,
					justifyContent: "center",
					alignItems: "center",
					borderRadius: 50,
				}}
			>
				<VarText type="sm" content={day}/>
			</Pressable>
		)
	}

	useEffect(() => {

		let _dateData = []

		function getISOMonth(_month) {
			if (_month === 13) {

				return "01"
			} else {

			}
			if (_month < 10) {
				return "0" + _month
			}
			return _month + ""
		}

		function getISOYear(_month) {
			if (_month === 12) {
				let returnNum = calYear + 1
				return "" + returnNum
			} else {
				return calYear
			}
		}

		const fromDate = calYear + "-" + getISOMonth(calMonth) + "-01"
		const toDate = getISOYear(calMonth) + "-" + getISOMonth(calMonth + 1) + "-01"


		let cObj = genCalendarObj(fromDate, toDate)
		let addPreday = true
		let daysCount = 0

		for (let key in cObj.date) {

			let firstDayOfWeek = cObj.date[key].dayOfWeek
			if (firstDayOfWeek === 0) firstDayOfWeek = 7
			if (firstDayOfWeek === 1) addPreday = false

			if (addPreday)

				for (let count = 1; count < firstDayOfWeek; count++) {
					daysCount++
					_dateData.push({
						day: count * -1

					})
					addPreday = false
				}

			if (cObj.date[key].day === 1 && daysCount > 10) {
				while (daysCount < 42) {
					daysCount++
					_dateData.push({
						day: daysCount * -100
					})
				}
				break;
			}
			_dateData.push(cObj.date[key])
			daysCount++
		}

		setDateData(_dateData)
		console.log(_dateData)

	}, [calMonth, calYear])

	useEffect(() => {
		console.log("callback: dataData")
		// console.log(dateData)
		setIsDataReady(true)
	}, [dateData])

	const renderItem = ({item}) => (
		<RenderItemDay day={item.day} month={calMonth} year={calYear} navigateDirection={navigateDirection} navigation={navigation}/>
	)


	return (
		<BaseContainer marginTop={12} width="100%" height="100%">

			{/*{ show &&*/}
			{/*	<DateTimePicker testID="dateTimePicker"*/}
			{/*	                value={date}*/}
			{/*	                mode={mode}*/}
			{/*	                is24Hour={true}*/}
			{/*	                onChange={onChange}*/}
			{/*	                display="compact"*/}
			{/*	                style={{*/}
			{/*		                height: 100,*/}
			{/*	                }}*/}
			{/*	/>}*/}

			<Container width="100%" justify align>

			<HStack justifyContent="space-between" marginBottom={12} width="80%">
				<LeftArrowIcon size={30} onPress={async () => {

					setNavigateDirection("left")
					if(navigateMonth){
						if (calMonth === 1) {
							setCalMonth(12)
							setCalYear(prev => prev - 1)
						} else {
							setCalMonth(prev => prev - 1)
						}
					} else {
						setCalYear(prev => prev -1)
					}

				}} color="#000"/>



				<HStack align>
					<PressBox onPress={() => {
						setNavigateMonth(false)
					}}>
						<VarText type="lg" content={calYear} fontWeight={navigateMonth === true? "normal" : "bold"}/>
					</PressBox>
					<VarText type="lg" content="  -  "/>

					<PressBox onPress={() => {
						setNavigateMonth(true)
					}}>
						<VarText type="lg" content={calMonth} fontWeight={navigateMonth === true? "bold": "normal"}/>
					</PressBox>
				</HStack>


				<RightArrowIcon size={30} onPress={async () => {


					setNavigateDirection("right")

					if(navigateMonth){
						if (calMonth === 12) {
							setCalMonth(1)
							setCalYear(prev => prev + 1)
						} else {
							setCalMonth(prev => prev + 1)
						}
					} else {
						setCalYear(prev => prev +1)
					}

				}} color="#000"/>
			</HStack>

			<HStack backgroundColor="transparent" marginBottom={2} width={WIDTH * 0.9} align justify>
				<WeekDay day="MON"/>
				<WeekDay day="TUE"/>
				<WeekDay day="WED"/>
				<WeekDay day="THU"/>
				<WeekDay day="FRI"/>
				<WeekDay day="SAT"/>
				<WeekDay day="SUN"/>
			</HStack>

				{
					isDataReady ?
						<FlatList
							horizontal={false}
							ScrollIndicator={false}
							numColumns={7}
							scrollEnabled={false}
							contentContainerStyle={{
								height: 300,
								width: WIDTH * 0.9,
								backgroundColor: "#fff",
								justifyContent: "center",
								alignItems: "center",

								borderRadius: 16,
								overflow: "hidden"
							}}
							data={
								dateData
							}
							renderItem={
								renderItem
							}
							keyExtractor={
								item => item.day
							}
						/>
						: <></>
				}
			</Container>
			{/*const renderNotes = ({item}) => ( <NoteItem id={item.id} title={item.title} content={item.content} navigation={navigation} mode={displayMode} createdAt={item.createdAt}/> )*/}

		</BaseContainer>
	)
}