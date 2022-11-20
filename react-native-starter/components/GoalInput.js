import {useState} from "react";
import {StyleSheet, View, TextInput, Button} from "react-native";

export default function GoalInput({onAddGoal}) {
    const [enteredGoalText, setEnteredGoalText] = useState("");

    function goalInputHandler(enteredText) {
        // console.log(enterdText);
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        if (enteredGoalText) {
            onAddGoal(enteredGoalText);
            setEnteredGoalText("");
        }
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                placeholder="Your goals"
                onChangeText={goalInputHandler}
                value={enteredGoalText}
            />
            <Button title="Add Goal" onPress={addGoalHandler} />
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#ccc",
        width: "75%",
        marginRight: 8,
        padding: 8,
    },
});
