import React, { useState } from "react";
import { Button, Text, TextInput, View, StyleSheet, Modal } from "react-native";

export default GoalInput = props => {
	const [enteredGoal, setEnteredGoal] = useState("");
	const goalInputHandler = enteredText => {
		setEnteredGoal(enteredText);
	};

	const addGoalHandler = () => {
		props.onAddGoal(enteredGoal);
		setEnteredGoal("");
	};

	return (
		<Modal visible={props.visible} animationType="slide">
			<View style={styles.inputContainer}>
				<TextInput
					placeholder="Course Goal"
					style={styles.input}
					onChangeText={goalInputHandler}
					value={enteredGoal}
				/>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button
							title="Cancel"
							color="red"
							onPress={props.onCancel}
						/>
					</View>
					<View style={styles.button}>
						<Button title="Add" onPress={addGoalHandler} />
					</View>
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "space-between"
		// width: "40%"
	},
	button: {
		width: "40%"
	},
	inputContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	input: {
		width: "80%",
		borderBottomColor: "black",
		borderWidth: 1,
		padding: 10
	}
});
