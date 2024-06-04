import { Text, TouchableHighlight, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Subject = ({ navigation, title }: { navigation: any; title: string }) => {
  const handleClick = () => {
    navigation.navigate("SubjectDetail");
  };

  return (
    <TouchableHighlight onPress={handleClick}>
      <View
        style={{
          backgroundColor: "white",
          borderRadius: 15,
          padding: 10,
          marginBottom: 5,
          display: "flex", // Ensure the Button uses flexbox
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center", // Align content vertically within the button
        }}
      >
        <Text>{title}</Text>
        <AntDesign name="right" size={24} color="black" />
      </View>
    </TouchableHighlight>
  );
};

export default Subject;
