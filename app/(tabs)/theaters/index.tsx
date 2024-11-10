import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

const index = () => {
  alert("Page en cours de dévelopement");
  return (
    <SafeAreaView style={styles.screen}>
      <ThemedView>
        <ThemedText>Les cinémas</ThemedText>
      </ThemedView>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "red",
  },
});
