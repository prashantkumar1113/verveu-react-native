import {useState} from "react";
import {StyleSheet, View, TextInput, Button, Modal} from "react-native";

export default function GoalInput({
    onAddGoal,
    modalVisible,
    setModalVisibility,
}) {
    const [enteredGoalText, setEnteredGoalText] = useState("");

    function goalInputHandler(enteredText) {
        // console.log(enterdText);
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        if (enteredGoalText) {
            onAddGoal(enteredGoalText);
            setEnteredGoalText("");
            setModalVisibility(false);
        }
    }

    return (
        <Modal visible={modalVisible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Your goals"
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Add Goal" onPress={addGoalHandler} />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title="Cancel"
                            onPress={() => {
                                setModalVisibility(false);
                            }}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 24,
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        backgroundColor: "lightgray",
    },
    textInput: {
        borderWidth: 1,
        borderColor: "dodgerblue",
        backgroundColor: "white",
        width: "100%",
        padding: 8,
    },
    buttonContainer: {
        flexDirection: "row",
        marginTop: 16,
    },
    button: {
        width: "30%",
        marginHorizontal: 8,
    },
});
