import { Pressable, StyleSheet, Text, View } from "react-native";

export default function GoalList({ item, onDelete, id }) {
  return (
    <View style={styles.item}>
      <Pressable
        android_ripple={{ color: "green" }}
        style={({ pressed }) => pressed && styles.pressed}
        onPress={onDelete.bind(this, id)}
      >
        <Text style={styles.text}>{item}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    margin: 5,
    borderRadius: 5,
  },
  text: {
    color: "green",
    fontWeight: "bold",
    padding: 10,
  },
  pressed: {
    opacity: 0.5,
    backgroundColor: "darkgreen",
  },
});
