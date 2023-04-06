import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import styles from "./BmiStyle";
import { DEFAULT_VALUE } from "../const";

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
