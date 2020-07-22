/* This is an Login Registration example from https://aboutreact.com/ */
/* https://aboutreact.com/react-native-login-and-signup/ */

//Import React
import React from 'react';

//Import all required component
import { ScrollView, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

class ViewTimesheetScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sdoctor: ''
        }
    }

    render() {
        return (
            <ScrollView style={styles.mainSectionStyle} bounces='false' contentContainerStyle={{ alignItems: 'center' }}>
                <View style={[styles.sectionStyle, styles.shadowStyle]}>
                    <TouchableOpacity

                        activeOpacity={0.8}
                        onPress={() => this.props.navigation.navigate('EditTimesheet')}
                    >
                        <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', padding: 10, backgroundColor: '#FFFFFF' }}>
                            <View style={{ flex: 1, paddingTop: 5, marginLeft: 10 }}>
                                <View style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <View style={{ flexDirection: 'row', marginRight: 70, alignItems: 'center' }}>
                                        <Feather name="activity" size={20} color="#6cab3c" />
                                        <Text style={[styles.titleStyle, { color: "#6cab3c", marginLeft: 10 }]}>Miking</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', marginVertical: 5 }}>
                                        <Icon name="calendar-o" color="#6cab3c" size={20} />
                                        <Text style={{ color: '#333', flex: 1, marginLeft: 10, fontSize: 12 }}>
                                            <Text style={styles.boldblackStyle}>Start Time :06:38 &nbsp;</Text>
                                            <Text style={styles.boldblackStyle}>End Time :06:40</Text>
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center' }}>
                                        <AntDesign name="clockcircleo" color="#6cab3c" size={20} />
                                        <Text style={{ color: '#333', flex: 1, marginLeft: 10, fontSize: 12 }}>Hours - <Text style={styles.boldblackStyle}>0.45</Text></Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{
                                position: 'absolute',
                                right: 10,
                                top: 10,
                                zIndex: 10,
                                paddingHorizontal: 15,
                                paddingVertical: 7,
                                backgroundColor: '#ffe7e7',
                                borderRadius: 100
                            }}>
                                <Text style={{ color: "#ff4949", fontWeight: 'bold' }}>Delete</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={[styles.sectionStyle, styles.shadowStyle]}>
                    <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', padding: 10, backgroundColor: '#FFFFFF' }}>
                        <View style={{ flex: 1, paddingTop: 5, marginLeft: 10 }}>
                            <View style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <View style={{ flexDirection: 'row', marginRight: 70, alignItems: 'center' }}>
                                    <Feather name="activity" size={20} color="#6cab3c" />
                                    <Text style={[styles.titleStyle, { color: "#6cab3c", marginLeft: 10 }]}>Miking</Text>
                                </View>

                                <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', marginVertical: 5 }}>
                                    <Icon name="calendar-o" color="#6cab3c" size={20} />
                                    <Text style={{ color: '#333', flex: 1, marginLeft: 10, fontSize: 12 }}>
                                        <Text style={styles.boldblackStyle}>Start Time :06:38 &nbsp;</Text>
                                        <Text style={styles.boldblackStyle}>End Time :06:40</Text>
                                    </Text>
                                </View>
                                <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center' }}>
                                    <AntDesign name="clockcircleo" color="#6cab3c" size={20} />
                                    <Text style={{ color: '#333', flex: 1, marginLeft: 10, fontSize: 12 }}>Hours - <Text style={styles.boldblackStyle}>0.45</Text></Text>
                                </View>
                            </View>
                        </View>
                        <View style={{
                            position: 'absolute',
                            right: 10,
                            top: 10,
                            zIndex: 10,
                            paddingHorizontal: 15,
                            paddingVertical: 7,
                            backgroundColor: '#ffe7e7',
                            borderRadius: 100
                        }}>
                            <Text style={{ color: "#ff4949", fontWeight: 'bold' }}>Delete</Text>
                        </View>
                    </View>
                </View>
                <View style={{ height: 50 }}>
                </View>
            </ScrollView>
        );
    }
};
export default ViewTimesheetScreen;

const styles = StyleSheet.create({
    mainSectionStyle: {
        borderTopRightRadius: 50,
        backgroundColor: '#f7f8f9',
        paddingVertical: 20,
        paddingHorizontal: 15,
        height: '100%'
    },
    sectionStyle: {
        marginVertical: 7,
        borderRadius: 10,
        width: '100%'
    },
    titleStyle: {
        fontSize: 17,
        fontWeight: 'bold'
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
    boldblackStyle: {
        color: 'black',
        fontWeight: 'bold'
    }
});