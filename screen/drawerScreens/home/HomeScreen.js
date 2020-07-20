import React from 'react';
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
    Alert,
    Modal,
    TouchableHighlight
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Loader from '../../components/loader';
class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            modalVisible: true,
            firstValue: '',
            secondValue: '',
            thirdValue: '',
            fourthValue: '',
            loading: true,
            errortext: ''
        }
    }
    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ loading: false })
        }, 2000);
    }
    render() {
        // global.currentScreenIndex = 'HomeScreen';
        return (
            <View>
                <Loader loading={this.state.loading} />
                <ScrollView style={styles.mainSectionStyle} bounces='false' contentContainerStyle={{ alignItems: 'center' }}>
                    <View style={styles.centeredView}>
                        <Modal
                            animationType="none"
                            transparent={true}
                            visible={this.state.modalVisible}
                            onRequestClose={() => {
                                Alert.alert("Modal has been closed.");
                            }}
                        >
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text style={{
                                            color: '#6cab3c',
                                            fontSize: 20,
                                            fontWeight: 'bold',
                                        }}>Add PIN for future logins</Text>
                                    </View>
                                    <View style={{ marginVertical: 20 }}>
                                        <Text style={{ fontSize: 14, color: '#6cab3c', textAlign: 'center' }}>
                                            PIN complusory for offline access 4 digits only!
                                    </Text>
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
                                    <View style={[styles.SectionStyle, { justifyContent: 'flex-end', marginBottom: 40 }]}>
                                        <TouchableOpacity
                                            style={[styles.buttonStyle, { backgroundColor: 'lightgrey', marginRight: 20 }]}
                                            activeOpacity={0.5}
                                            onPress={() => {
                                                this.setModalVisible(!this.state.modalVisible);
                                            }}>
                                            <Text style={styles.buttonTextStyle}>Later</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={styles.buttonStyle}
                                            activeOpacity={0.5}
                                        >
                                            <Text style={styles.buttonTextStyle}>Add</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </Modal>
                    </View>
                </ScrollView>
            </View>
        )

    }
}
export default HomeScreen;
const styles = StyleSheet.create({
    mainSectionStyle: {
        borderTopRightRadius: 50,
        backgroundColor: '#f4f5f7',
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
    buttonStyle: {
        backgroundColor: '#6cab3c',
        color: '#333',
        height: 40,
        width: 100,
        borderRadius: 3,
        alignItems: 'center',
        marginVertical: 20,
    },
    inputStyle: {
        flex: 0.2,
        color: '#333',
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: 'white',
        marginLeft: 10,
        marginRight: 10
    },
    buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 16,
        fontWeight: 'bold'
    },
    selectSectionStyle: {
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 10,
        marginVertical: 10,
        marginTop: 60,
        borderRadius: 0,
        width: '80%',
        borderWidth: 1,
        borderColor: '#dfdfdf',
    },
    successTextStyle: {
        color: '#333',
        textAlign: 'center',
        fontSize: 18,
        padding: 30,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    modalView: {
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        margin: 20,
        marginTop: 80,
        width: '90%',
        backgroundColor: "#F4F5F7",
        paddingHorizontal: 25,
        paddingVertical: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    closeButton: {
        elevation: 2,
        width: 30,
        height: 30,
        backgroundColor: 'grey',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        // position: 'absolute',
        // top: 70
    },
    textStyle: {
        color: "black",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    modalIcon: {
        padding: 15,
        borderRadius: 100,
        marginHorizontal: '5%',
    },
});