import { View } from "react-native";
import Subject from "./Subject";

const listSubject = [
  {
    title: "Kỹ thuật lập trình",
  },
  {
    title: "Cấu trúc dữ liệu và giải thuật",
  },
  {
    title: "Lập trình JavaScript",
  },
];

const ListSubject = ({ navigation }: { navigation: any }) => {
  return (
    <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
      {listSubject.map((subject, index) => (
        <Subject key={index} title={subject.title} navigation={navigation} />
      ))}
    </View>
  );
};

export default ListSubject;
