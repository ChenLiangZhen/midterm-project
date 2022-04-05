import * as SecureStore from "expo-secure-store"

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
	await SecureStore.setItemAsync("note_data", value)
}

export async function getNoteData(){
	let result = await SecureStore.getItemAsync("note_data");
	if (result) {
		return result
	} else {
		console.log("no data stored!")
	}
}