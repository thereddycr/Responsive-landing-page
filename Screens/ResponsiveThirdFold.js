import React from "react";
import {
  Text,
  Stack,
  Card,
  Hidden,
  HStack,
  Link,
  Icon,
  Box,
  Image,
} from "native-base";

import { vw, vh, vmax, vmin } from "react-native-expo-viewport-units";

import Applestore from "../assets/svg-mbl-web/AppleStore";
import Googleplay from "../assets/svg-mbl-web/GooglePlay";

const ResponsiveThird = () => {
  return (
    <>
      <Hidden from="999" to="3840">
        <Stack safeAreaTop>
          <Image
            source={require("../assets/svg-mbl-web/the only app_mobile.png")}
            style={{ width: vw(100), height: vh(100) }}
            alt={"alternate text"}
            resizemode="cover"
            overflow={"hidden"}
          />
          <Stack
            marginTop={vh(15)}
            alignSelf="center"
            opacity={100}
            position={"absolute"}
            style={{ width: vw(87.5) }}
          >
            <Card
              bg="#7D2BE9"
              borderRadius={vw(4.5)}
              alignSelf={"center"}
              style={{ width: vw(87) }}
            >
              <Text
                marginTop={vh(5)}
                fontSize={vw(6.2)}
                textAlign="center"
                alignSelf={"center"}
                letterSpacing={vw(0.2)}
                lineHeight={vh(5.5)}
                color={"#FFFFFF"}
                opacity={1}
                fontFamily="PoppinsSemiBold"
                style={{ width: vw(80) }}
              >
                {`The only app you would\n need as a relator`}
              </Text>

              <Text
                marginTop={vh(2.2)}
                fontSize={vw(3)}
                textAlign="center"
                alignSelf={"center"}
                letterSpacing={vw(0.2)}
                lineHeight={vh(4.5)}
                color={"#FFFFFF"}
                opacity={1}
                fontFamily="HelveticaNeueLTStdRoman"
                style={{ width: vw(75) }}
              >
                {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
              </Text>

              {/* SVG-IMAGES- AppStore & PlayStore */}

              <HStack space={vw(6)} marginTop={vh(-1)} alignSelf={"center"}>
                <Link
                  href="https://apps.apple.com/us/app/shadowproperties/id1491176685/"
                  isExternal
                >
                  <Icon
                    resizemode="cover"
                    overflow={"hidden"}
                    opacity={100}
                    size={vw < 500 ? vw(35) : vw(33)}
                    as={<Applestore />}
                  />
                </Link>

                <Link
                  href="https://play.google.com/store/apps/details?id=and.app.properties.shadow"
                  isExternal
                >
                  <Icon
                    resizemode="cover"
                    overflow={"hidden"}
                    opacity={100}
                    size={vw < 500 ? vw(35) : vw(33)}
                    as={<Googleplay />}
                  />
                </Link>
              </HStack>
            </Card>
            <Box padding={vh(5)} />
          </Stack>
        </Stack>
      </Hidden>
    </>
  );
};

export default ResponsiveThird;
