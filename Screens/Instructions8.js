import React, { Component } from "react";
import {Text} from "react-native";
import { TitleText, Box, TextBoxTitle, GreenRoundButton, CenterTextBox, Picture,LeftTextBox } from "./Styles";
import { Container, Header, Content, Footer, FooterTab,Button } from 'native-base';

class Instructions8 extends Component {
  static navigationOptions = {
    title: "Collecting Blood"
  };
  render() {
    return (
      <Box>
        <TitleText>Collecting Blood</TitleText>

        <LeftTextBox />

        <Picture source={require("../Images/9.png")} />
        <LeftTextBox>         Squeeze your finger to extract blood.</LeftTextBox>
        <Text></Text>

        <LeftTextBox>     Grab solution tube #1 and drop the blood directly into the tube. Make sure you get a few </LeftTextBox>
        <LeftTextBox>              drops of blood into the tube.</LeftTextBox>
        <LeftTextBox />

        <GreenRoundButton onPress={() =>  this.props.navigation.navigate("Instructions9")} >
          Next
        </GreenRoundButton>
        <Text></Text>
          <LeftTextBox>        Careful not to let the blood touch the rim </LeftTextBox>
          <LeftTextBox>                               of the tube.</LeftTextBox>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>





        <FooterTab>
              <Button onPress={() => this.props.navigation.navigate("HomeScreen")}>
                                    <Text>New Test</Text>
                                    </Button>

              <Button onPress={() => this.props.navigation.navigate("Resources")}>
                                    <Text>Resources</Text>
                                    </Button>

              <Button onPress={() => this.props.navigation.navigate("SavedResults")}>
                                    <Text>Results</Text>
                                    </Button>

      </FooterTab>
      </Box>
    );
  }
}

export { Instructions8 };
