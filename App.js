import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import Constants from 'expo-constants';
import {Feather} from '@expo/vector-icons';
import {AntDesign} from '@expo/vector-icons';
import {FontAwesome} from '@expo/vector-icons';
import {Entypo} from '@expo/vector-icons';
import {Ionicons} from '@expo/vector-icons';

const POLO_BLUE_COLOR = 'rgb(51,60,87)';
const FOLLOW_COLOR = 'rgb(71,113,246)';
const SEND_MESSAGE_COLOR = 'rgb(120,213,250)';

const imgData = [
  { id: 1, imgSource: require('./assets/1.jpg') },
  { id: 2, imgSource: require('./assets/2.jpg') },
  { id: 3, imgSource: require('./assets/3.jpg') },
  { id: 4, imgSource: require('./assets/4.jpg') },
  { id: 5, imgSource: require('./assets/5.jpg') },
  { id: 6, imgSource: require('./assets/6.jpg') },
  { id: 7, imgSource: require('./assets/7.jpg') },
  { id: 8, imgSource: require('./assets/8.jpg') },
  { id: 9, imgSource: require('./assets/9.jpg') },
  { id: 10, imgSource: require('./assets/10.jpg') },
  { id: 11, imgSource: require('./assets/11.jpg') },
  { id: 12, imgSource: require('./assets/12.jpg') },
  { id: 13, imgSource: require('./assets/13.jpg') },
  { id: 14, imgSource: require('./assets/14.jpg') },
  { id: 15, imgSource: require('./assets/15.jpg') },
  { id: 16, imgSource: require('./assets/16.jpg') },
  { id: 17, imgSource: require('./assets/17.jpg') },
  { id: 18, imgSource: require('./assets/18.jpg') },
  { id: 19, imgSource: require('./assets/19.jpg') },
  { id: 20, imgSource: require('./assets/20.jpg')},
  { id: 21, imgSource: require('./assets/21.jpg')},
  { id: 22, imgSource: require('./assets/22.jpg')}
];
const centerImgData = Math.floor(imgData.length / 2);

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>  
        <View style={styles.topStyle}>
          <View style={styles.backWrapper}>
            <Ionicons name='ios-arrow-round-back' size={32} color='black'/>
          </View>
          <View style={styles.titleWrapper}>
            <Image  source={require('./assets/instagramImage.png')} style= {styles.instagramText}  resizeMode="contain" />
          </View>
          <View style={styles.filterWrapper}>
            <AntDesign name="ellipsis1" size= {25} color="black" />
          </View>
        </View>      
        <View style={styles.headerStyle}>
          <View style={styles.avatarWrapper}>
            <Image style={styles.avatarImage}
              source={require('./assets/avatar.jpg')}
            />
          </View>
          <View style={styles.userInfo}>
            <View style={styles.info}>
              <Text style={styles.nameText}>Đặng Đình Quyền Anh</Text>
              <Text style={styles.jobText}>Developer</Text>
            </View>
            <View style={styles.buttonWrapper}>
              <TouchableOpacity style={styles.followButton} onPress={this.followAlert}>
                <Text style={styles.followText}>Follow</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.sendButton} onPress={this.messengeAlert}>
                <Feather name="send" size= {20} color="white" />
              </TouchableOpacity>
            </View>
          </View>          
        </View>
        <View style={styles.followStyle}>
            <View style={styles.numberPhoto}>
              <Text style={styles.numberText}>210</Text>
              <Text style={styles.photoText}>Photos</Text>
            </View>
          <View style={styles.numberPhoto}>
            <Text style={styles.numberText}>15k</Text>
            <Text style={styles.photoText}>Followers</Text>
            </View>
            <View style={styles.numberPhoto}>
              <Text style={styles.numberText}>605</Text>
              <Text style={styles.photoText}>Following</Text>
          </View>
        </View>
        <ScrollView style={{flex: 6}}>
          <View style={styles.imageStyle}>
            <View style={{ flexDirection:'column' }}>
              {imgData.slice(0,centerImgData).map(item=>{
                return <Image source={item.imgSource} style={styles.image}/>;
              })}          
            </View>
            <View style={{ flexDirection:'column' }}>
                {imgData.slice(centerImgData).map(item=>{
                 return <Image source={item.imgSource} style={styles.image}/>;
               })}          
            </View>
          </View>
        </ScrollView>
        
        <View style={styles.botStyle}>
          <AntDesign name='home' size={25} color='black'/>
          <Feather name='search' size={25} color='black' />
          <Ionicons name='ios-add-circle-outline' size={25} color='black' />
          <AntDesign name='hearto' size={25} color='black' />
          <FontAwesome name='user' size={25} color='back' />
        </View>
      </View>
    );
  }
  followAlert = () => {
    Alert.alert(
      'Follow',
      'Followed!!',
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
  }

  messengeAlert = () => {
    Alert.alert(
      'Messenge',
      'Sended messenger!!! ',
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  topStyle:{
    flex: 0.11,
    flexDirection:"row",
    backgroundColor: 'white',
    justifyContent:'center',
    alignContent:'center',
    marginTop:20,
  },
  headerStyle:{
    flex: 0.3,
    backgroundColor: 'while',
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems: 'center',
  },
  followStyle:{
    flexDirection: 'row',
    flex: 0.20,
    backgroundColor: 'white',
  },
  imageStyle:{
    backgroundColor: 'white',
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  botStyle:{
    flex: 0.1,
    backgroundColor: 'while',
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    alignItems: 'center'
  },
  backWrapper:{
    flex:0.1,
    marginLeft:20,
    justifyContent:'center',
    alignItems:'center,'
  },
  titleWrapper:{
    flex:0.8,
    justifyContent:'center',
  },
  instagramText:{
    flex: 0.65,
    width: null, 
    height: 40,
  },
  filterWrapper:{
    flex: 0.1,
    justifyContent:'center',
    alignItems:'center,'

  },
  avatarWrapper:{
    flex: 0.3,
  },
  avatarImage:{
    width: 90,
    height: 90,
    borderRadius:45,
  },
  userInfo: {
    flex: 0.5,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  info:{
    flex: 0.6,
    justifyContent:'center'
  },
  nameText:{
    fontSize: 18,
    fontWeight: 700,
    justifyContent:'center',
  },
  jobText:{
    fontsize: 15,
    color: 'grey',
  },
  buttonWrapper:{
    flex: 0.4,
    flexDirection: 'row',
  },
  followButton:{
      backgroundColor:FOLLOW_COLOR,
      width: 120,
      height: 35,
      justifyContent:'center',
      alignItems:'center',
      borderRadius: 17,
      shadowColor: "#000",
      shadowOffset: {
	      width: 0,
	      height: 5,
      },
      shadowOpacity: 0.34,
      shadowRadius: 6.27,
      elevation: 10,
  },
  sendButton:{
    backgroundColor:SEND_MESSAGE_COLOR,
    width: 55,
    height: 35,
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 17,
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    marginLeft: 10,
  },
  followText:{
    color: 'white',
    fontsize: 12,
    fontWeight:300,
  },
  numberPhoto:{
  flex: 1/3,
  justifyContent:'center',
  alignItems: 'center',
  },
  numberText:{
    fontSize: 20,
    fontWeight: 'bold',
  },
  photoText:{
    fontSize: 12,
    color: 'grey',
    marginTop:5,
  },
  image:{
    width: 180,
    height: 250,
  },
  /*paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },*/
});
