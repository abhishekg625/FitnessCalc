import { Text, View } from "react-native";
import React, { useState } from "react";
import { TextInput, TouchableOpacity } from "react-native";
import styles from "./BmrStyle";
import DropDownPicker from "react-native-dropdown-picker";
import { DEFAULT_VALUE } from "./const";

const BmrClaculator = ({ navigation }) => {
  const [weight, setWeight] = useState(DEFAULT_VALUE.weight);
  const [height, setHeight] = useState(DEFAULT_VALUE.height);
  const [age, setAge] = useState(DEFAULT_VALUE.age);
  const [result, setResult] = useState(0);
  const [fatPercentage, setFatePersentage] = useState("");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [items, setItems] = useState([
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ]);

  const Submit = () => {
    navigation.navigate("BodyfatCalculator");
  };
  const Calculate = () => {
    // Men: BMR = 88.362 + (13.397 x weight in kg) + (4.799 x height in cm) – (5.677 x age in years)
    // Women: BMR = 447.593 + (9.247 x weight in kg) + (3.098 x height in cm) – (4.330 x age in years)
    if (value === "male") {
      const result = (
        (88.362 + 13.397 * weight + 4.799 * height - 5.677 * age) /
        100
      ).toFixed(2);
      console.log(result);
      setResult(result);
    } else if (value === "female") {
      const result = (
        (447.593 + 9.247 * weight + 3.098 * height - 4.33 * age) /
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

        <Text style={styles.text}>Age </Text>
        <TextInput
          style={styles.textInput}
          label="age"
          keyboardType="numeric"
          value={age}
          onChangeText={(age) => setAge(age)}
        />

        <Text style={styles.text}> Weight (kg) </Text>
        <TextInput
          style={styles.textInput}
          label="weight"
          keyboardType="numeric"
          value={weight}
          onChangeText={(weight) => setWeight(weight)}
        />

        <Text style={styles.text}>Height (m) </Text>
        <TextInput
          style={styles.textInput}
          label="height"
          keyboardType="numeric"
          value={height}
          onChangeText={(height) => setHeight(height)}
        />
        <Text style={styles.text}>My fat Percentage </Text>
        <TextInput
          style={styles.textInput}
          label="fatPercentage"
          keyboardType="numeric"
          value={fatPercentage}
          onChangeText={(fatPercentage) => setFatePersentage(fatPercentage)}
        />

        <TouchableOpacity style={styles.fatButton} onPress={() => Submit()}>
          <Text style={styles.text}>I don't know my fat percentage</Text>
        </TouchableOpacity>
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

export default BmrClaculator;
