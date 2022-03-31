import { StatusBar } from 'expo-status-bar';
import React, {useContext} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import AppStateProvider, {AppContext} from "./src/global_state/AppStateProvider";
import {ACTIONS} from "./src/global_state/actions";
import {SafeAreaView} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Welcome from "./src/screens/Welcome";
import {NavigationContainer} from "@react-navigation/native";

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()


export default function App() {
  return (
        <AppStateProvider>

           <NavigationContainer>
              <StackNavigator/>
              {/*<TabNavigator/>*/}
           </NavigationContainer>
        </AppStateProvider>
  );
}

function StackNavigator(){
   return(
      <Stack.Navigator initialRouteName="Welcome">
         <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}}/>
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

const Home = () => {

   const [state, dispatch] = useContext(AppContext)

   return(
      <SafeAreaView>
         <View style={{
            height: "100%",
            width: "100%",
         }}>
            <Pressable
              onPress={()=>{
                 dispatch({type: ACTIONS.SET_APP_THEME, payload: "dark"})
              }}>
               <Text>{state.appTheme.bg}</Text>
               <Text style={{fontSize:100,}}>HIIIIIII</Text>
               <StatusBar style="auto"/>
            </Pressable>
         </View>
      </SafeAreaView>
   )
}