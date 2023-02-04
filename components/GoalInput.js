import { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

export default function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInput(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function handleAddGoals() {
    props.addGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.input}>
        <Image
          style={styles.image}
          source={require("../assets/images/circleee.png")}
        />
        <TextInput
          placeholder="your course goal....."
          style={styles.textinput}
          value={enteredGoalText}
          onChangeText={goalInput}
        />
        <View style={styles.button}>
          <View style={styles.right}>
            <Button
              title="Add Goals"
              color="darkgreen"
              onPress={handleAddGoals}
            />
          </View>
          <View style={styles.right}>
            <Button title="cancel" color="darkred" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    padding: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
  },
  textinput: {
    borderWidth: 1,
    borderColor: "lightgreen",
    backgroundColor: "lightgreen",
    borderRadius: 10,
    width: "100%",
    padding: 10,
    color: "black",
    fontWeight: "bold",
  },
  button: {
    marginTop: 10,
    flexDirection: "row",
  },
  right: {
    width: 100,
    marginHorizontal: 10,
  },
  image: {
    width: 200,
    height: 200,
    margin: 20,
  },
});
