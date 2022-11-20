import {StyleSheet, View, Text} from "react-native";

export default function GoalItem({text}) {
    return (
        <View style={styles.goalItem}>
            <Text style={styles.goalText}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: "dodgerblue",
    },
    goalText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 24,
    },
});
