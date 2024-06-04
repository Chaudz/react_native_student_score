import { View, Text, Button } from "react-native";
import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from "@react-navigation/native";

const RegisterScreen = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Register</Text>
      <Button
        title="quay lai"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};

export default RegisterScreen;
