import React, { useState } from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
class LoginScreen extends React.Component {
    render() {
        return (
            <View style={styles.mainBody}>
                <View
                    style={{
                        width: '100%',
                        height: 500,
                        resizeMode: "cover",
                        position: 'absolute',
                        top: 0,
                        backgroundColor: '#75c5fa'
                    }}
                >
                    <Text>test</Text>
                </View>
                {/* <View style={{ alignItems: 'center' }}>
                    <Image
                        source={require('../image/Agrismart-Logo.png')}
                        style={{
                            width: 250,
                            height: 180,
                            resizeMode: "contain",
                            marginTop: 60,
                        }}
                    />
                </View> */}
            </View>
        );
    }
}

export default LoginScreen;

const styles = StyleSheet.create({
    mainBody: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F4F5F7',
        flexDirection: 'column'
    },
    formSectionStyle: {
        borderTopRightRadius: 50,
        backgroundColor: '#F4F5F7',
        marginTop: 20,
        marginBottom: 20,
        justifyContent: 'center'
    },
    SectionStyle: {
        flexDirection: 'row',
        height: 40,
        marginTop: 20,
        marginLeft: 35,
        marginRight: 35,
        margin: 5,
    },
    underlineStyle: {
        flexDirection: 'row',
        marginLeft: 35,
        marginRight: 35,
        marginTop: -20
    },
    titleTextStyle: {
        color: '#1274bb',
        fontSize: 20,
        fontWeight: 'bold'
    },
    embediconStyle: {
        backgroundColor: '#FFFFFF',
        paddingTop: 10,
        paddingLeft: 15,
        paddingRight: 8,
        borderWidth: 1,
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        borderColor: 'white'
    },
    buttonStyle: {
        backgroundColor: '#fb9a2e',
        color: '#333',
        height: 40,
        alignItems: 'center',
        borderRadius: 30,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 20,
        marginBottom: 20,
    },
    buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 16,
        fontWeight: 'bold'
    },
    socialbuttonTextStyle: {
        color: '#333',
        paddingVertical: 10,
    },
    inputStyle: {
        flex: 1,
        color: '#333',
        backgroundColor: '#FFFFFF',
        paddingRight: 15,
        borderWidth: 1,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        borderColor: 'white',
    },
    forgotpasswordTextStyle: {
        color: '#333',
        textAlign: 'right',
        marginRight: 35,
    },
    registerTextStyle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 14,
        flexDirection: 'row',
        flexWrap: 'wrap',
        display: 'flex',
        justifyContent: 'center'
    },
    donhaveaccountTextStyle: {
        color: '#a6b0bb'
    },
    signupTextStyle: {
        color: '#1274bb',
        marginLeft: 5,
        fontWeight: 'bold'
    },
    socialLoginStyle: {
        color: '#333',
        marginTop: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 14,
        flexDirection: 'row',
        flexWrap: 'wrap',
        display: 'flex',
        justifyContent: 'center',
    },
    orloginwithTextStyle: {
        textAlign: 'center',
        marginTop: 20,
        color: '#a6b0bb',
    },
    socialButtonStyle: {
        width: 150,
        backgroundColor: '#FFFFFF',
        color: '#333',
        height: 40,
        alignItems: 'center',
        borderRadius: 30,
        marginLeft: 5,
        marginRight: 5,
        paddingLeft: 55,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    facebookIconStyle: {
        width: 25,
        height: 25,
        backgroundColor: "#3a5798",
        borderRadius: 25,
        paddingLeft: 9,
        paddingTop: 6.5,
        position: 'absolute',
        left: 8
    },
    googleIconStyle: {
        width: 25,
        height: 25,
        backgroundColor: "#d44435",
        borderRadius: 25,
        paddingLeft: 5,
        paddingTop: 6.5,
        position: 'absolute',
        left: 8
    },
    termsTextStyle: {
        textAlign: 'center',
        paddingTop: 20,
        color: '#a6b0bb'
    },
    errorTextStyle: {
        color: 'red',
        textAlign: 'center',
        fontSize: 14,
    },
});