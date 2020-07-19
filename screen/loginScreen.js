import React, { useState } from 'react';
import {
    StyleSheet,
    TextInput,
    View,
    Text,
    ScrollView,
    Image,
    Keyboard,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
class LoginScreen extends React.Component {
    render() {
        return (
            <View style={styles.mainBody}>
                <ScrollView keyboardShouldPersistTaps="handled" bounces="false">
                    <View>
                        <View
                            style={{
                                width: '100%',
                                height: 500,
                                resizeMode: 'cover',
                                position: 'absolute',
                                top: 0,
                                backgroundColor: 'white',
                            }}></View>
                        <View style={{ alignItems: 'center' }}>
                            <Image
                                source={require('../image/Agrismart-Logo.png')}
                                style={{
                                    width: 250,
                                    height: 180,
                                    resizeMode: 'contain',
                                    marginTop: 60,
                                }}
                            />
                        </View>
                        <KeyboardAvoidingView enabled style={styles.formSectionStyle}>
                            <View style={styles.SectionStyle}>
                                <Text style={styles.titleTextStyle}>SIGN IN</Text>
                            </View>
                            <View style={styles.underlineStyle}>
                                <Text>───</Text>
                            </View>
                            <View style={styles.SectionStyle}>
                                <View style={styles.embediconStyle}>
                                    <Icon name="user" size={20} color="#a6b0bb" />
                                </View>
                                <TextInput
                                    style={styles.inputStyle}
                                    // onChangeText={userEmail => this.setState({ userEmail })}
                                    placeholder="User Name"
                                    placeholderTextColor="#a6b0bb"
                                    autoCapitalize="none"
                                    keyboardType="email-address"
                                    returnKeyType="next"
                                    blurOnSubmit={false}
                                />
                            </View>
                            <View style={styles.SectionStyle}>
                                <View style={styles.embediconStyle}>
                                    <Icon name="lock" size={20} color="#a6b0bb" />
                                </View>
                                <TextInput
                                    style={styles.inputStyle}
                                    // onChangeText={userPassword => this.setState({ userPassword })}
                                    placeholder="Password"
                                    placeholderTextColor="#a6b0bb"
                                    keyboardType="default"
                                    blurOnSubmit={false}
                                    secureTextEntry={true}
                                />
                            </View>
                            {/* {this.state.errortext != '' ? (
                                <Text style={styles.errorTextStyle}> {this.state.errortext} </Text>
                            ) : null} */}
                            <Text style={styles.forgotpasswordTextStyle}>
                                Forgot Password?
              </Text>

                            <View style={styles.registerTextStyle}>
                                <Text style={styles.donhaveaccountTextStyle}>
                                    Don't have an account ?
                </Text>
                                <Text
                                    style={styles.signupTextStyle}
                                // onPress={() => this.props.navigation.navigate('RegisterScreen')}
                                >
                                    Sign Up!
                </Text>
                            </View>
                            <Text style={styles.orloginwithTextStyle}>
                                ──────── Or Login With ────────
              </Text>
                            <View style={styles.socialLoginStyle}>
                                <TouchableOpacity
                                    style={styles.socialButtonStyle}
                                    activeOpacity={0.5}
                                    onPress={this.handleFacebookLogin}>
                                    <View style={styles.facebookIconStyle}>
                                        <Icon name="facebook" size={12} color="#FFFFFF" />
                                    </View>
                                    <Text style={styles.socialbuttonTextStyle}>Facebook</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.socialButtonStyle}
                                    activeOpacity={0.5}
                                    onPress={this.handleGoogleSubmitPress}>
                                    <View style={styles.googleIconStyle}>
                                        <Icon name="google-plus" size={12} color="#FFFFFF" />
                                    </View>
                                    <Text style={styles.socialbuttonTextStyle}>Google +</Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.termsTextStyle}>Terms & Conditions</Text>
                        </KeyboardAvoidingView>
                    </View>
                </ScrollView>
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
        flexDirection: 'column',
    },
    formSectionStyle: {
        borderTopRightRadius: 50,
        backgroundColor: '#F4F5F7',
        marginTop: 20,
        marginBottom: 20,
        justifyContent: 'center',
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
        marginTop: -20,
    },
    titleTextStyle: {
        color: '#1274bb',
        fontSize: 20,
        fontWeight: 'bold',
    },
    embediconStyle: {
        backgroundColor: '#FFFFFF',
        paddingTop: 10,
        paddingLeft: 15,
        paddingRight: 8,
        borderWidth: 1,
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        borderColor: 'white',
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
        fontWeight: 'bold',
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
        justifyContent: 'center',
    },
    donhaveaccountTextStyle: {
        color: '#a6b0bb',
    },
    signupTextStyle: {
        color: '#1274bb',
        marginLeft: 5,
        fontWeight: 'bold',
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
        backgroundColor: '#3a5798',
        borderRadius: 25,
        paddingLeft: 9,
        paddingTop: 6.5,
        position: 'absolute',
        left: 8,
    },
    googleIconStyle: {
        width: 25,
        height: 25,
        backgroundColor: '#d44435',
        borderRadius: 25,
        paddingLeft: 5,
        paddingTop: 6.5,
        position: 'absolute',
        left: 8,
    },
    termsTextStyle: {
        textAlign: 'center',
        paddingTop: 20,
        color: '#a6b0bb',
    },
    errorTextStyle: {
        color: 'red',
        textAlign: 'center',
        fontSize: 14,
    },
});
