import { View, Text, Image } from "react-native";

const HomeScreen = () => {
  return (
    <View>
      <View style={{ position: "relative" }}>
        <Image
          source={require("../../../assets/bg-hoaanhdao.jpg")}
          style={{ width: "100%", height: 250 }}
        />
        <View
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: 200,
            transform: [{ translateX: -100 }, { translateY: -30 }],
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("../../../assets/avatar.jpg")}
              style={{
                width: 100,
                height: 100,
                borderRadius: 9999,
              }}
            />
            <Text
              style={{
                marginTop: 10,
                fontWeight: "600",
                color: "green",
                fontSize: 25,
                textAlign: "center",
              }}
            >
              Bùi Văn Châu
            </Text>
          </View>
        </View>
      </View>
      <View style={{ padding: 20 }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 10,
            marginTop: 20,
          }}
        >
          <Text style={{ fontWeight: "600", fontSize: 17 }}>Giới tính:</Text>
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
          <Text style={{ fontWeight: "600", fontSize: 17 }}>Ngày sinh:</Text>
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
    </View>
  );
};

export default HomeScreen;
