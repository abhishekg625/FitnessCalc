import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { DEFAULT_VALUE } from "./const";

const BmiCalculator = () => {
  const [weight, setWeight] = useState(DEFAULT_VALUE.weight);
  const [height, setHeight] = useState(DEFAULT_VALUE.height);
  const [result, setResult] = useState(0);
  const [resultText, setResultText] = useState("");

  const Calculate = () => {
    const result = (weight / ((height * height) / 10000)).toFixed(2);
    setResult(result);

    if (result < 18.5) {
      setResultText("UnderWeight");
    } else if (result < 25) {
      setResultText("Normal body");
    } else if (result > 25) {
      setResultText("Overweight");
    } else {
      setResultText("");
      setResult(0);
    }
  };
  const scr = {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  };
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Text style={styles.text}> Weight (kg) </Text>
        <TextInput
          style={styles.textInput}
          label="weight"
          keyboardType="numeric"
          value={weight}
          onChangeText={(weight) => setWeight(weight)}
        />
        <Text style={styles.text}>Height (cm) </Text>
        <TextInput
          style={styles.textInput}
          label="weight"
          value={height}
          keyboardType="numeric"
          onChangeText={(height) => setHeight(height)}
        />

        <TouchableOpacity style={styles.calculateButton} onPress={Calculate}>
          <Text> Calculate</Text>
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: "center" }}>
        <View style={styles.buttonContainer2}>
          <Text style={styles.result}>{result}</Text>
          <Text style={[styles.result, { fontSize: 35 }]}>{resultText}</Text>
        </View>
      </View>
    </View>
  );
};

export default BmiCalculator;

const styles = StyleSheet.create({
  container: {
    padding: 22,
    alignItems: "center",
  },
  textInput: {
    borderColor: "gray",
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 7,
  },
  text: {
    margin: 5,
    fontWeight: "bold",
  },
  fatButton: {
    margin: 10,
  },
  calculateButton: {
    backgroundColor: "#ff5c5c",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    marginLeft: 40,
    marginRight: 40,
  },
  result: {
    alignSelf: "center",
    color: "gray",
    fontSize: 65,
    padding: 15,
  },
  buttonContainer: {
    width: 300,
    height: 240,
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
    minWidth: 300,
    minHeight: 220,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 5,
    marginTop: 5,
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
