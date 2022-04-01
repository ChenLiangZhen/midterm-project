import {BaseContainer, VStack} from "../components/Layout";
import {StatusBar, Text} from "react-native";
import {VarText} from "../components/Text";
import {RightArrow} from "../components/IconButton";

const Welcome = ({navigation}) => {

	return(
		<BaseContainer justifyContent="center" alignItems="center">
			<StatusBar barStyle="dark-content"/>
			<VStack marginBottom={32} height="25%" width="100%"  align justifyContent="space-between">
				<VarText type="xl" content="Welcome!"/>
				<RightArrow color="black" size={32} onPress={()=> navigation.navigate("Signup")} navigation={navigation}/>
			</VStack>
		</BaseContainer>
	)
}

export default Welcome