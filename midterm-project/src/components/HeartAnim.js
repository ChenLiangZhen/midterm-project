import React, {useEffect, useRef} from 'react';
import LottieView from 'lottie-react-native';
import {View} from "react-native";

export default function HeartAnim({opacity, size}) {

	let animRef = useRef()

	useEffect(()=>{
		animRef.current.play(20, 200)
	}, [])

	return (
		<View style={{
			justifyContent: "center",
			alignItems: "center",
			height: size + 20,
			width: size + 20
		}}>
			<LottieView
				ref={animRef}
				style={{
					opacity: opacity,
					height: size,
					width: size
				}}
				source={require('./heart.json')}
				loop />
		</View>

	)
}

















