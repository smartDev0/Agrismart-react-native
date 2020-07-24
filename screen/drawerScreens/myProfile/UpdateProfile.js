//Import React
import React from 'react';

//Import all required component
import {
    Dimensions,
    StyleSheet,
    TextInput,
    View,
    Text,
    ScrollView,
    Image,
    Keyboard,
    TouchableOpacity,
    KeyboardAvoidingView,
    Button,
    Alert,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Divider } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import Loader from '../../components/loader';

const d = Dimensions.get("window");
const isX = Platform.OS === "ios" && (d.height > 800 || d.width > 800) ? true : false;


class UpdateProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            pinValue: ''
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ loading: false })
        }, 2000);
    }

    render() {
        return (
            <ScrollView style={styles.mainSectionStyle} bounces='false' contentContainerStyle={{ alignItems: 'center' }}>
                <Loader loading={this.state.loading} />
                <View style={{
                    backgroundColor: 'white', paddingVertical: 20,
                    paddingHorizontal: 15,
                    marginBottom: 40,
                    width: '100%',
                    borderTopColor: '#6cab3c',
                    borderTopWidth: 5,
                    borderRadius: 4,
                    borderColor: '#f4f5f7',
                    borderWidth: 1
                }}>
                    <View style={[styles.SectionStyle, { marginTop: 20 }]}>
                        <TextInput
                            value={this.state.firstName}
                            onChangeText={(text) => this.setState({ firstName: text })}
                            style={styles.inputStyle}
                            placeholder="First Name"
                            placeholderTextColor="#a6b0bb"
                            keyboardType="default"
                            onSubmitEditing={Keyboard.dismiss}
                            blurOnSubmit={false}
                        />
                    </View>
                    <View style={styles.SectionStyle}>
                        <TextInput
                            value={this.state.lastName}
                            onChangeText={(text) => this.setState({ lastName: text })}
                            style={styles.inputStyle}
                            placeholder="Last Name"
                            placeholderTextColor="#a6b0bb"
                            keyboardType="default"
                            onSubmitEditing={Keyboard.dismiss}
                            blurOnSubmit={false}
                        />
                    </View>
                    <View style={[styles.SectionStyle, { marginTop: 20 }]}>
                        <TextInput
                            value={this.state.email}
                            onChangeText={(text) => this.setState({ email: text })}
                            style={styles.inputStyle}
                            placeholder="Email"
                            placeholderTextColor="#a6b0bb"
                            keyboardType="default"
                            onSubmitEditing={Keyboard.dismiss}
                            blurOnSubmit={false}
                        />
                    </View>
                    <View style={styles.SectionStyle}>
                        <TextInput
                            value={this.state.password}
                            onChangeText={(text) => this.setState({ password: text })}
                            style={styles.inputStyle}
                            placeholder="Password"
                            placeholderTextColor="#a6b0bb"
                            keyboardType="default"
                            onSubmitEditing={Keyboard.dismiss}
                            blurOnSubmit={false}
                            secureTextEntry={true}
                        />
                    </View>
                    <View style={styles.SectionStyle}>
                        <TextInput
                            value={this.state.pinValue}
                            onChangeText={(text) => this.setState({ pinValue: text })}
                            style={styles.inputStyle}
                            placeholder="Pin"
                            placeholderTextColor="#a6b0bb"
                            keyboardType="default"
                            onSubmitEditing={Keyboard.dismiss}
                            blurOnSubmit={false}
                            secureTextEntry={true}
                        />
                    </View>
                    <View style={styles.SectionStyle}>
                        <TouchableOpacity
                            style={styles.schedulebuttonStyle}
                            activeOpacity={0.5}
                            onPress={() => this.props.navigation.navigate("MyProfile")}>
                            <Text style={styles.buttonTextStyle}>Update</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        )
    }
}

export default UpdateProfile;

const styles = StyleSheet.create({
    mainSectionStyle: {
        borderTopRightRadius: 50,
        backgroundColor: '#f4f5f7',
        paddingVertical: 20,
        paddingHorizontal: 15
    },
    SectionStyle: {
        flexDirection: 'row',
        width: '100%',
        height: 40,
        marginVertical: 10,
        alignItems: 'center',
    },
    collapseSectionStyle: {
        flexDirection: 'row',
        width: '100%',
        marginVertical: 10,
        // paddingHorizontal: 10,
        alignItems: 'center',
        // backgroundColor: '#FFFFFF',
        borderRadius: 5
    },
    RadioSectionStyle: {
        flexDirection: 'row',
        width: '100%',
        marginVertical: 10,
        alignItems: 'center',
    },
    schedulebuttonStyle: {
        backgroundColor: '#6cab3c',
        color: '#333',
        height: 40,
        width: '100%',
        borderRadius: 3,
        alignItems: 'center',
    },
    titleSectionStyle: {
        flexDirection: 'row',
        width: '100%',
        marginVertical: 10,
        alignItems: 'center',
    },
    contactSectionStyle: {
        flexDirection: 'row',
        height: 40,
        marginVertical: 10,
        alignItems: 'center',
    },
    selectSectionStyle: {
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 15,
        marginVertical: 10,
        borderRadius: 0,
        width: '100%',
        borderWidth: 1,
        borderColor: '#dfdfdf'
    },
    AutocompleteSectionStyle: {
        flexDirection: 'row',
        marginVertical: 10,
        alignItems: 'center',
        zIndex: 1000
    },
    inputStyle: {
        flex: 1,
        color: '#333',
        height: 40,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: '#dfdfdf',
        borderRadius: 8
    },
    titleTextStyle: {
        color: "#1475bc",
        fontSize: 17,
    },
    blackTitleTextStyle: {
        color: "#333",
        fontSize: 17,
    },
    plusIconStyle: {
        position: 'absolute',
        left: 70,
        top: 0
    },
    otherplusIconStyle: {
        position: 'absolute',
        left: 180,
        top: 0
    },
    contactrightinputStyle: {
        color: '#333',
        height: 40,
        backgroundColor: '#FFFFFF',
        paddingLeft: 15,
        marginLeft: 10,
        borderWidth: 1,
        borderColor: '#dfdfdf',
        flex: 1,
    },
    buttonStyle: {
        backgroundColor: '#fb9a2e',
        color: '#333',
        height: 40,
        width: 100,
        borderRadius: 3,
        alignItems: 'center',
        marginVertical: 20,
    },
    uploadbuttonStyle: {
        backgroundColor: '#fb9a2e',
        color: '#333',
        height: 40,
        width: 200,
        borderRadius: 3,
        alignItems: 'center',
    },
    buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 16,
        fontWeight: 'bold'
    },
    successTextStyle: {
        color: '#333',
        textAlign: 'center',
        fontSize: 18,
        padding: 30,
    },
    successbuttonStyle: {
        backgroundColor: '#fb9a2e',
        color: '#FFFFFF',
        height: 40,
        alignItems: 'center',
        borderRadius: 30,
        marginVertical: 20,
    },
    arrowIcon: {
        position: 'absolute',
        right: 13,
        top: 15,
        zIndex: 1002
    }
});