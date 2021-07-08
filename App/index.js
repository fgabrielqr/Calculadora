import React from "react";
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";

import Row from "./components/Row";
import Button from "./components/Button";
import calculator, { initialState } from "./util/calculator";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
    justifyContent: "flex-end"
  },
  value: {
    color: "#000000",
    fontSize: 40,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10
  },
  content: {
    backgroundColor: "#fff",
    borderRadius: 5,
    marginRight: 5,
    marginLeft: 5,
    marginBottom: 7
  },
  values: {
    marginStart: "80%"
  },
  btn: {

    flexDirection: "column"
  }
});

export default class App extends React.Component {
  state = initialState;

  handleTap = (type, value) => {
    this.setState(state => calculator(type, value, state));
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          <View style={styles.content}>
            <Text style={styles.value}>
              {parseFloat(this.state.currentValue).toLocaleString()}
            </Text>
          </View>

          <View style={styles.values}>
            <Row>
              <Button text="CE/C" theme="accent" onPress={() => this.handleTap("clear")} />
            </Row>
          </View>

          <Row>
            <Button text="7" onPress={() => this.handleTap("number", 7)} />
            <Button text="8" onPress={() => this.handleTap("number", 8)} />
            <Button text="9" onPress={() => this.handleTap("number", 9)} />
            <Button text="%" onPress={() => this.handleTap("percentage")} />
            <Button text=">" onPress={() => this.handleTap("maior")} />
          </Row>

          <Row>
            <Button text="4" onPress={() => this.handleTap("number", 4)} />
            <Button text="5" onPress={() => this.handleTap("number", 5)} />
            <Button text="6" onPress={() => this.handleTap("number", 6)} />
            <Button text="x" onPress={() => this.handleTap("operator", "*")} />
            <Button text="/" onPress={() => this.handleTap("operator", "/")} />
          </Row>

          <Row>
            <Button text="1" onPress={() => this.handleTap("number", 1)} />
            <Button text="2" onPress={() => this.handleTap("number", 2)} />
            <Button text="3" onPress={() => this.handleTap("number", 3)} />
            <Button text="+" onPress={() => this.handleTap("operator", "+")} />
            <Button text="-" onPress={() => this.handleTap("operator", "-")} />
          </Row>

          <Row>
            <Button text="0" double onPress={() => this.handleTap("number", 0)} />
            <Button text="00" double onPress={() => this.handleTap("number", '00')} />
            <Button text="." onPress={() => this.handleTap("number", ".")} />
            <Button text="=" onPress={() => this.handleTap("equal")} />
          </Row>
        </SafeAreaView>
      </View>
    );
  }
}
