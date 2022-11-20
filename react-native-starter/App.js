// import {StatusBar} from "expo-status-bar";
import {useState} from "react";
import {StyleSheet, View, FlatList} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
    const [goalList, setGoalList] = useState([]);

    function addGoalHandler(enteredGoalText) {
        console.log("pressed", enteredGoalText);
        setGoalList((currentGoals) => [...currentGoals, enteredGoalText]);
    }

    return (
        <View style={styles.appContainer}>
            {/* Adding a todo */}
            <GoalInput onAddGoal={addGoalHandler} />

            {/* List of todos */}
            <View style={styles.goalsContainer}>
                <FlatList
                    data={goalList}
                    renderItem={(itemData) => {
                        return (
                            <GoalItem
                                key={itemData.index}
                                text={itemData.item}
                            />
                        );
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        padding: 50,
        paddingHorizontal: 16,
    },

    goalsContainer: {
        flex: 5,
    },
});
