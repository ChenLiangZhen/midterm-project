import React, { useReducer } from "react";
import appReducer from "./reducers";
import {createContext} from "react";
import {appTheme} from "../utility/appTheme";

const initialAppState = {
	testState: "this is state!!!",
	appTheme: appTheme.warm_brown,
	appThemeSelected: "warm_brown",
	appBackgroundSelected: "../resource/cookiemr.png",
	firstTimeUsing: true,
	userSignedIn: false,
	userNoteData: {},
	userSetting: {
		userName: "你叫什麼名字呀？ ",
		userEmail: "你叫什麼名字呀？ ",
		displayBackground: false,
		background: "../require/bigcookie,png",
		accessibility: false,
		noteDisplayTwoColumn : false,
		tabBarDisplayFloat: false,
	}
}

const AppStateProvider = ({children}) =>{
	const [state, dispatch] = useReducer(appReducer, initialAppState)
	return(
		<AppContext.Provider value={[state, dispatch]}>
			{children}
		</AppContext.Provider>
	)
}

export const AppContext = createContext(initialAppState)
export default AppStateProvider