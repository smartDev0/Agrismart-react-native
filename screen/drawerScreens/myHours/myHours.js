import React from 'react';

//Import all required component
import { ScrollView, StyleSheet, View, Text, TextInput, Image, TouchableOpacity, Switch } from 'react-native';
import Loader from '../../components/loader';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

class MyHours extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            isEnabled: false,
            days: [],
            today: ''
        }

    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ loading: false })
        }, 2000);
        this.setState({
            days: this.addDays(),
            today: new Date(),
        })
    }
    getRandomColor = () => {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    renderRow() {
        return (
            <>
                {this.state.days.map((data, i) =>
                    <View style={styles.daySectionStyle} key={i}>

                        {
                            this.state.today.toDateString() == new Date(Date.parse(data)).toDateString() ? (

                                <View style={[styles.sectionStyle, styles.shadowStyle, { borderLeftWidth: 4, borderColor: 'green' }]}>
                                    <View style={{
                                        justifyContent: 'space-between',
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexDirection: 'row',
                                    }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', color: 'green' }}>
                                            <Icon name="calendar-o" size={20} color="#6cab3c" />
                                            <Text style={{ fontSize: 16, color: 'green' }}> {data}</Text>
                                        </View>
                                        <View style={{ width: '50%' }}>
                                            <Text style={{ textAlign: 'right', color: 'green' }}>
                                                8
                                                </Text>
                                        </View>
                                    </View>
                                </View>
                            ) : (

                                    <View style={[styles.sectionStyle, styles.shadowStyle]}>
                                        <View style={{
                                            justifyContent: 'space-between',
                                            display: 'flex',
                                            alignItems: 'center',
                                            flexDirection: 'row',
                                        }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <Icon name="calendar-o" size={20} color="#6cab3c" />
                                                <Text style={{ fontSize: 16 }}> {data}</Text>
                                            </View>
                                            <View style={{ width: '50%' }}>
                                                <Text style={{ textAlign: 'right' }}>
                                                    8
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                )
                        }
                    </View>)
                }
            </>
        )
    }
    addDays = () => {
        var days = 15; // Days you want to subtract
        var today = new Date();
        var startDate = new Date(today.getTime() - (days * 24 * 60 * 60 * 1000));
        const date = new Date(startDate);
        let datesCollection = []

        for (var i = 1; i < 31; i++) {
            const newDate = new Date(date.getTime() + i * 1000 * 60 * 60 * 24);
            datesCollection.push(`${newDate.getFullYear()}/${newDate.getMonth() + 1}/${newDate.getDate()}`);
        }
        return datesCollection
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
                    <View style={styles.titleSectionStyle}>
                        <AntDesign name="clockcircleo" size={20} color="#6cab3c" />
                        <Text style={{ fontSize: 17, fontWeight: '500', marginLeft: 5 }}>
                            My Hours
                        </Text>
                    </View>
                    <View style={[styles.totalSectionStyle, styles.shadowStyle,]}>
                        <TouchableOpacity
                            activeOpacity={0.5}
                            onPress={() => this.props.navigation.navigate('ViewTimesheet')}
                        >
                            <View style={{ flex: 1, flexDirection: 'column' }}>
                                <Text style={[styles.titleStyle, { color: 'white', fontSize: 16 }]}>Total</Text>
                                <Text style={{ color: 'white', paddingTop: 5 }}>
                                    3h 09m
                        </Text>
                                {/* <View style={{ flexDirection: 'row', position: 'absolute', right: 0, alignItems: 'center', top: 8 }}>
                                <Text style={{ fontSize: 20, color: 'white' }}> 00 m 21</Text>
                            </View> */}
                            </View>
                        </TouchableOpacity>
                    </View>

                    {this.renderRow()}
                </View>

                {/* <View style={{ padding: 10 }}></View> */}
            </ScrollView>
        )
    }
}

export default MyHours;

const styles = StyleSheet.create({
    mainSectionStyle: {
        // borderTopRightRadius: 50,
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
        // height: 40,
        // marginVertical: 5,
        // alignItems: 'center',
        // justifyContent: 'space-between',
        // borderBottomColor: 'grey',
        // borderBottomWidth: 1,
        width: '100%',
    },
    sectionStyle: {
        backgroundColor: '#FFFFFF',
        padding: 10,
        marginVertical: 7,
        borderRadius: 7,
        width: '100%'
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
    totalSectionStyle: {
        backgroundColor: '#6cab3c',
        padding: 10,
        marginVertical: 7,
        borderRadius: 7,
        width: '100%'
    },
    titleSectionStyle: {
        flexDirection: 'row',
        width: '100%',
        marginVertical: 10,
        alignItems: 'center',
    },
});