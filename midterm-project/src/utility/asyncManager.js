import * as SecureStore from "expo-secure-store"
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function saveToken(value) {
	await SecureStore.setItemAsync("token", value);
}

export async function getToken(){
	let result = await SecureStore.getItemAsync("token");
	if (result) {
		return result
	} else {
		console.log("no token stored!")
	}
}

export async function saveNoteData(value){
	await AsyncStorage.setItem("note_data", value)
}

export async function getNoteData(){
	let result = await AsyncStorage.getItem("note_data");
	if (result) {
		return result
	} else {
		console.log("no data stored!")
	}
}