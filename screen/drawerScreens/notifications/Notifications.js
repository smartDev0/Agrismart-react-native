//Import React
import React from 'react';

//Import all required component
import { ScrollView, StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import Loader from '../../components/loader';

class Notifications extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }

    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ loading: false })
        }, 2000);
    }
    render() {
        return (
            <View>
                <ScrollView style={styles.mainSectionStyle} bounces='false' contentContainerStyle={{ alignItems: 'center' }}>
                    <Loader loading={this.state.loading} />
                    <View style={styles.sectionStyle}>
                        <Text style={{ fontSize: 18, color: '#6cab3c', textAlign: 'center' }}>No Notifications</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default Notifications;

const styles = StyleSheet.create({
    mainSectionStyle: {
        borderTopRightRadius: 50,
        backgroundColor: '#f4f5f7',
        paddingVertical: 20,
        paddingHorizontal: 15,
        height: '100%'
    },
    sectionStyle: {
        padding: 10,
        marginVertical: 5,
        width: '100%',
        textAlign: "center",
        justifyContent: 'center'
    },
});