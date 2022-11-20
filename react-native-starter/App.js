// import {StatusBar} from "expo-status-bar";
import {useState} from "react";
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    ScrollView,
    FlatList,
} from "react-native";

export default function App() {
    const [enteredGoalText, setEnteredGoalText] = useState("");
    const [goalList, setGoalList] = useState([]);
    function goalInputHandler(enteredText) {
        // console.log(enterdText);
        setEnteredGoalText(enteredText);
    }
    function addGoalHandler(e) {
        console.log("pressed", enteredGoalText);
        setGoalList((currentGoals) => [...currentGoals, enteredGoalText]);
        // setEnteredGoalText("");
    }

    return (
        <View style={styles.appContainer}>
            {/* Adding a todo */}
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Your goals"
                    onChangeText={goalInputHandler}
                />
                <Button title="Add Goal" onPress={addGoalHandler} />
            </View>

            {/* List of todos */}
            <View style={styles.goalsContainer}>
                <FlatList
                    data={goalList}
                    renderItem={(goalData) => {
                        return (
                            <View key={goalData.index} style={styles.goalItem}>
                                <Text style={styles.goalText}>
                                    {goalData.item}
                                </Text>
                            </View>
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
    goalsContainer: {
        flex: 5,
    },
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: "dodgerblue",
    },
    goalText: {
        color: "white",
    },
});
