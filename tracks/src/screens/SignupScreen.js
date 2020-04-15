import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const SignupScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Sign Up Screen</Text>
            <Button title="Go To Sign Up" onPress={() => {navigation.navigate(Signin)}} />
        </View>
    );
};

const styles = StyleSheet.create({});

export default SignupScreen;