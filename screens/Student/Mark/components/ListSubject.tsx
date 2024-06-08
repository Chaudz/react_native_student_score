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

const ListSubject = () => {
  return (
    <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
      {listSubject.map((subject, index) => (
        <Subject key={index} title={subject.title} />
      ))}
    </View>
  );
};

export default ListSubject;
