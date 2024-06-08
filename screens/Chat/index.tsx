import React from "react";
import { View, Button, StyleSheet, Alert } from "react-native";
import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";

const ExportCSV = () => {
  const generateCSV = async () => {
    const csvData = [
      ["Name", "Age", "Gender"],
      ["John Doe", "28", "Male"],
      ["Jane Smith", "32", "Female"],
      ["Sam Johnson", "45", "Male"],
    ];

    const csvString = csvData.map((row) => row.join(",")).join("\n");
    const fileUri = FileSystem.documentDirectory + "data.csv";

    try {
      await FileSystem.writeAsStringAsync(fileUri, csvString);
      Alert.alert("Success", "CSV file has been saved to " + fileUri);

      if (await Sharing.isAvailableAsync()) {
        await Sharing.shareAsync(fileUri);
      } else {
        Alert.alert("Error", "Sharing is not available on this device");
      }
    } catch (error) {
      console.error("Error saving CSV file", error);
      Alert.alert("Error", "Failed to save CSV file");
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Export and Share CSV" onPress={generateCSV} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ExportCSV;
