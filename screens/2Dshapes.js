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

  Feed({ navigation }) {}

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
              color: 'whitesmoke',
              fontSize: scrollOffset.interpolate({
                inputRange: [0, 200],
                outputRange: [26, 20],
                extrapolate: 'clamp',
              }),
            }}>
              <Icon.Button name="more-vertical" size={30}  backgroundColor="#F9AF56" color="#900"  > Two Dimensions Shapes</Icon.Button>
            
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
            <View>
          <Image style={{ width: 200, height: 200 }} source={require('../assets/appicon.png')} />
          <Image style={{ width: 200, height: 200 }} source={require('../assets/appicon.png')} />
          </View>
          <View>
            <Text>hi hello  </Text>
          <Image style={{ width: 200, height: 200 }} source={require('../assets/appicon.png')} />
          <Image style={{ width: 200, height: 200 }} source={require('../assets/appicon.png')} />
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
    backgroundColor: '#F9AF56',
    borderBottomWidth: 1,
    borderColor: 'gainsboro',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingBottom: 8,
  },
  listItem: {
    height: 200,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
