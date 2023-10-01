import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { ScanToken } from "../screen/inspector/scanToken";
import { Header } from "../component/header/commonHeader";
import { inspectorLandingScreen } from "../screen/inspector/inspectorLanding";
import { screenTitles } from "../contants/strings";
import { colorVariants, height } from "../contants/globalConstants";

const screens = {
  Inspection: {
    screen: inspectorLandingScreen,
    navigationOptions: {
      headerTitle: () => <Header title={screenTitles.Inspection} />,
    },
  },
  "Scan Token": {
    screen: ScanToken,
    navigationOptions: {
      headerTitle: () => <Header title={screenTitles.tokenValidation} />,
    },
  },
};

const stackNavigator = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: colorVariants.white,
    headerStyle: {
      height: height.headerHeight,
    },
  },
});

export default createAppContainer(stackNavigator);
