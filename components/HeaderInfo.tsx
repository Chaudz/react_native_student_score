import { Text, View, Image, StyleSheet } from "react-native";

const HeaderInfo = ({ title }: { title: string }) => {
  return (
    <View>
      <View style={styles.wrapperHeader}>
        <Image
          source={require("../assets/hoaanhdao.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.textTitle}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperHeader: {
    width: "100%",
    padding: 10,
    paddingTop: 30,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  logo: {
    width: 50,
    height: 50,
  },
  textTitle: {
    color: "green",
    fontSize: 20,
  },
});

export default HeaderInfo;
