import { TouchableHighlight, View, Text } from "react-native";
import HeaderInfo from "../../../components/HeaderInfo";
import ClassDropDown from "../../../components/ClassDropDown";

const EnterGradeCSV = () => {
  const handleImportGrade = () => {
    console.log("import");
  };

  const handleSave = () => {
    console.log("save");
  };

  return (
    <View>
      <HeaderInfo title="Nhập điểm bằng CSV" />
      <View style={{ padding: 20 }}>
        <ClassDropDown />
        <TouchableHighlight
          onPress={handleImportGrade}
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          style={{
            marginBottom: 5,
            width: 100,
          }}
        >
          <View
            style={{
              backgroundColor: "#1b00be",
              borderRadius: 5,
              padding: 10,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white" }}>Import CSV</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={handleSave}
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          style={{
            marginTop: 20,
            marginBottom: 5,
            width: 100,
          }}
        >
          <View
            style={{
              backgroundColor: "#1b00be",
              borderRadius: 5,
              padding: 10,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white" }}>Save </Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default EnterGradeCSV;
