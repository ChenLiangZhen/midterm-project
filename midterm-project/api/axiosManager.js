import axios from "axios"
import {getToken} from "../src/utility/asyncManager";

const baseURL= "https://lightii.dev/"
const baseTestURL= "https://lightii.ap.ngrok.io"

const request = axios.create({
	baseURL: baseTestURL,
})

export async function requestManager(method: String, route: String, body: Object){

	const token = await getToken()
	const pureToken = token.replace(/['"]+/g, '')
	console.log(pureToken)

	return new Promise( async (resolve, reject)=>{
		switch(method){
			case "get":

				request.get(route, Object.assign({
					headers: { Authorization: `Bearer ` + pureToken}
				}, body))
					.then(res => {
						resolve(res.data)
					})
				break

			case "post":
				request.get(route, Object.assign({
					headers: { Authorization: `Bearer ` + pureToken}
				}, body))
					.then(res => {
						resolve(res.data)
					})
				break
		}
	})
}

export const signManager = axios.create({
	baseURL: baseTestURL
})