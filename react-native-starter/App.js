// import {StatusBar} from "expo-status-bar";
import {useState} from "react";
import {StyleSheet, View, FlatList, Button} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
    const [modalVisibility, setModalVisibility] = useState(false);
    const [goalList, setGoalList] = useState([]);

    function startGoalModalHandler() {
        setModalVisibility(true);
    }

    function addGoalHandler(enteredGoalText) {
        console.log("pressed", enteredGoalText);
        setGoalList((currentGoals) => [
            ...currentGoals,
            {text: enteredGoalText, id: Math.random().toString()},
        ]);
    }

    function deleteGoalHandler(id) {
        console.log("delete...", id);
        setGoalList((currentGoals) => {
            return currentGoals.filter((goal) => goal.id !== id);
        });
    }

    return (
        <View style={styles.appContainer}>
            {/* Adding a todo */}
            <Button
                title="Add new Goal"
                color="dodgerblue"
                onPress={startGoalModalHandler}
            />

            <GoalInput
                onAddGoal={addGoalHandler}
                modalVisible={modalVisibility}
                setModalVisibility={setModalVisibility}
            />

            {/* List of todos */}
            <View style={styles.goalsContainer}>
                <FlatList
                    data={goalList}
                    renderItem={(itemData) => {
                        return (
                            <GoalItem
                                id={itemData.item.id}
                                text={itemData.item.text}
                                onDeleteItem={deleteGoalHandler}
                            />
                        );
                    }}
                    keyExtractor={(item, index) => {
                        return item.id;
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
