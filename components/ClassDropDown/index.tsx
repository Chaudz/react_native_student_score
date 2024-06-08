import { useState } from "react";
import { View, StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

const ClassDropDown = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string | null>("value1");
  const [items, setItems] = useState([
    { label: "ST21A2A", value: "value1" },
    { label: "ST21A3A", value: "value2" },
    { label: "ST21A2B", value: "value3" },
  ]);

  return (
    <View>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        style={styles.dropdown}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  dropdown: {
    width: "50%",
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 16,
  },
  selectedText: {
    fontSize: 18,
    marginTop: 16,
  },
});

export default ClassDropDown;
