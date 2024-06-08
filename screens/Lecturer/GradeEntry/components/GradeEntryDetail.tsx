import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  TextInput,
} from "react-native";
import HeaderInfo from "../../../../components/HeaderInfo";
import { useState } from "react";

const GradeEntryDetail = () => {
  const [testScore, setTestScore] = useState("");
  const [attendanceScore, setAttendanceScore] = useState("");
  const [midTermScore, setMidTermScore] = useState("");
  const [finalExamScore, setFinalExamScore] = useState("");

  const handleSaveDraft = () => {
    console.log("Saving draft with scores:", {
      testScore,
      attendanceScore,
      midTermScore,
      finalExamScore,
    });
  };

  const handleFinalizeGrades = () => {
    console.log("Finalizing grades with scores:", {
      testScore,
      attendanceScore,
      midTermScore,
      finalExamScore,
    });
  };

  return (
    <View>
      <HeaderInfo title="Nhập điểm sinh viên" />
      <View style={{ padding: 20 }}>
        <View style={{ display: "flex", flexDirection: "row", gap: 20 }}>
          <TouchableHighlight
            style={styles.button}
            underlayColor="#DDDDDD"
            onPress={handleSaveDraft}
          >
            <Text style={{ fontWeight: "600" }}>Lưu nháp </Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            underlayColor="#DDDDDD"
            onPress={handleFinalizeGrades}
          >
            <Text style={{ fontWeight: "600" }}>Khóa điểm</Text>
          </TouchableHighlight>
        </View>

        <View
          style={{
            display: "flex",
            marginTop: 20,
            flexDirection: "row",
            gap: 20,
          }}
        >
          <Text style={{ fontWeight: "600" }}>IDSV:</Text>
          <Text style={{ fontWeight: "400" }}>1</Text>
        </View>
        <View
          style={{
            display: "flex",
            marginTop: 10,
            flexDirection: "row",
            gap: 20,
          }}
        >
          <Text style={{ fontWeight: "600" }}>Họ và tên:</Text>
          <Text style={{ fontWeight: "400" }}>Bùi Văn Châu</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 20,
            marginTop: 10,
          }}
        >
          <Text style={{ fontWeight: "600" }}>Lớp học:</Text>
          <Text style={{ fontWeight: "400" }}>ST21A2A</Text>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 20,
            marginTop: 10,
          }}
        >
          <Text style={{ fontWeight: "600" }}>Môn học:</Text>
          <Text style={{ fontWeight: "400" }}>Tiếng Anh</Text>
        </View>

        <View style={{ marginTop: 20 }}>
          <View style={styles.gradeRow}>
            <Text style={styles.gradeLabel}>Kiểm tra (25%):</Text>
            <TextInput
              style={styles.gradeInput}
              value={testScore}
              onChangeText={setTestScore}
              keyboardType="numeric"
              placeholder="Nhập điểm"
            />
          </View>
          <View style={styles.gradeRow}>
            <Text style={styles.gradeLabel}>Chuyên cần (10%):</Text>
            <TextInput
              style={styles.gradeInput}
              value={attendanceScore}
              onChangeText={setAttendanceScore}
              keyboardType="numeric"
              placeholder="Nhập điểm"
            />
          </View>
          <View style={styles.gradeRow}>
            <Text style={styles.gradeLabel}>Giữa HP (15%):</Text>
            <TextInput
              style={styles.gradeInput}
              value={midTermScore}
              onChangeText={setMidTermScore}
              keyboardType="numeric"
              placeholder="Nhập điểm"
            />
          </View>
          <View style={styles.gradeRow}>
            <Text style={styles.gradeLabel}>Thi (50%):</Text>
            <TextInput
              style={styles.gradeInput}
              value={finalExamScore}
              onChangeText={setFinalExamScore}
              keyboardType="numeric"
              placeholder="Nhập điểm"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 15,
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    width: 100,
  },
  gradeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  gradeLabel: {
    fontWeight: "600",
    fontSize: 16,
  },
  gradeInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    width: 100,
    textAlign: "center",
  },
});

export default GradeEntryDetail;
