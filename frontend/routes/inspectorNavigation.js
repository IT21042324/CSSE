import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { ScanToken } from "../screen/inspector/scanToken";
import { Header } from "../component/header/commonHeader";

const screens = {
  "Scan Token": {
    screen: ScanToken,
    navigationOptions: {
      headerTitle: () => <Header title={"Scan Token"} />,
    },
  },
};

const stackNavigator = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#fff",
    headerStyle: {
      height: 60,
    },
  },
});

export default createAppContainer(stackNavigator);
