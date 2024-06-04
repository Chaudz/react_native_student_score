import { Text, View, Image, StyleSheet } from "react-native";
import HeaderInfo from "../../../components/HeaderInfo";
import ListSubject from "./components/ListSubject";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <HeaderInfo title="Danh sách môn học" />
      <ListSubject navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  textTitle: {
    fontWeight: "600",
    fontSize: 12,
  },
  wrapperTextTile: {
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingBottom: 5,
    backgroundColor: "red",
    paddingHorizontal: 10,
  },
});

export default HomeScreen;
