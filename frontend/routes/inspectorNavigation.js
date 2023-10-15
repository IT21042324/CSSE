import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Header } from "../component/header/commonHeader";
import { height } from "../contants/globalConstants";
import { screenTitles } from "../contants/strings";
import { DistanceCalculator } from "../screen/inspector/distanceCalculator";
import { inspectorLandingScreen } from "../screen/inspector/inspectorLanding";
import PurchaseCredits from "../screen/inspector/purchaseCredits";
import ScanToken from "../screen/inspector/scanToken";
import { ViewAllocation } from "../screen/inspector/viewAllocation";
import { ViewRoute } from "../screen/inspector/viewRoute";
import Welcome from "../screen/welcome";

const screens = {
  Welcome: {
    screen: Welcome,
  },
  Inspection: {
    screen: inspectorLandingScreen,
    navigationOptions: {
      headerTitle: () => (
        <Header title={screenTitles.inspection} showOptions={false} />
      ),
    },
  },
  ValidateToken: {
    screen: ScanToken,
    navigationOptions: {
      headerTitle: () => (
        <Header title={screenTitles.validateToken} showOptions={false} />
      ),
    },
  },
  ViewAllocation: {
    screen: ViewAllocation,
    navigationOptions: {
      headerTitle: () => (
        <Header title={screenTitles.viewAllocation} showOptions={true} />
      ),
    },
  },
  ViewRoute: {
    screen: ViewRoute,
    navigationOptions: {
      headerTitle: () => (
        <Header title={screenTitles.viewRoute} showOptions={false} />
      ),
    },
  },
  DistanceCalculator: {
    screen: DistanceCalculator,
    navigationOptions: {
      headerTitle: () => (
        <Header title={screenTitles.distanceCaluclator} showOptions={false} />
      ),
    },
  },
  PurchaseCredits: {
    screen: PurchaseCredits,
    navigationOptions: {
      headerTitle: () => (
        <Header title={screenTitles.purchaseCredits} showOptions={false} />
      ),
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
