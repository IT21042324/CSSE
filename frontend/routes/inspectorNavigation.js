import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { ScanToken } from "../screen/inspector/scanToken";
import { Header } from "../component/header/commonHeader";
import { inspectorLandingScreen } from "../screen/inspector/inspectorLanding";
import { screenTitles } from "../contants/strings";
import { colorVariants, height } from "../contants/globalConstants";
import { FontAwesome } from "@expo/vector-icons";

const screens = {
  Inspection: {
    screen: inspectorLandingScreen,
    navigationOptions: {
      headerTitle: () => <Header title={screenTitles.inspection} />,
    },
  },
  ValidateToken: {
    screen: ScanToken,
    navigationOptions: {
      headerTitle: () => <Header title={screenTitles.validateToken} />,
    },
  },
};

const stackNavigator = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {
      height: height.headerHeight,
    },
  },
});

export default createAppContainer(stackNavigator);
