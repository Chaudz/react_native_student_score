import { Button, View } from "react-native";

const ProfileScreen = ({ navigation }) => {
  return (
    <View>
      <View style={{ height: 20 }}></View>
      <Button
        onPress={() => {
          console.log("You tapped the button!");
        }}
        title="Press Me"
      />
    </View>
  );
};
export default ProfileScreen;
