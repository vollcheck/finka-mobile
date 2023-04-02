import { Button, TextInput } from "@react-native-material/core";
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";

import { StatusBar } from "expo-status-bar";
import patterns from "./patterns";

function processInput(input) {
  for (let i = 0; i < patterns.length; i++) {
    const match = input.match(patterns[i].pattern);
    if (match) {
      const response =
        patterns[i].response[
          Math.floor(Math.random() * patterns[i].response.length)
        ];
      return response.replace(/\{\d+\}/g, match.at(-1));
    }
  }

  return "I'm not sure I understand. Can you please provide more information?";
}

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const handleSend = () => {
    const response = processInput(inputValue);
    const message = {
      userMessage: inputValue,
      botMessage: response,
    };
    setChatHistory([...chatHistory, message]);
    setInputValue("");
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.chatContainer}>
          {chatHistory.map((message, index) => (
            <View key={index}>
              <View style={styles.userMessageContainer}>
                <View style={[styles.messageBubble, styles.userMessageBubble]}>
                  <Text style={[styles.messageText, styles.userMessageText]}>
                    {message.userMessage}
                  </Text>
                </View>
              </View>

              <View style={styles.messageContainer}>
                <View style={[styles.messageBubble, styles.botMessageBubble]}>
                  <Text style={[styles.messageText, styles.botMessageText]}>
                    {message.botMessage}
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
        <View>
          <TextInput
            style={styles.input}
            value={inputValue}
            onChangeText={setInputValue}
            onSubmitEditing={handleSend}
            placeholder="Enter your problems here"
            autoFocus
            onBlur={({ target }) => target.focus()}
          />
          <Button title="Send" onPress={handleSend} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  chatContainer: {
    flex: 1,
    padding: 10,
  },
  messageContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 10,
  },
  userMessageContainer: {
    flexDirection: "row-reverse",
    alignItems: "flex-end",
  },
  messageBubble: {
    padding: 10,
    borderRadius: 10,
    maxWidth: "80%",
    marginBottom: 5,
  },
  userMessageBubble: {
    backgroundColor: "#4caf50",
  },
  botMessageBubble: {
    backgroundColor: "#e0e0e0",
  },
  messageText: {
    fontSize: 16,
    color: "#000",
  },
  userMessageText: {
    color: "#fff",
  },
  botMessageText: {
    color: "#000",
  },
});
