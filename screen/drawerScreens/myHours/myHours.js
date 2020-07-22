import React from 'react';

//Import all required component
import { ScrollView, StyleSheet, View, Text, TextInput, Image, TouchableOpacity, Switch } from 'react-native';
import Loader from '../../components/loader';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
    renderRow() {
        return (
            <>
                {this.state.days.map((data, i) =>
                    <View style={styles.daySectionStyle} key={i}>

                        {
                            this.state.today.toDateString() == new Date(Date.parse(data)).toDateString() ? (
                                <View style={{
                                    justifyContent: 'space-between',
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                }}>
                                    <View style={{ width: '50%' }}>
                                        <Text style={{ textAlign: 'left', color: 'green' }}>
                                            {/* {new Date(data)} */}
                                            {data}
                                        </Text>
                                    </View>
                                    <View style={{ width: '50%' }}>
                                        <Text style={{ textAlign: 'right', color: 'green' }}>
                                            8
                                        </Text>
                                    </View>
                                </View>
                            ) : (
                                    <View style={{
                                        justifyContent: 'space-between',
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexDirection: 'row',
                                    }}>
                                        <View style={{ width: '50%' }}>
                                            <Text style={{ textAlign: 'left' }}>
                                                {/* {new Date(data)} */}
                                                {data}
                                            </Text>
                                        </View>
                                        <View style={{ width: '50%' }}>
                                            <Text style={{ textAlign: 'right' }}>
                                                8
                                        </Text>
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
                {this.renderRow()}
                <View style={{ padding: 10 }}></View>
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
        height: 40,
        marginVertical: 5,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        width: '100%',
    }
});