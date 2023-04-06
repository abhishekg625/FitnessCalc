import { Text, View, Linking, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./HomeStyles";
// import { FontAwesome5 } from "@expo/vector-icons";
// import { Ionicons } from "@expo/vector-icons";
// import { MaterialCommunityIcons } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  const onBMRClick = () => {
    navigation.navigate("BmrCalculator");
  };
  const onBodyFatClick = () => {
    navigation.navigate("BodyfatCalculator");
  };
  const onMassIndexClick = () => {
    navigation.navigate("BmiCalculator");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Fitness Calculator</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => onBMRClick()}
          style={styles.appButtonContainer}
        >
          <Text style={styles.calText}>BMR Calculator</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onBodyFatClick()}
          style={styles.appButtonContainer}
        >
          <Text style={styles.calText}>Body Fat Calculator</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onMassIndexClick()}
          style={styles.appButtonContainer}
        >
          <Text style={styles.calText}>Body Mass Index</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer2}>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              "https://en.wikipedia.org/wiki/Basal_metabolic_rate"
            )
          }
        >
          <Text style={styles.calText}>Know About BMR </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL("https://en.wikipedia.org/wiki/Body_fat_percentage")
          }
        >
          <Text style={styles.calText}>Know About Body Fat </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL("https://en.wikipedia.org/wiki/Body_mass_index")
          }
        >
          <Text style={styles.calText}>Know About Body Mass Index </Text>
        </TouchableOpacity>
      </View>
      {/* <View style={{ flexDirection: "row", marginTop: 25 }}>
        <FontAwesome5 name="dumbbell" size={25} color="black" />
        <Ionicons name="body" size={25} color="black" />
        <MaterialCommunityIcons name="jump-rope" size={25} color="black" />
        <MaterialCommunityIcons name="dumbbell" size={25} color="black" />
      </View> */}
    </View>
  );
};

export default HomeScreen;
