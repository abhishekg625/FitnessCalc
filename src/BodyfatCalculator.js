import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from "react-native";

import { DEFAULT_VALUE } from "./const";

import DropDownPicker from "react-native-dropdown-picker";

const BodyfatCalculator = () => {
  const [neckSize, setNeckSize] = useState(DEFAULT_VALUE.neckSize);
  const [heightValue, setHeightValue] = useState(DEFAULT_VALUE.height);
  const [waist, setWaist] = useState(DEFAULT_VALUE.waist);
  const [hipSize, setHipSize] = useState(DEFAULT_VALUE.hipSize);
  const [result, setResult] = useState(0);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ]);
  const { height, width } = Dimensions.get("window");

  const Calculate = () => {
    if (value === "male") {
      const result = (
        (86.01 * Math.log10(waist - neckSize) * Math.log10(heightValue) +
          36.67) /
        100
      ).toFixed(2);

      console.log(result);
      setResult(result);
    } else if (value === "female") {
      const result = (
        (163.205 * Math.log10(waist + hipSize - neckSize) -
          97.684 * Math.log10(heightValue) -
          78.387) /
        100
      ).toFixed(2);

      console.log(result);
      setResult(result);
    } else {
      setResult(0);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Text style={styles.text}>Gender </Text>

        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />

        <Text style={styles.text}>Waist (cm) </Text>
        <TextInput
          style={styles.textInput}
          label="waist"
          value={waist}
          keyboardType="numeric"
          onChangeText={(waist) => setWaist(waist)}
        />
        <Text style={styles.text}> Neck (cm) </Text>
        <TextInput
          style={styles.textInput}
          label="neck"
          value={neckSize}
          keyboardType="numeric"
          onChangeText={(neckSize) => setNeckSize(neckSize)}
        />
        <Text style={styles.text}>Height (cm) </Text>
        <TextInput
          style={styles.textInput}
          label="weight"
          value={height}
          keyboardType="numeric"
          onChangeText={(height) => setHeightValue(height)}
        />
        <Text style={styles.text}>Hip Size (cm) </Text>
        <TextInput
          style={styles.textInput}
          label="hipSize"
          value={hipSize}
          keyboardType="numeric"
          onChangeText={(hipSize) => setHipSize(hipSize)}
        />

        <TouchableOpacity
          style={styles.calculateButton}
          onPress={() => Calculate()}
        >
          <Text> Calculate</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={styles.buttonContainer2}>
          <Text style={styles.result}>{result}</Text>
        </View>
      </View>
    </View>
  );
};

export default BodyfatCalculator;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#edf0e9",
  },
  textInput: {
    borderColor: "gray",
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 7,
  },
  text: {
    margin: 7,
    fontWeight: "bold",
  },
  fatButton: {
    margin: 5,
  },
  calculateButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff5c5c",
    borderRadius: 10,
    padding: 10,
    margin: 30,
  },

  result: {
    alignSelf: "center",
    color: "gray",
    fontSize: 65,
    padding: 15,
  },
  buttonContainer: {
    minWidth: 300,
    minHeight: 500,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 12,
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 2,
  },
  buttonContainer2: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    height: 120,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 5,
    margin: 5,
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 2,
  },
});
