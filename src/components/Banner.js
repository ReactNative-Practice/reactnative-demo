import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native'
import Swiper from 'react-native-swiper';
const { width } = Dimensions.get('window');

export default class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      swiperShow: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        swiperShow: true
      });
    }, 0)
  }

  render() {
    if (this.state.swiperShow) {
      return <Swiper style={styles.wrapper} lazyLoad height={150} horizontal={true} autoplay autoplayTimeout={3} loop>
        <View style={styles.slide1} title={<Text style={styles.text}>banner 11</Text>}>
          <Image style={styles.swipeImg} resizeMode={'stretch'} source={require('../assets/img/banner1.jpg')} />
        </View>

        <View style={styles.slide2} title={<Text style={styles.text}>banner 22</Text>}>
          <Image style={styles.swipeImg} resizeMode={'stretch'} source={require('../assets/img/banner1.jpg')} />
        </View>

        <View style={styles.slide3} title={<Text style={styles.text}>banner 33</Text>}>
          <Image style={styles.swipeImg} resizeMode={'stretch'} source={require('../assets/img/banner1.jpg')} />
        </View>
      </Swiper>
    } else {
      return <View style={150}></View>
    }
  }
}

const styles = StyleSheet.create({
  swipeImg: {
    width: width,
    flex: 1,
  },
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    width: '100%', color: '#fff', fontSize: 14, textAlign: 'center'
  }
});
