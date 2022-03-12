import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
export default class HomeScreen extends React.Component {
  
  render() {
      return (
 <View style={{ flex: 1, backgroundColor: 'black' }}>
        <ScrollView>
          <View
            style={{
              flexDirection: 'row',
              marginTop: '15%',
              marginLeft: '5%',
            }}>
            <Image
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF3D1BnY6Of7Ay5__hLZO_L23WTHmxOxoY7A&usqp=CAU',
              }}
              style={{
                width: 65,
                height: 55,
                borderRadius: 10,
                resizeMode: 'cover',
              }}
            />
            <View style={{ marginHorizontal: '3%' }}>
              <Text style={{ color: 'grey' }}>Hi Family, 👋 </Text>
              <Text style={{ fontSize: 18, color: 'white' }}>
                Welcome to Parent Connect!
              </Text>
            </View>
          </View>

          <Text
            style={{
              color: 'white',
              marginHorizontal: '5%',
              marginTop: 30,
              fontSize: 18,
              textAlign: 'center',
              fontWeight: 'bold',
            }}>
            Other things may change us, but we start and end with family
          </Text>

          <View
            style={{
              width: '90%',
              alignSelf: 'center',
              borderRadius: 10,
              marginTop: 30,
            }}>
            <LinearGradient
              colors={['#722ae6', '#e4b5cb']}
              style={{
                width: '100%',
                height: '100%',
                flex: 1,
                borderRadius: 10,
                justifyContent: 'center',
                paddingHorizontal: 15,
                paddingVertical: 25,
              }}>
              <Text
                style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
                Know Parents Around You!
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 13,
                    fontWeight: '500',
                    width: '100%',
                    flex: 1,
                  }}>
                  Control your profile visibility, because we take privacy
                  seriously!
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: 'white',
                    borderRadius: 10,
                    padding: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress ={() => {
                    this.props.navigation.navigate('ParentsAround')
                  }

                  }>
                  <AntDesign name="arrowright" size={20} color="black" />
                </TouchableOpacity>
              </View>
            </LinearGradient>
          </View>

          <Text
            style={{
              color: 'white',
              fontSize: 16,
              marginLeft: '5%',
              fontWeight: 'bold',
              marginTop: 40,
            }}>
            Our Features
          </Text>

          <View
            style={{
              backgroundColor: 'pink',
              width: '90%',
              alignSelf: 'center',
              borderRadius: 10,
              marginTop: 30,
            }}>
            <LinearGradient
              colors={['#fe0944', '#feae96']}
              style={{
                width: '100%',
                flex: 1,

                height: '100%',
                borderRadius: 10,
                justifyContent: 'center',
                padding: 15,
              }}>
              <Text
                style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
                Activities
              </Text>

              <Text style={{ color: 'white' }}>
                Log all your kids activites and manage it seamlessly
              </Text>

              <TouchableOpacity
                style={{
                  backgroundColor: 'white',
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '50%',
                  height: 30,
                  marginTop: 10,
                  alignSelf: 'center',
                }}
                onPress ={()=>{
                  this.props.navigation.navigate('Category')
                }

                }
                >
                <Text>Pick A Category</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>

          <View
            style={{ 
              backgroundColor: 'pink',
              width: '90%',
              alignSelf: 'center',
              borderRadius: 10,
              marginTop: 20,
            }}>
            <LinearGradient
              colors={['#1e9afe', '#60dfcd']}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: 10,
                justifyContent: 'center',
                padding: 15,
                flex: 1,
              }}>
              <Text
                style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
                Events
              </Text>

              <Text style={{ color: 'white' }}>Track important events and never miss anything important</Text>

              <TouchableOpacity
                style={{
                  backgroundColor: 'white',
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '50%', 
                  height: 30,
                  marginTop: 10,
                  alignSelf: 'center', 
                }}
                onPress ={()=>{
                  this.props.navigation.navigate('EventsStack')
                }

                }>
                <Text>View Events</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </ScrollView>
      
          

  
        </View>
      );
    }
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  logo: {
    alignSelf: 'center',
    width: '40%',
    height: '40%',
  },
  heading: {
    color: 'white',
    marginLeft: '10%',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: '10%'
  },
  buttons: {
    alignSelf: 'center',
    backgroundColor: '#444444',
    width: '81%',
    height: '6%',
    borderRadius: 10,

    marginTop: '5%',
    flexDirection: 'row',
  },
  googleText: {
    color: 'white',
    marginLeft: '3%',
    marginTop: '3%',
    fontFamily: 'Arial',

  },
  text: {
    color: 'white',
    marginLeft: '10%',
    marginTop: '5%',
    fontFamily: 'Arial',
  },
  textinput: {
    backgroundColor: '#444444',
    width: '81%',
    height: '6%',
    borderRadius: 10,

    marginTop: '3%',
    alignSelf: 'center',
    padding: '3%',
  },
  login: {
    alignSelf: 'center',
    backgroundColor: '#0099FF',
    width: '81%',
    height: '8%',
    borderRadius: 10,

    marginTop: '5%',
    flexDirection: 'row',
  },
  logintext: {
    color: 'white',
    marginLeft: '40%',
    marginTop: '5%',
    fontFamily: 'Arial',
  },
  signup: {
    color: 'white',
    marginLeft: '30%',
    marginTop: '3%',
    fontFamily: 'Arial',
    fontSize: 10
  }
});
