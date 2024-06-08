import { View, Text, StyleSheet, Pressable } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { MaterialIcons } from "@expo/vector-icons";
import Entypo from "@expo/vector-icons/Entypo";
import HeaderInfo from "../HeaderInfo";
import RowInfo from "./components/RowInfo";
import React from "react";

const dataList = [
  {
    id: 1,
    title: "Thông tin cá nhân",
    description: "Xem thông tin cá nhân",
    icon: <MaterialCommunityIcons name="account" size={24} color="white" />,
  },
  {
    id: 2,
    title: "Hỏi - Đáp   ",
    description: "Diễn đàn hỏi đáp sinh viên",
    icon: <Entypo name="chat" size={24} color="white" />,
  },
];

const Account = ({ navigation }: { navigation: any }) => {
  const [showModalInfo, setShowMOdalInfo] = React.useState(false);

  const handleCloseModal = () => {
    setShowMOdalInfo(false);
  };

  const handleShowModal = (id: number) => {
    if (id === 1) setShowMOdalInfo(true);
    if (id === 2) navigation.navigate("Forum");
  };

  return (
    <View style={styles.container}>
      <HeaderInfo title="Tài khoản" />
      <View style={{ paddingHorizontal: 10 }}>
        <View
          style={{ marginTop: 20, backgroundColor: "white", borderRadius: 10 }}
        >
          {dataList.map((data, index) => (
            <RowInfo key={index} {...data} handleShowInfo={handleShowModal} />
          ))}
        </View>

        <View
          style={{
            marginTop: 20,
            width: "100%",
            padding: 10,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: 10,
          }}
        >
          <View
            style={{
              backgroundColor: "green",
              borderRadius: 8,
              height: 40,
              width: 40,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MaterialIcons name="logout" size={24} color="white" />
          </View>
          <View style={{ flex: 1, marginStart: 20 }}>
            <Text style={{ fontWeight: "600" }}>Đăng xuất</Text>
            <Text>Đăng xuất tài khoản</Text>
          </View>
          <AntDesign name="right" size={20} color="#ddd" />
        </View>
      </View>
      {/* INFO Student */}
      {showModalInfo && (
        <View
          style={{
            width: 300,
            backgroundColor: "white",
            position: "absolute",
            left: "50%",
            transform: [{ translateX: -150 }],
            margin: "auto",
            right: 0,
            top: "20%",
            borderRadius: 10,
            zIndex: 20,
          }}
        >
          <Text
            style={{
              color: "white",
              backgroundColor: "green",
              paddingVertical: 10,
              textAlign: "center",
              fontWeight: "600",
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
          >
            THÔNG TIN CÁ NHÂN
          </Text>
          <View style={{ padding: 10 }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 10,
                marginTop: 20,
              }}
            >
              <Text style={{ fontWeight: "600", fontSize: 17 }}>
                Giới tính:
              </Text>
              <Text style={{ fontSize: 17 }}>Nam</Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 10,
                marginTop: 20,
              }}
            >
              <Text style={{ fontWeight: "600", fontSize: 17 }}>
                Ngày sinh:
              </Text>
              <Text style={{ fontSize: 17 }}>22/10/2003</Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 10,
                marginTop: 20,
              }}
            >
              <Text style={{ fontWeight: "600", fontSize: 17 }}>Nơi sinh:</Text>
              <Text style={{ fontSize: 17 }}>Quảng Ngãi</Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 10,
                marginTop: 20,
              }}
            >
              <Text style={{ fontWeight: "600", fontSize: 17 }}>Dân tộc:</Text>
              <Text style={{ fontSize: 17 }}>Kinh</Text>
            </View>
          </View>
          <Pressable
            style={{
              padding: 10,
              backgroundColor: "green",
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
            }}
            onPress={handleCloseModal}
          >
            <Text
              style={{ color: "white", textAlign: "center", fontWeight: "600" }}
            >
              Đóng
            </Text>
          </Pressable>
        </View>
      )}
      {showModalInfo && (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 10,
          }}
        ></View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ededed",
  },
});

export default Account;
