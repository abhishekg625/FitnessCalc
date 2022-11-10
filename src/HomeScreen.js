import { StyleSheet, Text, View, Linking } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

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
      <View style={{ flexDirection: "row", marginTop: 25 }}>
        <FontAwesome5 name="dumbbell" size={25} color="black" />
        <Ionicons name="body" size={25} color="black" />
        <MaterialCommunityIcons name="jump-rope" size={25} color="black" />
        <MaterialCommunityIcons name="dumbbell" size={25} color="black" />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 25,
    color: "#fc0390",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
    margin: 20,
  },

  appButtonContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,
    backgroundColor: "yellow",
    borderRadius: 10,
    padding: 30,
    margin: 15,
  },
  mainText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },

  calText: {
    fontWeight: "bold",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 260,
    height: 390,
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
    width: 250,
    height: 85,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 12,
    marginTop: 20,
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: {
      height: 1,
      width: 0,
    },
    elevation: 2,
  },
});
