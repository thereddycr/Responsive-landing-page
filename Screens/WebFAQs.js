import React, { useState } from "react";
import { Box, Text, Divider, Stack, ScrollView, Hidden } from "native-base";
import { StyleSheet } from "react-native";

import Faq from "react-faq-component";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

// import TopBar from "./Topbar";

const data = {
  rows: [
    {
      title: `What are SP Credits?`,
      content: `SP Credits are our in-app currency, required to perform SmartSearch and to send Postcards. Check plan details for more information.`,
    },
    {
      title: `What payment methods are accepted?`,
      content: `VISA, Mastercard.`,
    },
    {
      title: `What platform is ShadowProperties available on?`,
      content: `iOS and Android.`,
    },
    {
      title: `What does support include?`,
      content: `Any account related, and software related technical questions will be addressed via live chat or email. We are not responsible for your business or your business-related questions in any way.`,
    },
    {
      title: `Does ShadowProperties integrate with third party systems?`,
      content: `Not right now but we plan on integrating with necessary tools in the future, you can currently export your data through files.`,
    },
    {
      title: `Are there any setup fees?`,
      content: `No, the Subscription and SP Credits are everything that you pay us for.`,
    },
    {
      title: `Can I pay quarterly or yearly`,
      content: `No.`,
    },
    {
      title: `Is my data safe?`,
      content: `We take matters of data security very seriously at ShadowProperties. We are hosted on the highly reliable cloud partners Amazon AWS, DigitalOcean and Microsoft Azure servers, that promise optimal uptime and data security for all our customer data. Our hosting partner's servers are hosted in world class data centers, that are protected by biometric locks and 24-hour surveillance. We ensure that our application is always up to date with the latest security patches. We use SSL encryption to keep your data safe.`,
    },
    {
      title: `Can I cancel my account at any time?`,
      content: `Yes, and it will be cancelled by the end of your current billing cycle, no refunds of any kind.`,
    },
  ],
};

const WebFaqs = ({ navigation }) => {
  const [rows, setRowsOption] = useState(null);
  // const [row, setRow] = useState(0);

  return (
    <>
      <Hidden only={["base", "sm", "md", "lg"]}>
        <Stack
          bg={"#ffffff"}
          onLayout={(event) => {
            console.log(event.nativeEvent.layout.height);
          }}
        >
          {/* <Stack>
            <TopBar navigation={navigation}></TopBar>
          </Stack> */}

          <ScrollView
            bg={"#ffffff"}
            style={{ width: vw(100), height: vh(100) }}
            // marginTop={vh(10)}
          >
            <Box>
              <Text style={styless.title}>FAQs</Text>
              <Divider style={styless.titleDivider}></Divider>
            </Box>
            <Stack style={styless.faqStyleBody}>
              <Box style={styless.faqStyleWrapper}>
                <Faq
                  data={data}
                  styles={styles}
                  config={config}
                  getRowOptions={setRowsOption}
                />
              </Box>
            </Stack>
            <Box padding={vh(10)} />
          </ScrollView>
        </Stack>
      </Hidden>
    </>
  );
};
export default WebFaqs;

const styless = StyleSheet.create({
  title: {
    fontSize: vw(4),
    marginTop: vh(3),
    color: "#5011a2",
    alignSelf: "center",
    fontFamily: "HelveticaNeueLTStdMd",
  },
  titleDivider: {
    marginTop: vh(2),
    width: vw(7),
    borderWidth: vh(0.15),
    alignSelf: "center",
    borderColor: "#e62e00",
  },
  faqStyleBody: {
    marginTop: vh(8),
    alignItems: "center",
  },
  faqStyleWrapper: {
    width: vw(60),
    fontFamily: "HelveticaNeueLTStdRoman",
  },
});

const styles = {
  rowTitleColor: "#7D2BE9",
  rowContentColor: "#808080",
  arrowColor: "#7D2BE9",
  rowTitleTextSize: "1.8rem",
  rowContentTextSize: "1.6rem",
  rowContentPaddingBottom: "1.313rem",
  rowContentPaddingRight: "1rem",
  timingFunc: "ease",
  // transitionDuration: "1s",
};

const config = {
  animate: true,
  tabFocus: true,
  // arrowIcon: "V",
  // openOnload: 0,
  // expandIcon: "+",
  // collapseIcon: "-",
};
