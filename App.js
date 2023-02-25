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
  const [editIndex, setEditIndex] = useState(null);

  const handleAddExpense = () => {
    if (inputValue.trim() !== "") {
      if (editIndex !== null) {
        expenses[editIndex] = inputValue.trim();
        setExpenses([...expenses]);
        setInputValue("");
        setEditIndex();
      } else {
        setExpenses([...expenses, inputValue.trim()]);
        setInputValue("");
      }
    }
  };

  const handleEditExpense = (index) => {
    setInputValue(expenses[index]);
    setEditIndex(index);
  }

  const handleDeleteExpense = (index) => {
    expenses.splice(index, 1);
    setExpenses([...expenses]);
  }

  return (
    <View style={styles.container}>
      {expenses.map((expense, index) => (
        <View key={index}>
          <ListItem title={expense} />
          <Button title="Edit" onPress={() => handleEditExpense(index)} />
          <Button title="Delete" onPress={() => handleDeleteExpense(index)} />
        </View>
      ))}

      <TextInput
        label="Enter expense name"
        variant="standard"
        value={inputValue}
        onChangeText={setInputValue}
      />
      <Button
        title={editIndex !== null ? "Edit expense" : "Add expense" }
        onPress={handleAddExpense}
      />
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
