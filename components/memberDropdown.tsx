import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function MemberDropdown() {
  return (
    <View style={styles.dropdownContainer}>
      <TouchableOpacity style={styles.dropdown}>
        <Text style={styles.dropdownText}>Member</Text>
        <AntDesign name="down" size={16} color="black" style={styles.arrow} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  dropdownContainer: {
    width: "100%",
    alignItems: "center",
    marginVertical: 10,
  },
  dropdown: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 6,
    paddingVertical: 10,
    width: "90%", 

  },
  dropdownText: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 5, 
  },
  arrow: {
    marginLeft: 0, 
  },
});














