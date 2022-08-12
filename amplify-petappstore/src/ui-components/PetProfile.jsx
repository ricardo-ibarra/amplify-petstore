/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useDataStoreDeleteAction,
} from "@aws-amplify/ui-react/internal";
import { Pet } from "../models";
import { schema } from "../models/schema";
import { Button, Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function PetProfile(props) {
  const { pet, overrides, ...rest } = props;
  const buttonThreeOneFiveFourTwoSevenZeroSevenOnClick =
    useDataStoreDeleteAction({ id: pet?.id, model: Pet, schema: schema });
  return (
    <Flex
      gap="24px"
      direction="column"
      width="327px"
      height="648px"
      alignItems="center"
      position="relative"
      borderRadius="25px"
      padding="24px 19px 24px 19px"
      backgroundColor="rgba(207,229,236,1)"
      {...rest}
      {...getOverrideProps(overrides, "PetProfile")}
    >
      <Button
        display="flex"
        width="278px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        borderRadius="25px"
        padding="8px 16px 8px 16px"
        size="large"
        isDisabled={false}
        variation="link"
        children="Delete"
        onClick={() => {
          buttonThreeOneFiveFourTwoSevenZeroSevenOnClick();
        }}
        {...getOverrideProps(overrides, "Button31542707")}
      ></Button>
      <Image
        width="160px"
        height="160px"
        shrink="0"
        position="relative"
        borderRadius="160px"
        padding="0px 0px 0px 0px"
        src={pet?.image}
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Flex
        gap="8px"
        direction="column"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Name")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="700"
          color="rgba(13,26,38,1)"
          lineHeight="25px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={pet?.name}
          {...getOverrideProps(overrides, "Melinda Marcus")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(48,64,80,1)"
          lineHeight="24px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0.01px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={`${"Breed: "}${pet?.breed}`}
          {...getOverrideProps(overrides, "Breed")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(48,64,80,1)"
          lineHeight="24px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0.01px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={`${"About: "}${pet?.about}`}
          {...getOverrideProps(overrides, "About")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(48,64,80,1)"
          lineHeight="24px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0.01px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={`${"Age: "}${pet?.age}`}
          {...getOverrideProps(overrides, "Age")}
        ></Text>
      </Flex>
      <View
        width="278px"
        height="125px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 418")}
      >
        <Button
          display="flex"
          gap="0"
          position="absolute"
          top="67px"
          left="0px"
          width="273px"
          height="44px"
          justifyContent="center"
          alignItems="center"
          size="large"
          isDisabled={false}
          variation="primary"
          children="Update"
          {...getOverrideProps(overrides, "Button31542703")}
        ></Button>
        <Button
          display="flex"
          gap="0"
          position="absolute"
          top="0px"
          left="0px"
          width="273px"
          height="44px"
          justifyContent="center"
          alignItems="center"
          size="large"
          isDisabled={false}
          variation="primary"
          children="Profile"
          {...getOverrideProps(overrides, "Button31542693")}
        ></Button>
      </View>
    </Flex>
  );
}
