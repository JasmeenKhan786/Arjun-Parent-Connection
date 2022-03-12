import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import db from "./config";
// You can import from local files

// or any pure javascript modules available in npm

export default class ParentsAroundScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parents: [],
    };
  }
  getData = async () => { 
    this.setState({parents:[]})
    var response = await db
      .collection("user")
      .where("visibility", "==", true) 
      .get();
    response.docs.map((a) => {
      var tempArray = this.state.parents;
      tempArray.push(a.data());
      this.setState({ parents: tempArray });
 
    });
  };
  componentDidMount() {
    this.getData();
  }
  render() {
    if (this.state.parents.length === 0) {
      return (
        <View
          style={{
            flex: 1,
            backgroundColor: "black",
          }}
        >
          <Text style={styles.heading}>Parents Around</Text>

          <Text
            style={{
              color: "white",
              textAlign: "center",
              alignSelf: "center",
              marginHorizontal: "10%",
              fontSize: 18,
              marginTop:'50%'
            }}
          >
            Parents in your area will appear here
          </Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.heading}>Parents Around</Text>
          <ScrollView>
            {this.state.parents.map((a,i) => {
              return (
                <View
                key={i}
                  style={{
                    backgroundColor: "pink",
                    width: "90%",
                    alignSelf: "center",
                    borderRadius: 10,
                    marginTop: 20,
                  }}
                >
                  <LinearGradient
                    colors={["#722ae6", "#e4b5cb"]}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 10,
                      justifyContent: "center",
                      padding: 15,
                      flex: 1,
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontSize: 16,
                        fontWeight: "bold",
                      }}
                    >
                      {a.name}
                    </Text>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          marginTop: 5,
                        }}
                      >
                        <Ionicons name="mail" size={20} color="white" />
                        <Text style={{ color: "white", marginLeft: 5 }}>
                          {a.email}
                        </Text>
                      </View>

                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          marginTop: 5,
                          marginLeft: 30,
                        }}
                      >
                        <Ionicons name="location" size={20} color="white" />
                        <Text style={{ color: "white", marginLeft: 5 }}>
                          {a.state}
                        </Text>
                      </View>
                    </View>

                    <Text style={{ color: "white", marginTop: 10 }}>
                      {a.description}
                    </Text>
                  </LinearGradient>
                </View>
              );
            })}
          </ScrollView>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  logo: {
    alignSelf: "center",
    width: "40%",
    height: "40%",
  },
  heading: {
    color: "white",
    marginLeft: "10%",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: "15%",
  },
  buttons: {
    alignSelf: "center",
    backgroundColor: "#444444",
    width: "81%",
    height: "6%",
    borderRadius: 10,

    marginTop: "5%",
    flexDirection: "row",
  },
  googleText: {
    color: "white",
    marginLeft: "3%",
    marginTop: "3%",
    fontFamily: "Arial",
  },
  text: {
    color: "white",
    marginLeft: "10%",
    marginTop: "5%",
    fontFamily: "Arial",
  },
  textinput: {
    backgroundColor: "#444444",
    width: "81%",
    height: "6%",
    borderRadius: 10,

    marginTop: "3%",
    alignSelf: "center",
    padding: "3%",
  },
  login: {
    alignSelf: "center",
    backgroundColor: "#0099FF",
    width: "81%",
    height: "8%",
    borderRadius: 10,

    marginTop: "5%",
    flexDirection: "row",
  },
  logintext: {
    color: "white",
    marginLeft: "40%",
    marginTop: "5%",
    fontFamily: "Arial",
  },
  signup: {
    color: "white",
    marginLeft: "30%",
    marginTop: "3%",
    fontFamily: "Arial",
    fontSize: 10,
  },
});
