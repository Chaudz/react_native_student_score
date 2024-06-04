import React, { useState } from "react";
import { Button, View, StyleSheet, Text } from "react-native";
import * as FileSystem from "expo-file-system";
import Papa from "papaparse";

const App = () => {
  const [filePath, setFilePath] = useState("");

  const data = [
    { name: "John", age: 28, city: "New York" },
    { name: "Jane", age: 22, city: "Los Angeles" },
    { name: "Peter", age: 30, city: "Chicago" },
  ];

  const exportCSV = async () => {
    const csv = Papa.unparse(data);
    const fileName = FileSystem.documentDirectory + "data.csv";

    try {
      await FileSystem.writeAsStringAsync(fileName, csv, {
        encoding: FileSystem.EncodingType.UTF8,
      });
      console.log(fileName);

      setFilePath(fileName);
      alert("File CSV đã được lưu thành công!");
    } catch (error) {
      console.error(error);
      alert("Lỗi khi lưu file CSV");
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Xuất CSV" onPress={exportCSV} />
      {filePath ? <Text>File được lưu tại: {filePath}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
});

export default App;
