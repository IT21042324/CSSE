import * as Font from "expo-font";
import { useFonts } from "expo-font";
import { useState } from "react";
import { SafeAreaView } from "react-native";
import { ThemeProvider } from "react-native-elements";
import { MenuProvider } from "react-native-popup-menu";
import { Layout as RapiLayout } from "react-native-rapi-ui";
import Toast from "react-native-toast-message";
import Navigator from "./routes/inspectorNavigation";
import { globalStyles } from "./styles/global";
import { UserContextProvider } from "./context/user";
import { LocationSettingsContextProvider } from "./context/locationSettings";

const App = () => {
  const [fontsLoaded] = useFonts({
    "ubuntu-regular": require("./assets/fonts/Ubuntu-Regular.ttf"),
    "ubuntu-bold": require("./assets/fonts/Ubuntu-Bold.ttf"),
    "arOneSans-regular": require("./assets/fonts/AROneSans-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={globalStyles.container}>
      <RapiLayout>
        <MenuProvider>
          <ThemeProvider>
            <UserContextProvider>
              <LocationSettingsContextProvider>
                <Navigator />
                <Toast />
              </LocationSettingsContextProvider>
            </UserContextProvider>
          </ThemeProvider>
        </MenuProvider>
      </RapiLayout>
    </SafeAreaView>
  );
};

export default App;
