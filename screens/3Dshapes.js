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
  ActivityIndicator
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
      counter: 0,
    };
  }


  componentDidMount() {
    this.state.scrollOffset.addListener(({ value }) => (this.offset = value));
    setInterval(this.incrementCounter, 4000);
  }

  incrementCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
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
              <Icon.Button name="more-vertical" size={30} backgroundColor="#00131A" color="#fff" onPress={this.props.navigation.openDrawer} iconStyle={{ marginLeft: -15, marginRight: -10, marginBottom: -12 }}></Icon.Button>
              <Image source={require('../assets/THREEDIMENSIONALSHAPES.png')} style={{ width: 330, height: 23, resizeMode: "Absolute", MarginBottom: 900, }} />
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

              <Image style={{ width: 300, height: 330, marginTop: 10, marginLeft: 10, position: 'relative' }} source={require('../assets/cube/cube.png')} />
              <Image style={{ width: 130, height: 40, marginTop: 10, position: 'relative', marginLeft: 3 }} source={require('../assets/cube/text.png')} />
              <Image style={{ width: 400, height: 260, marginLeft: 10, marginTop: 30, marginBottom: 30 }} source={require('../assets/cube/main.png')} />
            </View>
            <View
              style={{
                backgroundColor: "#006176"
              }}
            >

              <Image style={{ width: 340, height: 300, marginTop: 10, marginLeft: 8, position: 'relative' }} source={require('../assets/cuboid/cuboid.png')} />
              <Image style={{ width: 180, height: 50, marginTop: -10, position: 'relative', marginLeft: 10 }} source={require('../assets/cuboid/text.png')} />
              <Image style={{ width: 400, height: 260, marginLeft: 10, marginTop: 20, marginBottom: 30 }} source={require('../assets/cuboid/main.png')} />
            </View>
            <View
              style={{
                backgroundColor: "#009698"
              }}
            >
              <Image style={{ width: 260, height: 450, marginTop: 10, marginLeft: 3, position: 'relative' }} source={require('../assets/cylinder/cylinder.png')} />
              <Image style={{ width: 210, height: 50, marginTop: -10, position: 'relative', marginLeft: 10 }} source={require('../assets/cylinder/text.png')} />
              <Image style={{ width: 400, height: 260, marginLeft: 10, marginTop: 20, marginBottom: 30 }} source={require('../assets/cylinder/main.png')} />
            </View>
            <View
              style={{
                backgroundColor: "#006176"
              }}
            >

              <Image style={{ width: 340, height: 430, marginTop: 10, marginLeft: 8, position: 'relative' }} source={require('../assets/cone/cone.png')} />
              <Image style={{ width: 180, height: 50, marginTop: -10, position: 'relative', marginLeft: 10 }} source={require('../assets/cone/text.png')} />
              <Image style={{ width: 400, height: 260, marginLeft: 10, marginTop: 20, marginBottom: 30 }} source={require('../assets/cone/main.png')} />
            </View>
            <View
              style={{
                backgroundColor: "#009698"
              }}
            >
              <Image style={{ width: 360, height: 360, marginTop: 10, marginLeft: 3, position: 'relative' }} source={require('../assets/sphere_hemisphere/hemi_shpere.png')} />
              <Image style={{ width: 190, height: 50, marginTop:   10, position: 'relative', marginLeft: 10 }} source={require('../assets/sphere_hemisphere/text.png')} />
              <Image style={{ width: 400, height: 260, marginLeft: 10, marginTop: 20, marginBottom: 30 }} source={require('../assets/sphere_hemisphere/main.png')} />
              <Image style={{ width: 260, height: 50, marginTop:   10, position: 'relative', marginLeft: 10 }} source={require('../assets/sphere_hemisphere/text2.png')} />
              <Image style={{ width: 400, height: 260, marginLeft: 10, marginTop: 20, marginBottom: 30 }} source={require('../assets/sphere_hemisphere/main2.png')} />
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
