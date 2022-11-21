import {useState} from "react";
import {StyleSheet, View, TextInput, Button, Modal, Image} from "react-native";

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
                <Image
                    source={require("../assets/images/verveware-horizontal-2line-white.png")}
                    style={styles.image}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Your goals"
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            title="Cancel"
                            color="#FF5733"
                            onPress={() => {
                                setModalVisibility(false);
                            }}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title="Add Goal"
                            color="#1D2F6F"
                            onPress={addGoalHandler}
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
        padding: 16,
        backgroundColor: "#386eb6",
    },
    textInput: {
        borderWidth: 1,
        borderColor: "dodgerblue",
        backgroundColor: "white",
        borderRadius: 6,
        width: "100%",
        padding: 16,
    },
    buttonContainer: {
        flexDirection: "row",
        marginTop: 16,
    },
    button: {
        width: "30%",
        marginHorizontal: 8,
    },
    image: {
        width: 157,
        height: 67,
        margin: 20,
    },
});
