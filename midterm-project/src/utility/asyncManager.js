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

export function request(){

}