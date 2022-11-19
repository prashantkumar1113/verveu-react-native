// import {StatusBar} from "expo-status-bar";
import {StyleSheet, Text, View, Button, TextInput} from "react-native";

export default function App() {
    return (
        <View style={styles.appContainer}>
            {/* Adding a todo */}
            <View>
                <TextInput placeholder="Your goals" />
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
});
