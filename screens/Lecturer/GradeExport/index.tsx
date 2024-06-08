import { View, Text, TouchableHighlight } from "react-native";
import HeaderInfo from "../../../components/HeaderInfo";
import ClassDropDown from "../../../components/ClassDropDown";

const GradeExport = () => {
  const handleExportGrade = () => {
    console.log("Xuat diem");
  };

  return (
    <View>
      <HeaderInfo title="Xuất điểm sinh viên" />
      <View style={{ padding: 20 }}>
        <ClassDropDown />
        <TouchableHighlight
          onPress={handleExportGrade}
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          style={{
            marginBottom: 5,
            width: 100,
          }}
        >
          <View
            style={{
              backgroundColor: "green",
              borderRadius: 5,
              padding: 10,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white" }}>Xuat diem</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default GradeExport;
