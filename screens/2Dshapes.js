import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Animated,
  ScrollView,
  Button,
  Image,
} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  NavigationActions
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

export default class twoDshapes extends Component {
  constructor(props) {
    super(props);

    this.offset = 0;

    this.state = {
      scrollOffset: new Animated.Value(0),
      titleWidth: 0,
    };
  }


  componentDidMount() {
    this.state.scrollOffset.addListener(({ value }) => (this.offset = value));
  }

  onScroll = e => {
    const scrollSensitivity = 4 / 3;
    const offset = e.nativeEvent.contentOffset.y / scrollSensitivity;
    this.state.scrollOffset.setValue(offset);
  };

  getListItems = count => {
    const items = [];
    let i = 0;

    while (i < count) {
      i++;

      items.push(
        <View
          style={[
            styles.listItem,
            { backgroundColor: i % 2 === 0 ? '#eee5ff' : '#ceebfd' },
          ]}>
          <Text style={{ color: '#999' }}>{`List Item ${i}`}</Text>
        </View>
      );
    }

    return items;
  };

  render() {
    const { scrollOffset } = this.state;
    const screenWidth = Dimensions.get('window').width;

    return (
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.header,
            {
              paddingHorizontal: screenWidth * 0.05,
              width: screenWidth,
              height: scrollOffset.interpolate({
                inputRange: [0, 200],
                outputRange: [110, 85],
                extrapolate: 'clamp',
              }),
            },
          ]}>
          <Animated.Text
            onLayout={e => {
              if (this.offset === 0 && this.state.titleWidth === 0) {
                const titleWidth = e.nativeEvent.layout.width;
                this.setState({ titleWidth });
              }
            }}
            style={{
              fontWeight: 'bold',
              color: '#',
              fontSize: scrollOffset.interpolate({
                inputRange: [0, 20],
                outputRange: [28, 28.5],
                extrapolate: 'clamp',
              }),
            }}>
            <Icon.Button name="more-vertical" size={30} backgroundColor="#00131A" color="#910" iconStyle={{ marginLeft: -20, marginRight: -10, marginBottom: -12 }}></Icon.Button>
            <Image source={require('../assets/TWODIMENSIONALSHAPES.png')} style={{ width: 330, height: 23, resizeMode: "Absolute", MarginBottom: 900, }} />
          </Animated.Text>
          <Animated.View
            style={{
              width: scrollOffset.interpolate({
                inputRange: [0, 200],
                outputRange: [screenWidth * 0.9 - this.state.titleWidth, 0],
                extrapolate: 'clamp',
              }),
            }}
          />
        </Animated.View>

        <ScrollView style={{ flex: 1, width: '100%' }} contentContainerStyle={{ width: '100%' }} onScroll={this.onScroll} scrollEventThrottle={20}>
          <View
            style={{
              backgroundColor: "#009698"
            }}
          >
            
            <Image style={{ width: 250, height: 250, marginTop: 10,position: 'relative' }} source={require('../assets/square/square.png')} />
            <Image style={{ width: 160, height: 35, marginTop: 10, position: 'relative' , marginLeft:3 }} source={require('../assets/square/SQUAREtxt.png')} />
            <Image style={{ width: 200, height: 240, marginLeft: 10, marginTop: 30, marginBottom:30}} source={require('../assets/square/mainsquare.png')}/>
          </View>
          <View
            style={{
              backgroundColor: "#006176"
            }}
          >
            
            <Image style={{ width: 300, height: 200, marginTop: 10, marginLeft: 8 , position: 'relative' }} source={require('../assets/rectangle/rectangel.png')} />
            <Image style={{ width: 200, height: 50, marginTop: -10, position: 'relative' , marginLeft:10 }} source={require('../assets/rectangle/RECTANGLEtxt.png')} />
            <Image style={{ width: 320, height: 150, marginLeft: 10, marginTop: 20, marginBottom:30}} source={require('../assets/rectangle/mainrectangle.png')}/>
          </View>
          <View
            style={{
              backgroundColor: "#009698"
            }}
          >
            
            <Image style={{ width: 260, height: 280, marginTop: 10,marginLeft: 3,position: 'relative' }} source={require('../assets/triangle/triangle.png')} />
            <Image style={{ width: 180, height: 40, marginTop: -10, position: 'relative' , marginLeft:10}} source={require('../assets/triangle/TRIANGLEtxt.png')} />
            <Image style={{ width: 305, height: 169, marginLeft: 10, marginTop: 20, marginBottom:30}} source={require('../assets/triangle/maintriangle.png')}/>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#00131B',
    borderBottomWidth: 1,
    borderColor: 'gainsboro',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingBottom: 8,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 180 },
    shadowOpacity: 1,
    shadowRadius: 1,
  },
  listItem: {
    height: 200,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
