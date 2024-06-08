import React from "react";
import { View } from "react-native";
import ClassDropDown from "../../../components/ClassDropDown";
import HeaderInfo from "../../../components/HeaderInfo";
import ListStudent from "../../../components/ListStudent";

interface Student {
  id: string;
  name: string;
}

const GradeEntry: React.FC = () => {
  return (
    <View>
      <HeaderInfo title="Nhập điểm sinh viên" />
      <View style={{ padding: 20 }}>
        <View style={{ height: 10 }}></View>
        <ClassDropDown />
        <ListStudent />
      </View>
    </View>
  );
};

export default GradeEntry;
