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
import Loader from '../components/loader';

class PinScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstValue: '',
            secondValue: '',
            thirdValue: '',
            fourthValue: '',
            loading: true,
            errortext: ''
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ loading: false })
        }, 2000);
    }
    render() {
        return (
            <View style={styles.mainBody}>
                <Loader loading={this.state.loading} />
                <ScrollView keyboardShouldPersistTaps="handled" bounces="false">
                    <View>
                        <View
                            style={{
                                width: '100%',
                                height: 400,
                                resizeMode: 'cover',
                                position: 'absolute',
                                top: 0,
                                backgroundColor: 'white',
                            }}></View>
                        <View style={{ alignItems: 'center' }}>
                            <Image
                                source={require('../../image/Agrismart-Logo.png')}
                                style={{
                                    width: 250,
                                    height: 180,
                                    resizeMode: 'contain',
                                    marginTop: 30,
                                }}
                            />
                        </View>
                        <KeyboardAvoidingView enabled style={styles.formSectionStyle}>
                            <View style={{
                                position: 'absolute',
                                right: 20,
                                top: 20
                            }}>
                                <Icon name="close" size={20} color="#6cab3c"
                                    onPress={() => this.props.navigation.navigate('LoginScreen')}
                                />
                            </View>
                            <View style={styles.SectionStyle}>
                                <Text style={styles.titleTextStyle}>Please enter your PIN</Text>
                            </View>
                            <View style={styles.SectionStyle}>
                                <TextInput
                                    style={styles.inputStyle}
                                    // onChangeText={userEmail => this.setState({ userEmail })}
                                    placeholderTextColor="#a6b0bb"
                                    autoCapitalize="none"
                                    keyboardType="email-address"
                                    returnKeyType="next"
                                    keyboardType='numeric'
                                    maxLength={1}
                                    blurOnSubmit={false}
                                    secureTextEntry={true}
                                    onChangeText={
                                        firstValue => {
                                            this.setState({ firstValue })
                                            if (firstValue) this.refs.input_2.focus(); //assumption is TextInput ref is input_2
                                        }}
                                    numberOfLines={1}
                                    ref="input_1"
                                    value={this.state.firstValue}
                                /><TextInput
                                    style={styles.inputStyle}
                                    // onChangeText={userEmail => this.setState({ userEmail })}
                                    placeholderTextColor="#a6b0bb"
                                    autoCapitalize="none"
                                    keyboardType="email-address"
                                    returnKeyType="next"
                                    keyboardType='numeric'
                                    blurOnSubmit={false}
                                    maxLength={1}
                                    secureTextEntry={true}
                                    ref="input_2"
                                    value={this.state.secondValue}
                                    onChangeText={
                                        secondValue => {
                                            this.setState({ secondValue })
                                            if (secondValue) this.refs.input_3.focus();
                                            else this.refs.input_1.focus();//assumption is TextInput ref is input_2
                                        }}
                                    numberOfLines={1}
                                />
                                <TextInput
                                    style={styles.inputStyle}
                                    // onChangeText={userEmail => this.setState({ userEmail })}
                                    placeholderTextColor="#a6b0bb"
                                    autoCapitalize="none"
                                    keyboardType="email-address"
                                    returnKeyType="next"
                                    keyboardType='numeric'
                                    blurOnSubmit={false}
                                    maxLength={1}
                                    secureTextEntry={true}
                                    ref="input_3"
                                    value={this.state.thirdValue}
                                    onChangeText={
                                        thirdValue => {
                                            this.setState({ thirdValue })
                                            if (thirdValue) this.refs.input_4.focus();
                                            else this.refs.input_2.focus();//assumption is TextInput ref is input_2
                                        }}
                                    numberOfLines={1}
                                />
                                <TextInput
                                    style={styles.inputStyle}
                                    // onChangeText={userEmail => this.setState({ userEmail })}
                                    placeholderTextColor="#a6b0bb"
                                    autoCapitalize="none"
                                    keyboardType="email-address"
                                    returnKeyType="next"
                                    keyboardType='numeric'
                                    blurOnSubmit={false}
                                    maxLength={1}
                                    secureTextEntry={true}
                                    ref="input_4"
                                    value={this.state.fourthValue}
                                    onChangeText={
                                        fourthValue => {
                                            this.setState({ fourthValue })
                                            if (fourthValue) this.refs.input_4.focus();
                                            else this.refs.input_3.focus();//assumption is TextInput ref is input_2
                                        }}
                                    numberOfLines={1}
                                />
                            </View>
                            <View style={styles.signIn}>
                                <TouchableOpacity
                                    style={styles.signInButtonStyle}
                                    activeOpacity={0.5}
                                >
                                    <Text style={styles.signInbuttonTextStyle}>Verify</Text>
                                </TouchableOpacity>
                            </View>
                        </KeyboardAvoidingView>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default PinScreen;

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
        marginTop: 30,
        marginLeft: 35,
        marginRight: 35,
        margin: 5,
        justifyContent: 'center'
    },
    underlineStyle: {
        flexDirection: 'row',
        marginLeft: 35,
        marginRight: 35,
        marginTop: -20,
    },
    titleTextStyle: {
        color: '#6cab3c',
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
    signInbuttonTextStyle: {
        color: 'white',
        // paddingVertical: 10,
        padding: 10,
        fontSize: 18,
    },
    inputStyle: {
        flex: 0.1,
        color: '#333',
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: 'white',
        marginLeft: 10,
        marginRight: 10

    },
    forgotpasswordTextStyle: {
        color: '#6cab3c',
        textAlign: 'right',
        marginRight: 35,
        marginTop: 20
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
    signIn: {
        marginTop: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
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
    signInButtonStyle: {
        width: 250,
        backgroundColor: '#6cab3c',
        color: 'white',
        height: 48,
        alignItems: 'center',
        borderRadius: 15,
        marginLeft: 5,
        marginRight: 5,
        display: 'flex',
        justifyContent: 'center',
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
        backgroundColor: '#6cab3c',
        borderRadius: 25,
        // paddingLeft: 5,
        // paddingTop: 6.5,
        position: 'absolute',
        left: 13,
        display: 'flex',
        justifyContent: "center",
        alignItems: "center"
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
