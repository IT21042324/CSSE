import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { Header } from "../component/header/commonHeader";
import { inspectorLandingScreen } from "../screen/inspector/inspectorLanding";
import { screenTitles } from "../contants/strings";
import { height } from "../contants/globalConstants";
import { ViewAllocation } from "../screen/inspector/viewAllocation";
import { ViewRoute } from "../screen/inspector/viewRoute";
import { DistanceCalculator } from "../screen/inspector/distanceCalculator";
import ScanToken from "../screen/inspector/scanToken";
import PurchaseCredits from "../screen/inspector/purchaseCredits";

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
  ViewAllocation: {
    screen: ViewAllocation,
    navigationOptions: {
      headerTitle: () => <Header title={screenTitles.viewAllocation} />,
    },
  },
  ViewRoute: {
    screen: ViewRoute,
    navigationOptions: {
      headerTitle: () => <Header title={screenTitles.viewRoute} />,
    },
  },
  DistanceCalculator: {
    screen: DistanceCalculator,
    navigationOptions: {
      headerTitle: () => <Header title={screenTitles.distanceCaluclator} />,
    },
  },
  PurchaseCredits: {
    screen: PurchaseCredits,
    navigationOptions: {
      headerTitle: () => <Header title={screenTitles.purchaseCredits} />,
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
