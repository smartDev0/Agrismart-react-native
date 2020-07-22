//Import React
import React from 'react';

//Import all required component
import { ScrollView, StyleSheet, View, Text, TextInput, Image, TouchableOpacity, Switch } from 'react-native';
import Loader from '../../components/loader';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

class Rosters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            isEnabled: false,
            days: []
        }

    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ loading: false })
        }, 2000);
        this.setState({
            days: this.addDays()
        })
    }
    toggleChange = () => {
        this.setState({ isEnabled: !this.state.isEnabled })
    }
    getRandomColor = () => {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    addDays = () => {
        var days = 15; // Days you want to subtract
        var today = new Date();
        var startDate = new Date(today.getTime() - (days * 24 * 60 * 60 * 1000));
        const date = new Date(startDate);
        let datesCollection = []

        for (var i = 1; i < 31; i++) {
            const newDate = new Date(date.getTime() + i * 1000 * 60 * 60 * 24);
            datesCollection.push(`${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`);
        }
        return datesCollection
    }
    render() {

        return (
            <ScrollView style={styles.mainSectionStyle} bounces='false' contentContainerStyle={{ alignItems: 'center' }}>
                <Loader loading={this.state.loading} />
                <View style={styles.contactSectionStyle}>
                    <View style={{ flex: 0.4 }}>
                        <RNPickerSelect
                            items={[
                                { label: 'All Locations', value: 'allLocations' },
                                { label: 'No Locations', value: 'noLocations' },
                                { label: 'Bulls', value: 'bulls' },
                                { label: 'Cambridge', value: 'cambride' },
                                { label: 'Hamilton', value: 'hamilton' },
                            ]}
                            Icon={() => {
                                return <Ionicons name="ios-arrow-down" size={15} />
                            }}
                            style={{
                                inputAndroid: {height: 40, paddingLeft: 10, borderWidth: 1, borderColor: '#dfdfdf', backgroundColor: '#FFFFFF',borderRadius: 5 },
                                inputIOS: {height: 40, paddingLeft: 10, borderWidth: 1, borderColor: '#dfdfdf', backgroundColor: '#FFFFFF' },
                                iconContainer: {top: 12, right: 10 }
                            }}
                            placeholder={{ label: 'Type', value: '' }}
                            onValueChange={(value) => console.log(value)}
                        />
                    </View>
                    <View style={{ flex: 0.02 }}></View>
                    <View style={{ flex: 0.3 }}>
                        <RNPickerSelect
                            items={[
                                { label: 'January', value: 'January' },
                                { label: 'February', value: 'February' },
                                { label: 'March', value: 'March' },
                                { label: 'April', value: 'April' },
                                { label: 'May', value: 'May' },
                                { label: 'June', value: 'June' },
                                { label: 'July', value: 'July' },
                                { label: 'August', value: 'August' },
                                { label: 'September', value: 'September' },
                                { label: 'October', value: 'October' },
                                { label: 'November', value: 'November' },
                                { label: 'December', value: 'December' },
                            ]}
                            Icon={() => {
                                return <Ionicons name="ios-arrow-down" size={15} />
                            }}
                            style={{
                                inputAndroid: { height: 40, paddingLeft: 10, borderWidth: 1, borderColor: '#dfdfdf', backgroundColor: '#FFFFFF' },
                                inputIOS: { height: 40, paddingLeft: 10, borderWidth: 1, borderColor: '#dfdfdf', backgroundColor: '#FFFFFF' },
                                iconContainer: { top: 12, right: 10 }
                            }}
                            placeholder={{ label: 'Month', value: '' }}
                            onValueChange={(value) => console.log(value)}
                        />
                    </View>
                    <View style={{ flex: 0.02 }}></View>
                    <View style={{ flex: 0.26, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <View>
                            <Text style={{}}>
                                RTO
                            </Text>
                        </View>
                        <View>
                            <Switch
                                trackColor={{ false: "#767577", true: "#6cab3c" }}
                                thumbColor={this.state.isEnabled ? "#6cab3c" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={() => this.toggleChange()}
                                value={this.state.isEnabled}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.titleSectionStyle}>
                    <MaterialCommunityIcons name="flask-outline" size={20} color="#6cab3c" />
                    <Text style={{ fontSize: 17, fontWeight: '500', marginLeft: 5 }}>
                        Rosters
                    </Text>
                </View>

                {
                    this.state.days.map((data, i) =>
                        <View style={[styles.sectionStyle, styles.shadowStyle, { borderLeftWidth: 4, borderColor: this.getRandomColor() }]}>
                            <View style={{ flex: 1, flexDirection: 'column' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Icon name="calendar-o" size={20} color="#6cab3c" />
                                    <Text style={{ fontSize: 16 }}> {data}</Text>
                                </View>
                            </View>
                        </View>
                    )
                }
                <View style={{ padding: 10 }}></View>
            </ScrollView>
        )
    }
}

export default Rosters;

const styles = StyleSheet.create({
    mainSectionStyle: {
        backgroundColor: '#f4f5f7',
        paddingVertical: 20,
        paddingHorizontal: 15,
        height: '100%'
    },
    contactSectionStyle: {
        flexDirection: 'row',
        height: 40,
        marginVertical: 5,
        alignItems: 'center',
    },
    daySectionStyle: {
        flexDirection: 'row',
        height: 40,
        marginVertical: 5,
        alignItems: 'center',
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        width: '100%',
    },
    sectionStyle: {
        backgroundColor: '#FFFFFF',
        padding: 10,
        marginVertical: 7,
        borderRadius: 7,
        width: '100%'
    },
    titleStyle: {
        marginRight: 80,
        fontSize: 17,
    },
    buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 7,
        fontSize: 16,
    },
    titleSectionStyle: {
        flexDirection: 'row',
        width: '100%',
        marginVertical: 10,
        alignItems: 'center',
    },
    shadowStyle: {
        shadowColor: "#000",
        shadowOffset: {
                            width: 1,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
});