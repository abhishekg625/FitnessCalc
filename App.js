import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/HomeScreen";
import BmrClaculator from "./src/BmrClaculator";
import BodyfatCalculator from "./src/BodyfatCalculator";
import BmiCalculator from "./src/BmiCalculator";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Fitness Buddy",
            headerTitleAlign: "center",
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="BmrCalculator"
          component={BmrClaculator}
          options={{
            title: "BMR Calculator",
            headerTitleAlign: "center",
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="BodyfatCalculator"
          component={BodyfatCalculator}
          options={{
            title: "Body Fat Calculator",
            headerTitleAlign: "center",
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="BmiCalculator"
          component={BmiCalculator}
          options={{
            title: "Body Mass Index",
            headerTitleAlign: "center",
            headerShown: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
