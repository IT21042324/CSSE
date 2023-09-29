import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { Header } from "../component/header/inspectorHeader";

const screens = {
  "Scan Token": {
    screen: ScanToken,
    navigationOptions: {
      headerTitle: () => <Header title={"Scan Token"} />,
    },
  },

  //   Store: {
  //     screen: Store,
  //     navigationOptions: {
  //       headerTitle: () => <Header title={"Store"} />,
  //     },
  //   },
};

const stackNavigator = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#fff",
    headerStyle: {
      backgroundColor: "dodgerblue",
      height: 60,
    },
  },
});

export default createAppContainer(stackNavigator);
