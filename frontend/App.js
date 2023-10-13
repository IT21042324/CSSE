import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { useState } from "react";
import { SafeAreaView } from "react-native";
import { ThemeProvider } from "react-native-elements";
import { MenuProvider } from "react-native-popup-menu";
import { Layout as RapiLayout } from "react-native-rapi-ui";
import Toast from "react-native-toast-message";
import Navigator from "./routes/inspectorNavigation";
import { globalStyles } from "./styles/global";

const getFonts = () =>
  Font.loadAsync({
    "ubuntu-regular": require("./assets/fonts/Ubuntu-Regular.ttf"),
    "ubuntu-bold": require("./assets/fonts/Ubuntu-Bold.ttf"),
    "arOneSans-regular": require("./assets/fonts/AROneSans-Regular.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <SafeAreaView style={globalStyles.container}>
        <RapiLayout>
          <MenuProvider>
            <ThemeProvider>
              <Navigator />
              <Toast />
            </ThemeProvider>
          </MenuProvider>
        </RapiLayout>
      </SafeAreaView>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={(error) => console.error(error)}
      />
    );
  }
}
