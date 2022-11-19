// import {StatusBar} from "expo-status-bar";
import {StyleSheet, Text, View, Button, TextInput} from "react-native";

export default function App() {
    return (
        <View style={styles.appContainer}>
            {/* Adding a todo */}
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} placeholder="Your goals" />
                <Button title="Add Goal" />
            </View>

            {/* List of todos */}
            <View>
                <Text>List of Goals....</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        // flex: 1,
        // backgroundColor: "azure",
        // alignItems: "center",
        // justifyContent: "center",
        padding: 50,
    },
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#ccc",
        width: "75%",
        marginRight: 8,
        padding: 8,
    },
});
