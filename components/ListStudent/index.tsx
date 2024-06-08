import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableHighlight,
} from "react-native";

import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";

interface Student {
  id: string;
  name: string;
}

const ListStudent: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([
    { id: "1", name: "Nguyen Van A" },
    { id: "2", name: "Tran Thi B" },
    { id: "3", name: "Le Van C" },
    { id: "4", name: "Nguyen Van D" },
    { id: "5", name: "Tran Thi E" },
    { id: "6", name: "Le Van F" },
    { id: "7", name: "Nguyen Van G" },
    { id: "8", name: "Tran Thi H" },
    { id: "9", name: "Le Van I" },
  ]);
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const handleClick = () => {
    navigation.navigate("GradeEntryDetail");
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={students}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableHighlight
            style={styles.studentContainer}
            underlayColor="#DDDDDD"
            onPress={handleClick}
          >
            <Text style={styles.studentName}>{item.name}</Text>
          </TouchableHighlight>
        )}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  list: {
    marginTop: 10,
  },
  studentContainer: {
    padding: 15,
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  studentName: {
    fontSize: 16,
    color: "black",
  },
});

export default ListStudent;
