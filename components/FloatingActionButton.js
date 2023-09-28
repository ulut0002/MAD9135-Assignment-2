/**
 *
 * Serdar Ulutas
 * 2023-Sept-27
 * https://callstack.github.io/react-native-paper/docs/components/FAB/

 */

import React from "react";
import { StyleSheet } from "react-native";
import { FAB } from "react-native-paper";

const FloatingActionButton = ({ fetchOneUser }) => {
  return (
    <FAB
      icon="plus"
      style={styles.fab}
      onPress={() => {
        if (typeof fetchOneUser == "function") {
          fetchOneUser();
        }
      }}
    />
  );
};

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    // margin: 16,
    right: 16,
    bottom: 32,
    backgroundColor: "#76b3ab",
  },
});

export default FloatingActionButton;
