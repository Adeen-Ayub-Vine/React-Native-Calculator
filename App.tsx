import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  TouchableOpacity,
  Switch,
  SafeAreaView,
} from "react-native";
import { ThemeContext } from "./src/context/ThemeContext";
import { myColors } from "./src/styles/Colors";
import Screen from "./src/components/Screen";
import Icon from "react-native-vector-icons/Ionicons";

export default function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView
        style={
          theme === "light"
            ? styles.container
            : [styles.container, { backgroundColor: "#000" }]
        }
      >
        <StatusBar style="auto" />
        {/* <Switch
          value={theme === "light"} //if light then value is true
          onValueChange={() => setTheme(theme === "light" ? "dark" : "light")}
        /> */}
        <TouchableOpacity
          onPress={() => setTheme(theme === "light" ? "dark" : "light")}
          style={styles.iconContainer}
        >
          {theme === "light" ? (
            <Icon name="moon" size={30} color="#000" />
          ) : (
            <Icon name="sunny" size={30} color="#fff" />
          )}
        </TouchableOpacity>
        <Screen />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: "center",
    justifyContent: "flex-start",
  },

  iconContainer: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 10,
  },
});
