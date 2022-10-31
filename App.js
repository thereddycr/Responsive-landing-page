import React, { useEffect } from "react";
import { NativeBaseProvider } from "native-base";

import * as Font from "expo-font";

import WebThird from "./Screens/WebThirdFold";
import WebFaqs from "./Screens/WebFAQs";
import ResponsiveThird from "./Screens/ResponsiveThirdFold";
import ResponsiveFaqs from "./Screens/ResponsiveFAQs";

const App = () => {
  useEffect(() => {
    Font.loadAsync({
      PoppinsMed: require("./assets/Fonts/Poppins-Medium.ttf"),
      PoppinsReg: require("./assets/Fonts/Poppins-Regular.ttf"),
      PoppinsSemiBold: require("./assets/Fonts/Poppins-SemiBold.ttf"),
      HelveticaNeueLTStdRoman: require("./assets/Fonts/HelveticaNeueLTStd-Roman.otf"),
      HelveticaNeueLTStdMd: require("./assets/Fonts/HelveticaNeueLTStd-Md.otf"),
      HelveticaNeueLTStdBd: require("./assets/Fonts/HelveticaNeueLTStd-Bd.otf"),
    });
  }, []);

  return (
    <NativeBaseProvider>
      {/* <WebThird /> */}
      <WebFaqs />
      {/* <ResponsiveThird />/ */}
      <ResponsiveFaqs />
    </NativeBaseProvider>
  );
};

export default App;
