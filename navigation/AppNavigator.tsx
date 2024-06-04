import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MarkScreen from "../screens/Student/Mark";
import LoginScreen from "../screens/Login";
import RegisterScreen from "../screens/Register";
import {
  MaterialCommunityIcons,
  FontAwesome,
  MaterialIcons,
} from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import Account from "../screens/Student/Account";
import HomeScreen from "../screens/Student/Home";
import SubjectDetail from "../screens/Student/Mark/components/SubjectDetail";
import Notify from "../screens/Student/Notify";
import ChatScreen from "../screens/Chat";

interface TabBarIconProps {
  name: string;
  color: string;
  focused: boolean;
  library: "MaterialCommunityIcons" | "Ionicons";
}

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export const screenOptions = ({ route }): BottomTabNavigationOptions => ({
  tabBarShowLabel: false,
  headerShown: false,
  tabBarActiveTintColor: "#ffffff",
  tabBarInactiveTintColor: "#c0c0c0",
  tabBarStyle: {
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    backgroundColor: "#007700",
  },
});

const LecturerNavigator = () => (
  <Tab.Navigator screenOptions={screenOptions}>
    <Tab.Screen name="Home" component={HomeScreen} />
  </Tab.Navigator>
);

const StudentNavigator = () => (
  <Tab.Navigator screenOptions={screenOptions} initialRouteName="Home">
    <Tab.Screen
      name="Account"
      component={Account}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" size={24} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Mark"
      component={MarkScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="bookmark" size={24} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Chat"
      component={ChatScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons
            name="chatbubble-ellipses-outline"
            size={24}
            color={color}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Notify"
      component={Notify}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="notifications-active" size={24} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

const getUserRoleFromToken = async (token: string) => {
  return "lecturer"; // giả sử luôn trả về vai trò giảng viên, thay đổi nếu cần
};

const AppNavigator = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [role, setRole] = useState("student");

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        let role = await getUserRoleFromToken(token);
        setRole(role);
      }
      setIsLoading(false);
    };

    checkToken();
  }, []);

  const renderNavigators = () => (
    <>
      <Stack.Screen name="LecturerNavigator" component={LecturerNavigator} />
      <Stack.Screen name="StudentNavigator" component={StudentNavigator} />
    </>
  );

  const renderScreens = () => {
    if (role) {
      return role === "lecturer" ? (
        <Stack.Screen name="LecturerNavigator" component={LecturerNavigator} />
      ) : (
        <>
          <Stack.Screen name="StudentNavigator" component={StudentNavigator} />
          <Stack.Screen name="SubjectDetail" component={SubjectDetail} />
        </>
      );
    } else {
      return (
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          {renderNavigators()}
        </>
      );
    }
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading ....</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {renderScreens()}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
