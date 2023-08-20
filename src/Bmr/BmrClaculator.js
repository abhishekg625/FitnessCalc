import { Text, View } from "react-native";
import React, { useState } from "react";
import { TextInput, TouchableOpacity } from "react-native";
import styles from "./BmrStyle";
import Styles from "../Bmi/BmiStyle";
import DropDownPicker from "react-native-dropdown-picker";
import RNModal from "react-native-modal";
import { DEFAULT_VALUE } from "../const";

const BmrClaculator = ({ navigation }) => {
  const [show, setShow] = useState(false);
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
  const maleResult = (
    (88.362 + 13.397 * weight + 4.799 * height - 5.677 * age) /
    100
  ).toFixed(2);
  const femaleResult = (
    (447.593 + 9.247 * weight + 3.098 * height - 4.33 * age) /
    100
  ).toFixed(2);
  const Calculate = () => {
    if (value === "male") {
      console.log(maleResult);
      setResult(maleResult);
    } else if (value === "female") {
      console.log(femaleResult);
      setResult(femaleResult);
    } else {
      setResult(0);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Text style={styles.text}>Gender </Text>
        <View>
          <DropDownPicker
            placeholder="Select Gender"
            style={{
              border: "solid 1px black",
              borderRadius: 8,
              display: "flex",
              flexDirection: "row",
              padding: 4,
            }}
            dropDownContainerStyle={{
              backgroundColor: "#dfdfdf",
            }}
            itemStyle={{
              backgroundColor: "red",
              flexDirection: "row",
              display: "flex",
            }}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
          />
        </View>
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
          <Text style={{ ...styles.text, color: "green" }}>
            I don't know my fat percentage
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.calculateButton}
          onPress={() => {
            setShow(true);
            Calculate();
          }}
        >
          <Text> Calculate</Text>
        </TouchableOpacity>
        <RNModal isVisible={show} animationIn="zoomIn" animationOut="zoomOut">
          <View style={Styles.modalContainer}>
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
              <TouchableOpacity
                style={styles.calculateButton}
                onPress={() => {
                  setShow(false);
                }}
              >
                <Text> Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </RNModal>
      </View>
    </View>
  );
};

export default BmrClaculator;
