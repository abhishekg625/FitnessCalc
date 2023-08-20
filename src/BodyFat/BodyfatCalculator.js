import React, { useState } from "react";
import { Text, View, TouchableOpacity, TextInput, Image } from "react-native";
import styles from "./BodyfatStyle";
import Styles from "../Bmi/BmiStyle";
import { DEFAULT_VALUE } from "../const";
import RNModal from "react-native-modal";
import FITNESS from "../assets/image1.png";
import DropDownPicker from "react-native-dropdown-picker";

const BodyfatCalculator = () => {
  const [neckSize, setNeckSize] = useState(DEFAULT_VALUE.neckSize);
  const [heightValue, setHeightValue] = useState(DEFAULT_VALUE.height);
  const [waist, setWaist] = useState(DEFAULT_VALUE.waist);
  const [hipSize, setHipSize] = useState(DEFAULT_VALUE.hipSize);
  const [result, setResult] = useState(0);
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [items, setItems] = useState([
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ]);

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
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={FITNESS}
            alt="fitness"
            style={{ height: 100, width: 100 }}
          />
        </View>
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
            itemStyle={{
              backgroundColor: "red",
              flexDirection: "row",
              display: "flex",
            }}
            dropDownContainerStyle={{
              backgroundColor: "#dfdfdf",
            }}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
          />
        </View>
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
          value={heightValue}
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

export default BodyfatCalculator;
