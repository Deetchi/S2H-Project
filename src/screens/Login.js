import React from 'react';
import { StyleSheet,Button,TextInput,View,Image,Text, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

const loginSchema = yup.object({
    username : yup.string()
        .required('username is a required field*'),
    password : yup.string()
        .required()
        .min(8, ({ min }) => `Password must be ${min} characters`, (val) => {
            return parseInt(val) < 9 && parseInt(val) > 0;
        })
})

export default function Login() {

    
    return(
        <View style = {styles.container}>
             <View>
             <Image source = {require('../images/leafy.png')}
               style = {{width:"20%" ,height:"20%",marginLeft:'40%',marginTop:'40%'}}
            />
             </View>
        <Formik
            initialValues = {{username:'',password:''}}
            validationSchema = {loginSchema}
            onSubmit={(values,actions) => {
                actions.resetForm();
                console.log(values);
            }}>
            {(props) => (
                <View >
                  {/*<Icon name = "mail" color="#92978D" size={18} />*/}
                  <TextInput
                  placeholder={'Username'} 
                  style={styles.input}
                  onChangeText = {props.handleChange('username')}
                  value = {props.values.username}
                  onBlur = {props.handleBlur('username')}
                  />
                  <Text style={styles.errorText} > {props.touched.username && props.errors.username}</Text>
                  
                  <TextInput 
                  name = 'Password'
                  placeholder='Password' 
                  style={styles.input}
                  onChangeText = {props.handleChange('password')}
                  value = {props.values.password}
                  onBlur = {props.handleBlur('password')}
                  secureTextEntry
                  />
                  <Text style={styles.errorText} > {props.touched.password && props.errors.password}</Text>
                  {/*<Icon name ="lock" color="#92978D" size={18} style={{marginLeft:'60%',paddingHorizontal:20}} />*/}
                  <TouchableOpacity onPress={props.handleSubmit}
                  style={{borderRadius:20,
                    padding:10,
                    marginHorizontal:55,
                    borderWidth:2,
                    backgroundColor:'#255853'}}>
                  <Text style={{color:'#ddd',textAlign:'center'}} >LOGIN</Text>
                  </TouchableOpacity>
              </View>
    
            )}
            
            </Formik>

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:"#101f26",
         height:'100%'
    },
    input: {
        borderWidth:2,
        borderColor:'#255853',
        paddingVertical:6,
        marginHorizontal:55,
        marginVertical:5,
        paddingHorizontal:10,
        fontSize:18,
        borderRadius:20,
        flexDirection:'row',
    },
    errorText: {
        color:'crimson',
        fontWeight:'bold',
        marginBottom:10,
        marginTop:6,
        textAlign:'center',
    }
})