import { StatusBar } from 'expo-status-bar';
import React, {useContext, useEffect} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import AppStateProvider, {AppContext} from "./src/global_state/AppStateProvider";
import {ACTIONS} from "./src/global_state/actions";
import {SafeAreaView} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Welcome from "./src/screens/Welcome";
import {NavigationContainer} from "@react-navigation/native";
import Signin from "./src/screens/Signin";
import Signup from "./src/screens/Signup";
import Today from "./src/screens/note/Today";
import MoodWriting from "./src/screens/note/MoodWriting";
import {SafeAreaProvider} from "react-native-safe-area-context/src/SafeAreaContext";
import {getNoteData, saveNoteData} from "./src/utility/asyncManager";
import {date} from "./src/utility/dateManager";

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const TEST_DATA = {
   note: [
      {
         id: "0",
         title: "今天超雞掰！！！",
         content: "從來沒想過會遇到這麼雞掰的一天．．．"
      },
      {
         id: "1",
         title: "今天超雞掰！！！",
         content: "Sometimes thinking about quitting my job..."

      },
      {
         id: "2",
         title: "今天超雞掰！！！",
         content: "Today I ran into Mary, what a small world !"
      },
      {
         id: "3",
         title: "今天超雞掰！！！",
         content: "Sometimes thinking about quitting my job..."
      },
      {
         id: "4",
         title: "今天超雞掰！！！",
         content: "Today I ran into Mary, what a small world !"
      }
   ]
}

export default function App() {

  return (

        <AppStateProvider>
           <SafeAreaProvider>
              <NavigationContainer>

                 <StackNavigator/>

              </NavigationContainer>
           </SafeAreaProvider>
        </AppStateProvider>

  );
}

function StackNavigator(){

   const [state, dispatch] = useContext(AppContext)


   // APP Data initialization.

   useEffect(async ()=> {
      console.log(date)

      await saveNoteData(JSON.stringify(TEST_DATA))
      const data = await getNoteData()
      dispatch({type: ACTIONS.SET_USER_NOTE_DATA, payload: JSON.parse(data)})
   },[])

   return(
      <Stack.Navigator initialRouteName="Today">
         <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}}/>
         <Stack.Screen name="Today" component={Today} options={{headerShown: false}}/>
         <Stack.Screen name="MoodWriting" component={MoodWriting} options={{headerShown: false}}/>
         <Stack.Screen name="Signin" component={Signin} options={{headerShown: false}}/>
         <Stack.Screen name="Signup" component={Signup} options={{headerShown: false}}/>
         <Stack.Screen name="TabContent" component={TabNavigator} options={{headerShown: false}}/>
      </Stack.Navigator>
   )
}

function TabNavigator(){
   return(
      <Tab.Navigator>
         <Tab.Screen name="Welcome" component={Welcome}/>
      </Tab.Navigator>
   )
}