import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalList from "./components/Goalist";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalVisible, setModalvisible] = useState(false);
  function addGoal(enteredGoalText) {
    if (enteredGoalText !== "") {
      setCourseGoals((currentCourseGoals) => [
        ...currentCourseGoals,
        { text: enteredGoalText, id: Math.random().toString() },
      ]);
      setModalvisible(!modalVisible);
    }
  }

  function onDelete(id) {
    setCourseGoals((currentCourseGoals) =>
      currentCourseGoals.filter((goals) => goals.id !== id)
    );
  }

  return (
    <>
      <StatusBar style="auto"/>
      <View style={styles.container}>
        <Button
          title="add task"
          color="green"
          onPress={() => setModalvisible(!modalVisible)}
        />
        <GoalInput
          visible={modalVisible}
          addGoal={addGoal}
          onCancel={() => setModalvisible(!modalVisible)}
        />
        <View style={styles.view}>
          <FlatList
            data={courseGoals}
            keyExtractor={(item, index) => item.id}
            renderItem={({ item }) => (
              <GoalList item={item.text} id={item.id} onDelete={onDelete} />
            )}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    // backgroundColor:'#1e085a'
  },
  view: {
    flex: 6,
  },
});
