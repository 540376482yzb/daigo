import React, {useState} from 'react';
import {StyleSheet,View} from 'react-native'
import {Form, Item, Input,Button,Text,Icon } from 'native-base';

const LoginComponent = ({handleLogin,loading, error}) =>{

    //state
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    
    return (
        <Form>
            <View style={styles.headerContent}><Icon type="AntDesign" name="login" style={styles.headerIcon}/></View>
            <View>
                <Item style={styles.formItem}>
                    <Icon type="Entypo" name="email" />
                    <Input value={email} onChangeText={setEmail} autoCapitalize='none' keyboardType='email-address'/>
                </Item>
                <Item style={styles.formItem} >
                    <Icon type="Entypo" name="lock" />
                    <Input value={password} onChangeText={setPassword} autoCapitalize='none' secureTextEntry={true}/>
                </Item>
            </View>
            <Button
             disabled={!email || !password}
             style={[styles.formItem,styles.submitButton]} bordered rounded block onPress={()=>handleLogin(email,password)}>
                <Text>Sign In</Text>
            </Button>
        </Form>
    )
}

const styles = StyleSheet.create({
    headerContent:{
        padding:10,
        justifyContent:'center',
        alignItems:'center'
    },
    headerIcon:{
        fontSize:40,
        color:'#bb1542'
    },
    formItem:{marginHorizontal:15,marginBottom:15},
    submitButton:{
        marginVertical:15
    }
})

export default LoginComponent