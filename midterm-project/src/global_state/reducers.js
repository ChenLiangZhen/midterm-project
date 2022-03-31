import {ACTIONS} from "./actions";
import {appTheme} from "../utility/appTheme";

const appReducer = (state, action) => {
	switch (action.type) {
		case ACTIONS.SET_APP_THEME:

		function getTheme(){
			switch(action.payload){
				case "light":
					console.log("executed")
					return appTheme.light
				case "dark":
					console.log("executed")
					return appTheme.dark
				case "solar":
					return appTheme.solar
				case "pinky":
					return appTheme.pinky
			}
		}

			return {
				...state,
				appTheme: getTheme(action.payload)
			}

		case ACTIONS.SET_TEST_STATE:
			return {
				...state,
				testState: action.payload
			};

	}};

export default appReducer