import {StatusBar} from "expo-status-bar";
import {StyleSheet, Text, View} from "react-native";

export default function App() {
    return (
        <View style={styles.container}>
            <Text>VerveU starter App!</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "azure",
        alignItems: "center",
        justifyContent: "center",
    },
});
