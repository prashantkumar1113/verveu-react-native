import {StyleSheet, View, Text, Pressable} from "react-native";

export default function GoalItem({id, text, onDeleteItem}) {
    return (
        <View style={styles.goalItem}>
            <Pressable
                onPress={onDeleteItem.bind(this, id)}
                style={({pressed}) => pressed && styles.pressedItem}
                android_ripple={{color: "blue"}}
            >
                <Text style={styles.goalText}>{text}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: "dodgerblue",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    goalText: {
        padding: 8,
        color: "white",
        fontWeight: "bold",
        fontSize: 24,
    },
    pressedItem: {
        opacity: 0.5,
        backgroundColor: "blue",
        borderRadius: 6,
    },
});
