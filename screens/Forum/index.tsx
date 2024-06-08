import { View, Pressable, Text, Image, ScrollView } from "react-native";
import HeaderInfo from "../../components/HeaderInfo";

const Fourm = () => {
  return (
    <ScrollView>
      <View>
        <HeaderInfo title="Diễn đàn hỏi đáp" />
        <View style={{ padding: 20 }}>
          <Pressable
            style={{
              padding: 15,
              backgroundColor: "green",
              width: 150,
              borderRadius: 20,
            }}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontWeight: "600",
                fontSize: 15,
              }}
            >
              Thêm câu hỏi
            </Text>
          </Pressable>
          {/* list comment */}
          <View style={{ marginTop: 20 }}>
            <View
              style={{
                borderTopWidth: 1,
                borderColor: "#ddd",
                paddingVertical: 10,
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 10,
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../../assets/avatar.jpg")}
                  style={{ width: 50, height: 50, borderRadius: 999 }}
                  resizeMode="contain"
                />
                <View>
                  <Text
                    style={{ fontWeight: "600", color: "green", fontSize: 17 }}
                  >
                    Bùi Văn Châu
                  </Text>
                  <Text
                    style={{ fontWeight: "400", color: "green", fontSize: 15 }}
                  >
                    Ngày đăng: 22/10/2003
                  </Text>
                </View>
              </View>
              <Text style={{ marginTop: 5, color: "green" }}>
                Dạ thầy cô cho em hỏi là muốn xin thời khóa biểu xem ở đâu ạ!
              </Text>
            </View>
            <View
              style={{
                borderTopWidth: 1,
                borderColor: "#ddd",
                paddingVertical: 10,
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 10,
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../../assets/avatar.jpg")}
                  style={{ width: 50, height: 50, borderRadius: 999 }}
                  resizeMode="contain"
                />
                <View>
                  <Text
                    style={{ fontWeight: "600", color: "green", fontSize: 17 }}
                  >
                    Bùi Văn Châu
                  </Text>
                  <Text
                    style={{ fontWeight: "400", color: "green", fontSize: 15 }}
                  >
                    Ngày đăng: 22/10/2003
                  </Text>
                </View>
              </View>
              <Text style={{ marginTop: 5, color: "green" }}>
                Dạ thầy cô cho em hỏi là muốn xin thời khóa biểu xem ở đâu ạ!
              </Text>
            </View>
            <View
              style={{
                borderTopWidth: 1,
                borderColor: "#ddd",
                paddingVertical: 10,
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 10,
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../../assets/avatar.jpg")}
                  style={{ width: 50, height: 50, borderRadius: 999 }}
                  resizeMode="contain"
                />
                <View>
                  <Text
                    style={{ fontWeight: "600", color: "green", fontSize: 17 }}
                  >
                    Bùi Văn Châu
                  </Text>
                  <Text
                    style={{ fontWeight: "400", color: "green", fontSize: 15 }}
                  >
                    Ngày đăng: 22/10/2003
                  </Text>
                </View>
              </View>
              <Text style={{ marginTop: 5, color: "green" }}>
                Dạ thầy cô cho em hỏi là muốn xin thời khóa biểu xem ở đâu ạ!
              </Text>
            </View>
            <View
              style={{
                borderTopWidth: 1,
                borderColor: "#ddd",
                paddingVertical: 10,
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 10,
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../../assets/avatar.jpg")}
                  style={{ width: 50, height: 50, borderRadius: 999 }}
                  resizeMode="contain"
                />
                <View>
                  <Text
                    style={{ fontWeight: "600", color: "green", fontSize: 17 }}
                  >
                    Bùi Văn Châu
                  </Text>
                  <Text
                    style={{ fontWeight: "400", color: "green", fontSize: 15 }}
                  >
                    Ngày đăng: 22/10/2003
                  </Text>
                </View>
              </View>
              <Text style={{ marginTop: 5, color: "green" }}>
                Dạ thầy cô cho em hỏi là muốn xin thời khóa biểu xem ở đâu ạ!
              </Text>
            </View>
            <View
              style={{
                borderTopWidth: 1,
                borderColor: "#ddd",
                paddingVertical: 10,
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 10,
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../../assets/avatar.jpg")}
                  style={{ width: 50, height: 50, borderRadius: 999 }}
                  resizeMode="contain"
                />
                <View>
                  <Text
                    style={{ fontWeight: "600", color: "green", fontSize: 17 }}
                  >
                    Bùi Văn Châu
                  </Text>
                  <Text
                    style={{ fontWeight: "400", color: "green", fontSize: 15 }}
                  >
                    Ngày đăng: 22/10/2003
                  </Text>
                </View>
              </View>
              <Text style={{ marginTop: 5, color: "green" }}>
                Dạ thầy cô cho em hỏi là muốn xin thời khóa biểu xem ở đâu ạ!
              </Text>
            </View>
            <View
              style={{
                borderTopWidth: 1,
                borderColor: "#ddd",
                paddingVertical: 10,
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 10,
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../../assets/avatar.jpg")}
                  style={{ width: 50, height: 50, borderRadius: 999 }}
                  resizeMode="contain"
                />
                <View>
                  <Text
                    style={{ fontWeight: "600", color: "green", fontSize: 17 }}
                  >
                    Bùi Văn Châu
                  </Text>
                  <Text
                    style={{ fontWeight: "400", color: "green", fontSize: 15 }}
                  >
                    Ngày đăng: 22/10/2003
                  </Text>
                </View>
              </View>
              <Text style={{ marginTop: 5, color: "green" }}>
                Dạ thầy cô cho em hỏi là muốn xin thời khóa biểu xem ở đâu ạ!
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Fourm;
