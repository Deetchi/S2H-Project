import React from 'react';
import{Text,View,Image,TextInput} from 'react-native';
//import Icon from '@expo/vector-icons/Entypo';

export default class Register extends React.Component{
    render(){
        const{navigate} = this.props.navigation

        return(
            <View style = {{backgroundColor:"#101f26", height:'100%'}}>
            <View>
            <Image source = {require('../images/leafy.png')}
              style = {{width:"20%" ,height:"20%",marginLeft:'40%',marginTop:'30%'}}
            />
            </View>

            <View style ={{
                flexDirection:'row',
                alignItem:'center',
                marginHorizontal:55,
                borderWidth:2,
                paddingHorizontal:10,
                borderColor:'#255853',
                paddingVertical:6,
                borderRadius:20
            }}>
              {/*<Icon name = "mail" color="#92978D" size={18} />*/}
              <TextInput placeholder='Username' placeholderTextColor='#92978D'
              style={{paddingHorizontal:15}}/>
              </View>

              <View style ={{
                flexDirection:'row',
                alignItem:'center',
                marginHorizontal:55,
                borderWidth:2,
                marginTop:'10%',
                paddingHorizontal:10,
                borderColor:'#255853',
                paddingVertical:6,
                borderRadius:20
            }}>
              
              <TextInput placeholder='Password' placeholderTextColor='#92978D'
              style={{paddingHorizontal:15}}/>
              {/*<Icon name ="lock" color="#92978D" size={18} style={{marginLeft:'60%',paddingHorizontal:20}} />*/}
            </View>

            <View style ={{
                flexDirection:'row',
                alignItem:'center',
                marginHorizontal:55,
                borderWidth:2,
                marginTop:'10%',
                paddingHorizontal:10,
                borderColor:'#255853',
                paddingVertical:6,
                borderRadius:20
            }}>
              
              <TextInput placeholder='Confirm Password' placeholderTextColor='#92978D'
              style={{paddingHorizontal:15}}/>
              {/*<Icon name ="lock" color="#92978D" size={18} style={{marginLeft:'60%',paddingHorizontal:20}} />*/}
            </View>


            <View style={{
                marginHorizontal:100,
                alignItems:'center',
                justifyContent:'center',
                marginTop:30,
                backgroundColor:'#255853',
                paddingVertical:7,
                borderRadius:23,
            }}>
            <Text 
            onPress={()=> navigate('Login')}
            style={{fontSize:20, color:'#ddd'}}>REGISTER</Text>
            </View>

            </View>
        )
    }
}