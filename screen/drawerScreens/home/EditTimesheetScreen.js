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
import { Table, TableWrapper, Row, Rows, Cell, Col } from 'react-native-table-component';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Loader from '../../components/loader';
import DatePicker from 'react-native-datepicker';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/FontAwesome';
class EditTimesheetScreen extends React.Component {
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
            errortext: '',
            today: '',
            unpaidTime: '',
            totalHour: '',
            unit: '',
            startTime: '',
            endTime: '',
            timeSheetModalVisible: false,
            tableHead: ['Activity', 'Time', 'Hours', 'Action'],
            tableData: [
                ['Miking', '06:38~06:39', '0.0156', '1'],
            ]
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
    _alertIndex(index) {
        Alert.alert(`This is row ${index + 1}`);
    }

    showTimesheetModal = () => {
        this.setState({ timeSheetModalVisible: true });
    }
    goToEditPage = () => {
        this.setState({ timeSheetModalVisible: false });
        this.props.navigation.navigate('EditTimesheet')
    }
    render() {
        const state = this.state;
        const element = (data, index) => (
            <View style={{ display: 'flex', marginVertical: 2, flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => this._alertIndex(index)}>
                    <View style={styles.btn}>
                        {/* <Text style={styles.btnText}>Delete</Text> */}
                        <Icon name="remove" size={20} color="white" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.goToEditPage()}>
                    <View style={styles.btnEdit}>
                        {/* <Text style={styles.btnText}>Delete</Text> */}
                        <Icon name="edit" size={20} color="white" />
                    </View>
                </TouchableOpacity>
            </View>

        );
        return (
            <ScrollView style={styles.mainSectionStyle} bounces='false' contentContainerStyle={{ alignItems: 'center' }}>
                <Loader loading={this.state.loading} />
                <View style={styles.centeredView}>
                    <Modal
                        animationType="none"
                        transparent={true}
                        visible={this.state.timeSheetModalVisible}
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
                                    }}>TimeSheet History</Text>
                                </View>
                                <View style={styles.tableSectionStyle}>
                                    <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }} style={{}}>
                                        <Row data={state.tableHead} style={styles.head} textStyle={styles.text} />
                                        {
                                            state.tableData.map((rowData, index) => (
                                                <TableWrapper key={index} style={styles.row}>
                                                    {
                                                        rowData.map((cellData, cellIndex) => (
                                                            <Cell key={cellIndex} data={cellIndex === 3 ? element(cellData, index) : cellData} textStyle={styles.text} />
                                                        ))
                                                    }
                                                </TableWrapper>
                                            ))
                                        }
                                    </Table>
                                </View>
                                <View style={[styles.contactSectionStyle, { justifyContent: 'flex-end', marginBottom: 10 }]}>
                                    <TouchableOpacity
                                        style={styles.closebuttonStyle}
                                        activeOpacity={0.5}
                                        onPress={() => {
                                            this.setState({ timeSheetModalVisible: false });
                                        }}
                                    >
                                        <Text style={styles.buttonTextStyle}>Close</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Modal>
                </View>
                <View style={styles.contactSectionStyle}>
                    <TouchableOpacity
                        style={styles.viewbuttonStyle}
                        activeOpacity={0.5}
                        onPress={() => this.showTimesheetModal()}
                    >
                        <Text style={styles.buttonTextStyle}>View Timesheet History</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.titleSectionStyle}>
                    <Text style={styles.blackTitleTextStyle}>
                        Date
                    </Text>
                </View>
                <View style={styles.contactSectionStyle}>
                    <DatePicker
                        style={{ width: '100%', backgroundColor: '#FFFFFF' }}
                        date={this.state.today}
                        mode="date"
                        placeholder="Date"
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
                        onDateChange={(date) => { this.setState({ today: date }) }}
                    />
                </View>
                <View style={styles.titleSectionStyle}>
                    <Text style={styles.blackTitleTextStyle}>
                        Jobs
                    </Text>
                </View>
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
                        placeholder={{ label: 'Select Job', value: '' }}
                        style={{
                            ...pickerSelectStyles
                        }}
                    />
                </View>
                <View style={styles.titleSectionStyle}>
                    <Text style={styles.blackTitleTextStyle}>
                        Activity
                    </Text>
                </View>
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
                        placeholder={{ label: 'Select Activity', value: '' }}
                        style={{
                            ...pickerSelectStyles
                        }}
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
                <View style={styles.titleSectionStyle}>
                    <Text style={styles.blackTitleTextStyle}>
                        Start Time (24 hr format)
                    </Text>
                </View>
                <View style={styles.contactSectionStyle}>
                    <DatePicker
                        style={{ width: '100%', backgroundColor: '#FFFFFF', flex: 1 }}
                        date={this.state.startTime}
                        mode="time"
                        placeholder="startTime"
                        // format="MM/DD/YYYY"
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
                        onDateChange={(date) => { this.setState({ startTime: date }) }}
                    />
                </View>
                <View style={styles.titleSectionStyle}>
                    <Text style={styles.blackTitleTextStyle}>
                        end Time (24 hr format)
                    </Text>
                </View>
                <View style={styles.contactSectionStyle}>
                    <DatePicker
                        style={{ width: '100%', backgroundColor: '#FFFFFF', flex: 1 }}
                        date={this.state.endTime}
                        mode="time"
                        placeholder="endTime"
                        // format="MM/DD/YYYY"
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
                        onDateChange={(date) => { this.setState({ endTime: date }) }}
                    />

                </View>
                <View style={styles.titleSectionStyle}>
                    <Text style={styles.blackTitleTextStyle}>
                        Unpaid Time (minutes)
                    </Text>
                </View>
                <View style={[styles.contactSectionStyle]}>
                    <TextInput
                        value={this.state.unpaidTime}
                        onChangeText={(text) => this.setState({ unpaidTime: text })}
                        style={styles.inputStyle}
                        placeholder="Unpaid Time in Minutes"
                        placeholderTextColor="#a6b0bb"
                        keyboardType="default"
                        onSubmitEditing={Keyboard.dismiss}
                        blurOnSubmit={false}
                    />
                </View>
                <View style={styles.titleSectionStyle}>
                    <Text style={styles.blackTitleTextStyle}>
                        Total Hours
                    </Text>
                </View>
                <View style={[styles.contactSectionStyle]}>
                    <TextInput
                        value={this.state.totalHour}
                        onChangeText={(text) => this.setState({ totalHour: text })}
                        style={styles.inputStyle}
                        placeholder="Total Hours"
                        placeholderTextColor="#a6b0bb"
                        keyboardType="default"
                        onSubmitEditing={Keyboard.dismiss}
                        blurOnSubmit={false}
                    />
                </View>
                <View style={styles.titleSectionStyle}>
                    <Text style={styles.blackTitleTextStyle}>
                        Units
                    </Text>
                </View>
                <View style={[styles.contactSectionStyle]}>
                    <TextInput
                        value={this.state.unit}
                        onChangeText={(text) => this.setState({ unit: text })}
                        style={styles.inputStyle}
                        placeholder="Units"
                        placeholderTextColor="#a6b0bb"
                        keyboardType="default"
                        onSubmitEditing={Keyboard.dismiss}
                        blurOnSubmit={false}
                    />
                </View>
                <View style={styles.titleSectionStyle}>

                </View>
                <View style={styles.contactSectionStyle}>
                    <TouchableOpacity
                        style={styles.schedulebuttonStyle}
                        activeOpacity={0.5}
                        onPress={() => this.props.navigation.navigate("MyProfile")}>
                        <Text style={styles.buttonTextStyle}>Update</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.titleSectionStyle}>
                    <Text style={styles.blackTitleTextStyle}>
                    </Text>
                </View>
            </ScrollView>

        )

    }
}
export default EditTimesheetScreen;
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
    tableSectionStyle: { paddingTop: 20, paddingBottom: 20 },
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#6cab3c' },
    wrapper: { flexDirection: 'row' },
    title: { flex: 1, backgroundColor: '#f6f8fa' },
    row: { flexDirection: 'row', backgroundColor: 'white', justifyContent: 'center', },
    btn: { backgroundColor: 'red', borderRadius: 2, padding: 5, width: 30, marginHorizontal: 5 },
    btnEdit: { backgroundColor: 'green', borderRadius: 2, padding: 5, width: 30, marginHorizontal: 5 },
    btnText: { textAlign: 'center', color: '#fff', padding: 3 },
    text: { textAlign: 'center' },
    mainSectionStyle: {
        borderTopRightRadius: 50,
        backgroundColor: '#f4f5f7',
        paddingVertical: 20,
        paddingHorizontal: 15
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
    viewbuttonStyle: {
        backgroundColor: '#fb9a2e',
        color: '#333',
        height: 45,
        width: '100%',
        borderRadius: 3,
        alignItems: 'center',
    },
    closebuttonStyle: {
        backgroundColor: 'grey',
        color: '#333',
        height: 45,
        width: '100%',
        borderRadius: 3,
        alignItems: 'center',
    },
    timerStartButtonStyle: {
        backgroundColor: '#4db8ff',
        color: '#333',
        height: 40,
        width: '100%',
        borderRadius: 3,
        alignItems: 'center',
    },
    timerStopButtonStyle: {
        backgroundColor: '#ff471a',
        color: '#333',
        height: 40,
        width: '100%',
        borderRadius: 3,
        alignItems: 'center',
    },
    titleSectionStyle: {
        flexDirection: 'row',
        width: '100%',
        marginVertical: 5,
        alignItems: 'center',
    },
    sectionTextareaStyle: {
        backgroundColor: '#FFFFFF',
        padding: 10,
        marginVertical: 1,
        borderRadius: 0,
        width: '100%',
        borderWidth: 1,
        borderColor: '#dfdfdf'
    },
    textareaStyle: {
        height: 120,
        textAlignVertical: 'top',
    },
    contactSectionStyle: {
        flexDirection: 'row',
        height: 40,
        // marginVertical: 10,
        alignItems: 'center',
    },
    schedulebuttonStyle: {
        backgroundColor: '#6cab3c',
        color: '#333',
        height: 45,
        width: '100%',
        borderRadius: 3,
        alignItems: 'center',
        // marginBottom: 40
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
    inputPinStyle: {
        flex: 0.2,
        color: '#333',
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: 'white',
        marginLeft: 10,
        marginRight: 10
    }, inputStyle: {
        flex: 1,
        color: '#333',
        height: 40,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: '#dfdfdf',
        // borderRadius: 8
    },
    buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 11,
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
        borderRadius: 10,
        // borderBottomLeftRadius: 25,
        // borderBottomRightRadius: 25,
        margin: 20,
        marginTop: 80,
        width: '90%',
        backgroundColor: "#F4F5F7",
        paddingHorizontal: 10,
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