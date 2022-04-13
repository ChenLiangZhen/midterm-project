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

export async function saveUserSetting(value){
	await AsyncStorage.setItem("setting", value)
}

export async function getUserSetting(){
	let result = await AsyncStorage.getItem("setting");
	if (result) {
		return result
	} else {
		console.log("no data stored!")
	}
}

export async function saveThemeSelected(value){
	await AsyncStorage.setItem("theme", value)
}

export async function getThemeSelected(){
	let result = await AsyncStorage.getItem("theme");
	if (result) {
		return result
	} else {
		console.log("no data stored!")
	}
}

export async function clearAllData() {

	AsyncStorage.getAllKeys()
		.then(keys => AsyncStorage.multiRemove(keys))
		.then(() => console.log('success'));

	SecureStore.deleteItemAsync("token")
		.then(()=> console.log("Wiped user JWT"))
}