import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

// You can import from local files

// or any pure javascript modules available in npm
const category = [
  { id: "01", name: "School", image: require("./assets/s.png") },
  {
    id: "02",
    name: "Extra Curricular: Academics",
    image: require("./assets/a.png"),
  },
  {
    id: "03",
    name: "Extra Curricular: Sports",
    image: require("./assets/sp.png"),
  },
  { id: "04", name: "Others", image: require("./assets/t.png") },
];
export default class CategoryScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      emailId: "",
      password: "",
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{ flexDirection: "row", marginTop: "15%" }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.goBack();
              }}
              style={{ marginLeft: "10%" }}
            >
              <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 20, 
                marginLeft: 20,
              }}
            >
              Categories
            </Text>
          </View> 

          <View style={{ flex: 1 }}>
            {category.map((a) => {
              return (
                <TouchableOpacity
                key={a.id}
                  style={{ flex: 1, marginHorizontal: 10 }}
                  onPress={() => {
                    this.props.navigation.navigate("Activity", {
                      category: a.name,
                    });
                  }}
                >
                  <ImageBackground
                    source={a.image}
                    style={{
                      width: "100%",
                      height: 150,
                      alignSelf: "center",
                      marginVertical: 10,
                      borderRadius: 10,
                      overflow: "hidden",
                      justifyContent:'flex-start',
                    }}
                  >
                    <Text
                      style={{
                        backgroundColor: "rgba(20,20,20,0.5)",
                        textAlign: "center", 
                        color: "white",
                        padding:5,
                        fontWeight:'bold',
                        fontSize:16
                      }} 
                    >
                      {a.name}
                    </Text>
                  </ImageBackground>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </View>
    );
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
    fontSize: 25,
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
