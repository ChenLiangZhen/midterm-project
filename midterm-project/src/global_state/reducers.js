import {ACTIONS} from "./actions";
import {appTheme} from "../utility/appTheme";

const appReducer = (state, action) => {
	switch (action.type) {
		case ACTIONS.SET_APP_THEME:

		function getTheme() {
			switch (action.payload) {
				case "warm_brown":
					console.log("executed")
					return appTheme.warm_brown
				case "dark":
					console.log("executed")
					return appTheme.dark
				case "blackwhite":
					return appTheme.blackwhite
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

		case ACTIONS.SET_APP_THEME_SELECTED:
			return {
				...state,
				appThemeSelected: action.payload
			};

		case ACTIONS.SET_USER_NOTE_DATA:
			return {
				...state,
				userNoteData: action.payload
			}

		case ACTIONS.SET_USER_SETTING:
			return {
				...state,
				userSetting: action.payload
			}

		case ACTIONS.SET_FIRST_TIME_USING:
			return {
				...state,
				firstTimeUsing: action.payload
			}

		case ACTIONS.SET_USER_SIGNED_IN:
			return {
				...state,
				userSignedIn: action.payload
			}

		case ACTIONS.SET_APP_BACKGROUND_SELECTED:
			return {
				...state,
				appBackgroundSelected: action.payload
			}

	}
};

export default appReducer