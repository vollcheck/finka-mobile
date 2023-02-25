import {
  Badge,
  Button,
  Chip,
  ListItem,
  Stack,
  TextInput,
} from "@react-native-material/core";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const [expenses, setExpenses] = useState(["food", "clothes"]);
  const [inputValue, setInputValue] = useState("");

  const handleAddExpense = () => {
    if (inputValue.trim() !== "") {
      setExpenses([...expenses, inputValue.trim()]);
      setInputValue("");
    }
  };

  return (
    <View style={styles.container}>

      <View>
        {expenses.map((a, index) => (
          <ListItem title={a} key={index} />
        ))}
      </View>

      <TextInput
        label="Enter expense name"
        variant="standard"
        value={inputValue}
        onChangeText={setInputValue}
      />
      <Button title="Add expense" onPress={handleAddExpense} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
