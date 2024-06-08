import {
  View,
  Text,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  TextInput,
  TouchableHighlight,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from "@react-navigation/native";
import { useState } from "react";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [gender, setGender] = useState("");
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#00ad00",
        }}
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled={true}
      >
        <View style={{ width: "100%", padding: 20 }}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={name}
            onChangeText={setName}
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="BirthDay"
            value={birthDay}
            onChangeText={setBirthDay}
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Gender"
            value={email}
            onChangeText={setGender}
            autoCapitalize="none"
          />
          <TouchableHighlight
            style={{
              marginTop: 20,
              backgroundColor: "green",
              borderRadius: 15,
              padding: 10,
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "400",
                fontSize: 18,
                textAlign: "center",
              }}
            >
              Register
            </Text>
          </TouchableHighlight>
        </View>
      </KeyboardAwareScrollView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 50,
    paddingHorizontal: 10,
    marginVertical: 10,
    backgroundColor: "#fff",
    textAlign: "center",
  },
});

export default RegisterScreen;
