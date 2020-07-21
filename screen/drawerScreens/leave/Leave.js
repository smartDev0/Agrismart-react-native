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
import DatePicker from 'react-native-datepicker';
import RNPickerSelect from 'react-native-picker-select';
import DateTimePicker from '@react-native-community/datetimepicker';
const d = Dimensions.get("window");
const isX = Platform.OS === "ios" && (d.height > 800 || d.width > 800) ? true : false;


class Leave extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            startDate: '',
            endDate: '',
            comments: ''
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
                <View style={styles.contactSectionStyle}>
                    <RNPickerSelect
                        onValueChange={(value) => console.log(value)}
                        items={[
                            { label: 'Football', value: 'football' },
                            { label: 'Baseball', value: 'baseball' },
                            { label: 'Hockey', value: 'hockey' },
                        ]}
                        Icon={() => {
                            return <Ionicons name="ios-arrow-down" size={15} />
                        }}
                        placeholder={{ label: 'Type', value: '' }}
                        style={{
                            ...pickerSelectStyles
                        }}
                    />
                </View>
                <View style={styles.SectionStyle}>
                    <DatePicker
                        style={{ width: '100%', backgroundColor: '#FFFFFF' }}
                        date={this.state.startDate}
                        mode="date"
                        placeholder="Start Date"
                        format="MM/DD/YYYY"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                right: 0,
                                top: 4,
                            },
                            dateInput: {
                                borderColor: '#dfdfdf'
                            }
                        }}
                        onDateChange={(date) => { this.setState({ startDate: date }) }}
                    />
                </View>
                <View style={styles.SectionStyle}>
                    <DatePicker
                        style={{ width: '100%', backgroundColor: '#FFFFFF' }}
                        date={this.state.endDate}
                        mode="date"
                        placeholder="End Date"
                        format="MM/DD/YYYY"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                right: 0,
                                top: 4,
                            },
                            dateInput: {
                                borderColor: '#dfdfdf'
                            }
                        }}
                        onDateChange={(date) => { this.setState({ endDate: date }) }}
                    />
                </View>
                <View style={styles.titleSectionStyle}>
                    <Text style={styles.blackTitleTextStyle}>
                        Comments
                    </Text>
                </View>
                <View style={styles.sectionTextareaStyle}>
                    <TextInput
                        value={this.state.comments}
                        onChange={(text) => this.setState({ comments: text })}
                        style={styles.textareaStyle}
                        multiline={true}
                        placeholder="Write comments."
                        placeholderTextColor="#a6b0bb"
                        keyboardType="default"
                        blurOnSubmit={false}
                    />
                </View>
                <View style={styles.SectionStyle}>
                    <TouchableOpacity
                        style={styles.schedulebuttonStyle}
                        activeOpacity={0.5}
                        onPress={() => this.props.navigation.navigate("MyProfile")}>
                        <Text style={styles.buttonTextStyle}>Apply Now</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

export default Leave;
const pickerSelectStyles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        borderWidth: 1, borderColor: '#dfdfdf',
        backgroundColor: '#FFFFFF',
    },
    headlessAndroidContainer: {
        backgroundColor: '#FFFFFF',
        flex: 1
    },
    iconContainer: { top: 12, right: 10 },
    inputAndroid: { height: 40, flex: 1, paddingLeft: 10, borderWidth: 1, borderColor: '#dfdfdf', backgroundColor: '#FFFFFF' },
    inputIOS: { height: 40, paddingLeft: 10, borderWidth: 1, borderColor: '#dfdfdf', backgroundColor: '#FFFFFF' },

});
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
    sectionTextareaStyle: {
        backgroundColor: '#FFFFFF',
        padding: 10,
        marginVertical: 10,
        borderRadius: 0,
        width: '100%',
        borderWidth: 1,
        borderColor: '#dfdfdf'
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
    textareaStyle: {
        height: 120,
        textAlignVertical: 'top',

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