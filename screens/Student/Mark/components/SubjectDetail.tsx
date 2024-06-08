import { View, Text, Button } from "react-native";
import HeaderInfo from "../../../../components/HeaderInfo";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";

const SubjectDetail = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  return (
    <View>
      <HeaderInfo title="Điểm môn học" />
      <View style={{ padding: 20 }}>
        <View
          style={{ backgroundColor: "white", borderRadius: 15, padding: 10 }}
        >
          <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
            <Text style={{ marginBottom: 10, fontWeight: "600" }}>
              Tên môn học:
            </Text>
            <Text>Kỹ thuật lập trình</Text>
          </View>
          <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
            <Text style={{ marginBottom: 10, fontWeight: "600" }}>
              Số tín chỉ:
            </Text>
            <Text>3</Text>
          </View>
          <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
            <Text style={{ marginBottom: 10, fontWeight: "600" }}>
              Kiểm tra (25%):
            </Text>
            <Text>10</Text>
          </View>
          <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
            <Text style={{ marginBottom: 10, fontWeight: "600" }}>
              Chuyên cần (10%):
            </Text>
            <Text>10</Text>
          </View>
          <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
            <Text style={{ marginBottom: 10, fontWeight: "600" }}>
              Giữa HP (15%):
            </Text>
            <Text>10</Text>
          </View>
          <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
            <Text style={{ marginBottom: 10, fontWeight: "600" }}>
              Thi (50%):
            </Text>
            <Text>10</Text>
          </View>
          <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
            <Text style={{ marginBottom: 10, fontWeight: "600" }}>
              Tổng kết T10:
            </Text>
            <Text>10</Text>
          </View>
          <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
            <Text style={{ marginBottom: 10, fontWeight: "600" }}>
              Xếp loại
            </Text>
            <Text>Đạt</Text>
          </View>
        </View>
        <View style={{ marginTop: 20 }}></View>
        <Button
          title="Quay về"
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
    </View>
  );
};

export default SubjectDetail;
