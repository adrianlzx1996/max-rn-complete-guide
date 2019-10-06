import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default GoalItem = props => {
	return (
		<TouchableOpacity
			activeOpacity={0.5}
			onPress={() => props.onDelete(props.id)}
			underlayColor="transparent"
		>
			<View style={props.style}>
				<Text>{props.title}</Text>
			</View>
		</TouchableOpacity>
	);
};
