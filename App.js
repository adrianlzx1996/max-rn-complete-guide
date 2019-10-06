import React, { useState } from "react";
import {
	Button,
	FlatList,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	View
} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
	const [courseGoals, setCourseGoals] = useState([]);
	const [isAddMode, setIsAddMode] = useState(false);

	const addGoalHandler = enteredGoal => {
		console.log(enteredGoal);
		setCourseGoals(currentGoals => [
			...currentGoals,
			{ id: Math.random(), value: enteredGoal }
		]);
		setIsAddMode(false);
	};

	const removeGoalHandler = goalId => {
		setCourseGoals(currentGoals => {
			return currentGoals.filter(goal => goal.id !== goalId);
		});
	};

	const cancelGoalAdditionHandler = () => {
		setIsAddMode(false);
	};

	return (
		<View style={styles.screen}>
			<Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
			<GoalInput
				onAddGoal={addGoalHandler}
				onCancel={cancelGoalAdditionHandler}
				visible={isAddMode}
			/>
			<FlatList
				data={courseGoals}
				keyExtractor={(item, index) => item.id}
				renderItem={itemData => (
					<GoalItem
						id={itemData.item.id}
						title={itemData.item.value}
						onDelete={removeGoalHandler}
						style={styles.listItem}
					/>
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		padding: 50
	},
	inputContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	},
	input: {
		width: "80%",
		borderBottomColor: "black",
		borderWidth: 1,
		padding: 10
	},
	listItem: {
		padding: 10,
		marginTop: 10,
		backgroundColor: "#ccc",
		borderColor: "black",
		borderWidth: 1
	}
});
